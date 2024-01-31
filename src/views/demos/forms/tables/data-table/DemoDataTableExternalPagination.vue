<script setup>
import { ref, onMounted } from 'vue';
import { useSheetsDataStore } from '@/@core/stores/sheetsData'; // Adjust the path as needed

// Define a reactive reference for the items that will be displayed in the table
const items = ref([]);

// Access the store
const store = useSheetsDataStore();

// Define headers for the VDataTable component
const headers = [
  { text: 'Serial Number', align: 'start', value: 'serialNumber' },
  { text: 'Case Number', value: 'caseNumber' },
  { text: 'Contact Type', value: 'contactType' },
  { text: 'Case Date', value: 'caseDate' },
  { text: 'Evaluation Date', value: 'evaluationDate' },
  { text: 'Employee Info', value: 'employeeInfo' },
  { text: 'Full Name', value: 'fullName' },
  { text: 'Employee Number', value: 'employeeNumber' },
 
];

onMounted(async () => {
  await store.fetchSheetData(); 
  
  items.value = store.sheetData.slice(1).map(row => ({
    serialNumber: row[0],
    caseNumber: row[1],
    contactType: row[2],
    caseDate: row[3],
    evaluationDate: row[4],
    employeeInfo: row[5],
    fullName: row[6],
    employeeNumber: row[7],
   }));
});
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardTitle>Google Sheets Data</VCardTitle>
        <VCardText>
          <VDataTable
            :headers="headers"
            :items="items"
            :fixed-header="true"
            :height="300" 
          />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
