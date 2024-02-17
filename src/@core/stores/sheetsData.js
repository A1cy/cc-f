import { defineStore } from 'pinia';

export const useSheetsDataStore = defineStore('sheetsData', {
  state: () => ({
    sheetData: [],
  }),
  actions: {
    async fetchSheetData() {
      const sheetId = '1-VFSlgITO1mnX-Z1xn1rZ9wKmemGTULSiHD6Byl3WTU';
      const apiKey = 'AIzaSyCgrfPXVtcdoKiN1-nqOl9JXyAv_yExzy0';
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:Z1000?key=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        this.sheetData = data.values;
      } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
      }
    },
  },
  getters: {
    totalAveragePerformance: (state) => {
      // Updated column indices according to the new sheet order
      let total = 0;
      let entries = 0;

      state.sheetData.slice(1).forEach((row) => {
        let rowTotal = 0;
        let validEntries = 0;

        // Loop through the new score columns, assuming they start from index 9 to 16
        for (let i = 9; i <= 16; i++) {
          let value = row[i];

          // Adjust for the new special case column for 'responseAbility' which is now at index 12
          if (i === 12) {
            value = parseFloat(value); // Assuming responseAbility is now a number
          } else {
            value = parseFloat(value);
          }

          if (!isNaN(value) && value >= 0 && value <= 10) {
            rowTotal += value;
            validEntries++;
          }
        }

        if (validEntries > 0) {
          let rowAverage = rowTotal / validEntries;
          total += rowAverage;
          entries++;
        }
      });

      let totalAverage = entries > 0 ? total / entries : 0;
      return Number(totalAverage.toFixed(2));
    },
    yesNoPercentages: (state) => {
      // Adjusted for new column index for 'caseCompletion' which is now at index 13
      let yesCount = 0;
      let noCount = 0;

      state.sheetData.slice(1).forEach((row) => {
        const answer = row[13]; // New index for 'caseCompletion'
        if (answer === 'نعم') yesCount++;
        else if (answer === 'لا') noCount++;
      });

      const total = yesCount + noCount;
      return [
        total ? Math.round((yesCount / total) * 100) : 0,
        total ? Math.round((noCount / total) * 100) : 0,
      ];
    },
    uniqueEmployeeCount: (state) => {
      const uniqueIds = new Set();

      state.sheetData.slice(1).forEach((row) => {
        const employeeId = row[8]?.trim(); // New index for 'employeeNumber'
        if (employeeId) {
          uniqueIds.add(employeeId);
        }
      });

      return uniqueIds.size;
    },
    
    evaluationsCount: (state) => {
      let count = 0;

      state.sheetData.slice(1).forEach((row) => {
        const communicationClarity = parseFloat(row[9]);
        const effectiveListening = parseFloat(row[10]);
        const caseUnderstanding = parseFloat(row[11]);
        const responseAbility = parseFloat(row[12]);
        const caseCompletion = row[13];
        const interactionSpeed = parseFloat(row[14]);
        const knowledgeCommitment = parseFloat(row[15]);
        const productUnderstanding = parseFloat(row[16]);

        if (
          !isNaN(communicationClarity) ||
          !isNaN(effectiveListening) ||
          !isNaN(caseUnderstanding) ||
          !isNaN(responseAbility) ||
          caseCompletion ||
          !isNaN(interactionSpeed) ||
          !isNaN(knowledgeCommitment) ||
          !isNaN(productUnderstanding)
        ) {
          count++;
        }
      });

      return count;
    },
    averageColumnValues: (state) => {
      // Adjusted column indices
      let sums = {
        communicationClarity: 0,
        effectiveListening: 0,
        caseUnderstanding: 0,
        responseAbility: 0,
        interactionSpeed: 0,
        knowledgeCommitment: 0,
        productUnderstanding: 0,
      };
      let counts = {
        communicationClarity: 0,
        effectiveListening: 0,
        caseUnderstanding: 0,
        responseAbility: 0,
        interactionSpeed: 0,
        knowledgeCommitment: 0,
        productUnderstanding: 0,
      };

      state.sheetData.slice(1).forEach((row) => {
        Object.keys(sums).forEach((key, index) => {
          // Adjusted column indices for the new sheet order
          const columnIndex = [9, 10, 11, 12, 14, 15, 16][index];
          const value = parseFloat(row[columnIndex]);
          if (!isNaN(value)) {
            sums[key] += value;
            counts[key]++;
          }
        });
      });

      let averages = {};
      Object.keys(sums).forEach((key) => {
        averages[key] = counts[key] > 0 ? (sums[key] / counts[key]).toFixed(2) : "N/A";
      });

      return averages;
    },
 
    bestEmployeeDetails: (state) => {
      const now = new Date();
      const startOfWeek = now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1); // Adjust for week start (Sunday or Monday depending on your locale)
      const startOfThisWeek = new Date(now.setDate(startOfWeek));
      startOfThisWeek.setHours(0, 0, 0, 0);
    
      const employeeScores = {};
      const employeeCounts = {};
    
      state.sheetData.slice(1).forEach((row) => {
        const evaluationDate = new Date(row[5]);
        if (evaluationDate >= startOfThisWeek && evaluationDate <= new Date()) {
          const employeeName = row[7].trim();
          const scores = [
            parseFloat(row[9]), // communicationClarity
            parseFloat(row[10]), // effectiveListening
            parseFloat(row[11]), // caseUnderstanding
            parseFloat(row[12]), // responseAbility
            parseFloat(row[14]), // interactionSpeed
          ].filter(score => !isNaN(score));
    
          const feedback = row[17] ? -1 : 0; // Assuming feedback is always negative
          const totalScore = scores.reduce((acc, curr) => acc + curr, 0) + feedback;
    
          if (employeeScores.hasOwnProperty(employeeName)) {
            employeeScores[employeeName] += totalScore;
            employeeCounts[employeeName] += scores.length;
          } else {
            employeeScores[employeeName] = totalScore;
            employeeCounts[employeeName] = scores.length;
          }
        }
      });
    
      let bestEmployeeName = '';
      let bestScore = -Infinity;
    
      Object.keys(employeeScores).forEach((employee) => {
        const avgScore = employeeScores[employee] / employeeCounts[employee];
        if (avgScore > bestScore) {
          bestEmployeeName = employee;
          bestScore = avgScore;
        }
      });
    
      return {
        name: bestEmployeeName || "No data",
        avgScore: bestScore !== -Infinity ? bestScore.toFixed(2) : "N/A",
      };
    },

    dailyEmployeePerformances: (state) => {
      try {
        const employeePerformances = {};
    
        console.log('sheetData:', state.sheetData); // Log the sheetData array
    
        state.sheetData.slice(1).forEach((row, index) => {
          if (!row[6] || !row[5]) {
            console.log(`Row ${index + 1} is missing data. Skipping this row.`);
            return; // Skip this iteration if row[6] or row[5] is undefined
          }
    
          const employeeName = row[6].trim(); // employeeInfo
          const evaluationDate = new Date(row[5]).toDateString(); // Convert date to string for easy comparison
    
          console.log(`Row ${index + 1}: employeeName = ${employeeName}, evaluationDate = ${evaluationDate}`); // Log the employeeName and evaluationDate
    
          const scores = [
            parseFloat(row[9]), // communicationClarity
            parseFloat(row[10]), // effectiveListening
            parseFloat(row[11]), // caseUnderstanding
            parseFloat(row[12]), // responseAbility
            parseFloat(row[13]) === 'نعم' ? 10 : parseFloat(row[13]) === 'لا' ? 0 : parseFloat(row[13]), // caseCompletion, assuming نعم = 10, لا = 0
            parseFloat(row[14]), // interactionSpeed
            parseFloat(row[15]), // knowledgeCommitment
            parseFloat(row[16]), // productUnderstanding
            row[17] ? -1 : 0, // feedback, assuming any feedback is negative
          ].filter(score => !isNaN(score));
    
          console.log(`Row ${index + 1}: scores =`, scores); // Log the scores array
    
          const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
          const averageScore = scores.length > 0 ? totalScore / scores.length : 0;
    
          if (!employeePerformances[employeeName]) {
            employeePerformances[employeeName] = {};
          }
    
          employeePerformances[employeeName][evaluationDate] = averageScore;
        });
    
        console.log('employeePerformances:', employeePerformances); // Log the employeePerformances object
    
        return employeePerformances;
      } catch (error) {
        console.error('Error in dailyEmployeePerformances function:', error); // Log any errors that occur during the execution of the function
      }
    },

  },
});



// new order of the sheet:
// serialNumber: row[0],
// caseLink: row[1],
// caseNumber: row[2],
// contactType: row[3],
// caseDate: row[4],
// evaluationDate: row[5],
// employeeInfo: row[6],
// fullName: row[7],
// employeeNumber: row[8],
// communicationClarity: parseFloat(row[9]),
// effectiveListening: parseFloat(row[10]),
// caseUnderstanding: parseFloat(row[11]),
// responseAbility: parseFloat(row[12]),
// caseCompletion: row[13],
// interactionSpeed: parseFloat(row[14]),
// knowledgeCommitment: parseFloat(row[15]),
// productUnderstanding: parseFloat(row[16]),
// feedback: row[17],
// correction: row[18],
