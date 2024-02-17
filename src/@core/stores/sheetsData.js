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
