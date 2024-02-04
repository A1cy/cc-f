// src/@core/stores/sheetsData.js
import { defineStore } from 'pinia'
import { parseISO, startOfWeek, format } from 'date-fns'

export const useSheetsDataStore = defineStore('sheetsData', {
  state: () => ({
    sheetData: [],
  }),
  actions: {
    async fetchSheetData() {
      const sheetId = '1R459QAkvFyTYXb7P_Hs-Hxc2LNeAoK6K2_xZs1-jyz4'
      const apiKey = 'AIzaSyDhFVpHv6LWBbBlRCI_Lg0GeqMxvHWBiK8'
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:Z1000?key=${apiKey}`
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()

        this.sheetData = data.values
      } catch (error) {
        console.error('Error fetching Google Sheets data:', error)
      }
    },
  },

  getters: {
    
    totalAveragePerformance: state => {
      let total = 0
      let entries = 0
    
      state.sheetData.slice(1).forEach(row => {
        let rowTotal = 0
        let validEntries = 0
    
        // Loop through the score columns, assuming they start from index 7 to 14
        for (let i = 7; i <= 14; i++) {
          let value = row[i]
    
          // Special case for the column that contains 'نعم' or 'لا'
          if (i === 11) {
            value = value === 'نعم' ? 10 : 0
          } else {
            value = parseFloat(value)
          }
    
          // Check if the value is a number and within the expected range
          if (!isNaN(value) && value >= 0 && value <= 10) {
            rowTotal += value
            validEntries++
          }
        }
    
        // Calculate the average for the row if there are valid entries
        if (validEntries > 0) {
          let rowAverage = rowTotal / validEntries
          total += rowAverage
          entries++
        }
      })
    
      // Calculate the total average
      let totalAverage = entries > 0 ? total / entries : 0
    
      // Return the total average to two decimal places
      return Number(totalAverage.toFixed(2))
    },
    yesNoPercentages: state => {
      let yesCount = 0
      let noCount = 0
  
      state.sheetData.slice(1).forEach(row => {
        const answer = row[12] // Assuming the answers are in the 13th column (index 12)
        if (answer === 'نعم') yesCount++
        else if (answer === 'لا') noCount++
      })
  
      const total = yesCount + noCount
      
      return [
        total ? Math.round((yesCount / total) * 100) : 0, // Yes percentage
        total ? Math.round((noCount / total) * 100) : 0,   // No percentage
      ]
    },
    uniqueEmployeeCount: state => {
      const uniqueIds = new Set()

      state.sheetData.slice(1).forEach(row => {
        const employeeId = row[7]?.trim() // Correct column for employee ID
        if (employeeId) {
          uniqueIds.add(employeeId)
        }
      })
      
      return uniqueIds.size
    },
    evaluationsCount: state => {
      return state.sheetData.length > 0 ? state.sheetData.slice(1).length : 0
    },
    averageColumnValues: state => {
      // Initialize sums and counts for each specified column
      let sums = {
        communicationClarity: 0, // Column 8
        effectiveListening: 0,   // Column 9
        caseUnderstanding: 0,    // Column 10
        responseAbility: 0,      // Column 11
        interactionSpeed: 0,     // Column 13
        knowledgeCommitment: 0,  // Column 14
        productUnderstanding: 0, // Column 15
      }
      let counts = {
        communicationClarity: 0,
        effectiveListening: 0,
        caseUnderstanding: 0,
        responseAbility: 0,
        interactionSpeed: 0,
        knowledgeCommitment: 0,
        productUnderstanding: 0,
      }
    
      // Start iterating from the first data row, skipping the header
      state.sheetData.slice(1).forEach(row => {
        // Update sums and counts for each column if the value is a number
        Object.keys(sums).forEach((key, index) => {
          const columnIndex = [8, 9, 10, 11, 13, 14, 15][index]
          const value = parseFloat(row[columnIndex])
          if (!isNaN(value)) {
            sums[key] += value
            counts[key]++
          }
        })
      })
    
      // Calculate averages for each column
      let averages = {}
      Object.keys(sums).forEach(key => {
        averages[key] = counts[key] > 0 ? (sums[key] / counts[key]).toFixed(2) : "N/A"
      })
    
      return averages
    },
    _parsedSheetData: (state) => {
      return state.sheetData.slice(1).map(row => ({
        evaluationDate: row[4],
        fullName: row[6]?.trim(),
        employeeId: row[7]?.trim(),
        performanceScores: [8, 9, 10, 13, 14, 15].map(i => parseFloat(row[i])).filter(v => !isNaN(v) && v >= 0 && v <= 10),
        responseAbility: row[11] === 'نعم' ? 10 : row[11] === 'لا' ? 0 : parseFloat(row[11]),
        caseCompletion: row[12],
      })).filter(row => row.employeeId && row.fullName);
    },
    employeeWeeklyPerformance: (state, getters) => {
      const performanceByEmployeeAndWeek = {};
      getters._parsedSheetData.forEach(({ employeeId, fullName, evaluationDate, performanceScores }) => {
        const date = startOfWeek(parseISO(evaluationDate), { weekStartsOn: 1 });
        const weekKey = format(date, 'yyyy-ww');
        const key = `${fullName}-${employeeId}-${weekKey}`;

        if (!performanceByEmployeeAndWeek[key]) performanceByEmployeeAndWeek[key] = [];
        const averagePerformance = performanceScores.length ? performanceScores.reduce((sum, score) => sum + score, 0) / performanceScores.length : 0;
        performanceByEmployeeAndWeek[key].push(averagePerformance);
      });

      return Object.entries(performanceByEmployeeAndWeek).map(([key, performances]) => {
        const [fullName, employeeId, week] = key.split('-');
        const averagePerformance = performances.reduce((a, b) => a + b, 0) / performances.length;
        return { fullName, employeeId, week, averagePerformance: Number(averagePerformance.toFixed(2)) };
      });
    }
  }
});

// serialNumber: row[0],
// caseNumber: row[1],
// contactType: row[2],
// caseDate: row[3],
// evaluationDate: row[4],
// employeeInfo: row[5],
// fullName: row[6],
// employeeNumber: row[7],
// communicationClarity: parseFloat(row[8]),
// effectiveListening: parseFloat(row[9]),
// caseUnderstanding: parseFloat(row[10]),
// responseAbility: row[11] === 'نعم' ? 10 : (row[11] === 'لا' ? 0 : parseFloat(row[11])),
// caseCompletion: row[12], // Assume 'Yes' or 'No' values are in this column
// interactionSpeed: parseFloat(row[13]),
// knowledgeCommitment: parseFloat(row[14]),
// productUnderstanding: parseFloat(row[15]),
// notes: row[16],
