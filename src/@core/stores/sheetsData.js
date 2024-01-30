// src/@core/stores/sheetsData.js
import { defineStore } from 'pinia'

export const useSheetsDataStore = defineStore('sheetsData', {
  state: () => ({
    sheetData: [],
  }),
  getters: {
    uniqueEmployeeCount: (state) => {
      const uniqueIds = new Set();
      state.sheetData.slice(1).forEach(row => {
        const employeeId = row[7]?.trim(); // Correct column for employee ID
        if (employeeId) {
          uniqueIds.add(employeeId);
        }
      });
      return uniqueIds.size;
    },
    evaluationsCount: (state) => {
      return state.sheetData.length > 0 ? state.sheetData.slice(1).length : 0;
    },
    averageColumnValues: (state) => {
      // Initialize sums and counts for each specified column
      let sums = {
        communicationClarity: 0, // Column 8
        effectiveListening: 0,   // Column 9
        caseUnderstanding: 0,    // Column 10
        responseAbility: 0,      // Column 11
        interactionSpeed: 0,     // Column 13
        knowledgeCommitment: 0,  // Column 14
        productUnderstanding: 0, // Column 15
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
    
      // Start iterating from the first data row, skipping the header
      state.sheetData.slice(1).forEach(row => {
        // Update sums and counts for each column if the value is a number
        Object.keys(sums).forEach((key, index) => {
          const columnIndex = [8, 9, 10, 11, 13, 14, 15][index];
          const value = parseFloat(row[columnIndex]);
          if (!isNaN(value)) {
            sums[key] += value;
            counts[key]++;
          }
        });
      });
    
      // Calculate averages for each column
      let averages = {};
      Object.keys(sums).forEach(key => {
        averages[key] = counts[key] > 0 ? (sums[key] / counts[key]).toFixed(2) : "N/A";
      });
    
      return averages;
    },
  },
  actions: {
    async fetchSheetData() {
      const sheetId = '1R459QAkvFyTYXb7P_Hs-Hxc2LNeAoK6K2_xZs1-jyz4';
      const apiKey = 'AIzaSyDhFVpHv6LWBbBlRCI_Lg0GeqMxvHWBiK8'; // Note: Be cautious with API keys
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:Z1000?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.sheetData = data.values;
      } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
      }
    },
  },
});
