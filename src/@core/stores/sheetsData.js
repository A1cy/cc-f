 import { defineStore } from "pinia";

 export const useSheetsDataStore = defineStore("sheetsData", {
   state: () => ({
     sheetData: [],
     employeesPerformance: [],
   }),
   actions: {
     async fetchSheetData() {
       const sheetId = "1-VFSlgITO1mnX-Z1xn1rZ9wKmemGTULSiHD6Byl3WTU";
       const apiKey = "AIzaSyCgrfPXVtcdoKiN1-nqOl9JXyAv_yExzy0";
       const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:Z1000?key=${apiKey}`;
       try {
         const response = await fetch(url);
         if (!response.ok) throw new Error("Network response was not ok");
         const data = await response.json();
         this.sheetData = data.values;
         this.calculateEmployeesPerformance();
       } catch (error) {
         console.error("Error fetching Google Sheets data:", error);
       }
     },

     calculateEmployeesPerformance() {
       const employeeMap = new Map();

       this.sheetData
         .slice(1) // Skip the header row
         .filter((row) => row.length > 0 && row[8]?.trim()) // Filter out empty rows or rows without employee numbers
         .forEach((row) => {
           const employeeNumber = row[8].trim();
           const employeeName = row[7]?.trim();

           // Skip rows with incomplete or invalid data
           if (!employeeName || !employeeNumber) return;

           const scores = [
             parseFloat(row[9]),
             parseFloat(row[10]),
             parseFloat(row[11]),
             parseFloat(row[12]),
             row[13] === "نعم"
               ? 10
               : row[13] === "لا"
               ? 0
               : parseFloat(row[13]),
             parseFloat(row[14]),
             parseFloat(row[15]),
             parseFloat(row[16]),
             row[17] ? -1 : 0,
           ].filter((score) => !isNaN(score));

           const totalScore = scores.reduce((acc, score) => acc + score, 0);
           const averageScore =
             scores.length > 0 ? totalScore / scores.length : 0;

           if (employeeMap.has(employeeNumber)) {
             const existingData = employeeMap.get(employeeNumber);
             existingData.totalScore += totalScore;
             existingData.totalEvaluations += scores.length;
             existingData.totalAveragePerformance = (
               existingData.totalScore / existingData.totalEvaluations
             ).toFixed(2);
           } else {
             employeeMap.set(employeeNumber, {
               employeeInfo: row[6]?.trim() || "Info not available",
               fullName: employeeName,
               employeeNumber: employeeNumber,
               totalScore: totalScore,
               totalEvaluations: scores.length,
               totalAveragePerformance: averageScore.toFixed(2),
             });
           }
         });

       this.employeesPerformance = Array.from(employeeMap.values());
     },
   },
   getters: {
     getUserData: (state) => (userId) => {
       const userRow = state.sheetData.find((row) => row[8]?.trim() === userId);
       return userRow ? userRow[7]?.trim() : null; // Return the full name or null if not found
     },

     totalAveragePerformance: (state) => {
       let total = 0;
       let entries = 0;

       state.sheetData.slice(1).forEach((row) => {
         let rowTotal = 0;
         let validEntries = 0;

         for (let i = 9; i <= 16; i++) {
           let value = parseFloat(row[i]);

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
       let yesCount = 0;
       let noCount = 0;

       state.sheetData.slice(1).forEach((row) => {
         const answer = row[13]; // 'caseCompletion' column
         if (answer === "نعم") yesCount++;
         else if (answer === "لا") noCount++;
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
         const employeeId = row[8]?.trim(); // 'employeeNumber' column
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
         averages[key] =
           counts[key] > 0 ? (sums[key] / counts[key]).toFixed(2) : "N/A";
       });

       return averages;
     },

     bestEmployeeDetails: (state) => {
       const now = new Date();
       const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // Start of the current month

       const employeeScores = {};
       const employeeCounts = {};

       state.sheetData.slice(1).forEach((row) => {
         const evaluationDate = new Date(row[5]);
         if (evaluationDate >= startOfMonth && evaluationDate <= now) {
           const employeeName = row[7]?.trim();
           if (!employeeName) return; // Skip rows with missing employee names

           const scores = [
             parseFloat(row[9]),
             parseFloat(row[10]),
             parseFloat(row[11]),
             parseFloat(row[12]),
             parseFloat(row[14]),
           ].filter((score) => !isNaN(score));

           const feedback = row[17] ? -1 : 0;
           const totalScore =
             scores.reduce((acc, curr) => acc + curr, 0) + feedback;

           if (employeeScores.hasOwnProperty(employeeName)) {
             employeeScores[employeeName] += totalScore;
             employeeCounts[employeeName] += scores.length;
           } else {
             employeeScores[employeeName] = totalScore;
             employeeCounts[employeeName] = scores.length;
           }
         }
       });

       let bestEmployeeName = "";
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

     bestEmployeeFirstCallResolution: (state) => {
       const employeeResolutions = {};
       const employeeCounts = {};

       state.sheetData.slice(1).forEach((row) => {
         if (row[13] === "نعم") {
           // Assuming 'caseCompletion' column indicates first call resolution
           const employeeName = row[7]?.trim();
           if (!employeeName) return; // Skip rows with missing employee names

           const score = 1; // Increment count for each first call resolution

           if (employeeResolutions.hasOwnProperty(employeeName)) {
             employeeResolutions[employeeName] += score;
             employeeCounts[employeeName]++;
           } else {
             employeeResolutions[employeeName] = score;
             employeeCounts[employeeName] = 1;
           }
         }
       });

       let bestEmployeeName = "";
       let bestScore = -Infinity;

       Object.keys(employeeResolutions).forEach((employee) => {
         const totalResolutions = employeeResolutions[employee];
         if (totalResolutions > bestScore) {
           bestEmployeeName = employee;
           bestScore = totalResolutions;
         }
       });

       return {
         name: bestEmployeeName || "No data",
         totalResolutions: bestScore !== -Infinity ? bestScore : "N/A",
       };
     },

     mostAnsweringCallEmployee: (state) => {
       const now = new Date();
       const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // Start of the current month

       const employeeCallCounts = {};

       state.sheetData.slice(1).forEach((row) => {
         const evaluationDate = new Date(row[5]);
         if (evaluationDate >= startOfMonth && evaluationDate <= now) {
           const employeeName = row[7]?.trim();
           if (!employeeName) return; // Skip rows with missing employee names

           const callCount = 1; // Increment by 1 for each row, assuming each row is a call

           if (employeeCallCounts.hasOwnProperty(employeeName)) {
             employeeCallCounts[employeeName] += callCount;
           } else {
             employeeCallCounts[employeeName] = callCount;
           }
         }
       });

       let mostAnsweringEmployee = "";
       let maxCalls = -Infinity;

       Object.keys(employeeCallCounts).forEach((employee) => {
         const totalCalls = employeeCallCounts[employee];
         if (totalCalls > maxCalls) {
           mostAnsweringEmployee = employee;
           maxCalls = totalCalls;
         }
       });

       return {
         name: mostAnsweringEmployee || "No data",
         totalCalls: maxCalls !== -Infinity ? maxCalls : "N/A",
       };
     },

     dailyEmployeePerformances: (state) => {
       try {
         const employeePerformances = {};

         state.sheetData.slice(1).forEach((row) => {
           if (!row[6] || !row[5]) return;

           const employeeName = row[6]?.trim();
           const evaluationDate = new Date(row[5]).toDateString();

           const scores = [
             parseFloat(row[9]),
             parseFloat(row[10]),
             parseFloat(row[11]),
             parseFloat(row[12]),
             row[13] === "نعم"
               ? 10
               : row[13] === "لا"
               ? 0
               : parseFloat(row[13]),
             parseFloat(row[14]),
             parseFloat(row[15]),
             parseFloat(row[16]),
             row[17] ? -1 : 0,
           ].filter((score) => !isNaN(score));

           const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
           const averageScore =
             scores.length > 0 ? totalScore / scores.length : 0;

           if (!employeePerformances[employeeName]) {
             employeePerformances[employeeName] = {};
           }

           employeePerformances[employeeName][evaluationDate] = averageScore;
         });

         return employeePerformances;
       } catch (error) {
         console.error("Error in dailyEmployeePerformances function:", error);
       }
     },
   },
 });
