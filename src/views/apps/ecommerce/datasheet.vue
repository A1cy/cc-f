<script setup>
import { ref, onMounted } from 'vue';
import { useSheetsDataStore } from '@/@core/stores/sheetsData'; // Ensure this path matches your project structure
import { VDataTable } from 'vuetify/labs/VDataTable'

const items = ref([]);
const store = useSheetsDataStore();

const headers = [
  { text: 'Serial Number', align: 'start', sortable: false, value: 'serialNumber' },
  { text: 'Case Number', value: 'caseNumber', sortable: false },
  { text: 'Contact Type', value: 'contactType', sortable: false },
  { text: 'Case Date', value: 'caseDate', sortable: false },
  { text: 'Evaluation Date', value: 'evaluationDate', sortable: false },
  { text: 'Employee Info', value: 'employeeInfo', sortable: false },
  { text: 'Full Name', value: 'fullName', sortable: false },
  { text: 'Employee Number', value: 'employeeNumber', sortable: false },
  { text: 'Communication Clarity', value: 'communicationClarity', sortable: false },
  { text: 'Effective Listening', value: 'effectiveListening', sortable: false },
  { text: 'Case Understanding', value: 'caseUnderstanding', sortable: false },
  { text: 'Response Ability', value: 'responseAbility', sortable: false },
  { text: 'Case Completion', value: 'caseCompletion', sortable: false },
  { text: 'Interaction Speed', value: 'interactionSpeed', sortable: false },
  { text: 'Knowledge and Commitment', value: 'knowledgeCommitment', sortable: false },
  { text: 'Product Understanding', value: 'productUnderstanding', sortable: false },
  { text: 'Notes', value: 'notes', sortable: false },
];

onMounted(async () => {
  await store.fetchSheetData(); // Ensure this method is correctly fetching and populating `sheetData`

  items.value = store.sheetData.slice(1).map(row => ({
    serialNumber: row[0],
    caseNumber: row[1],
    contactType: row[2],
    caseDate: row[3],
    evaluationDate: row[4],
    employeeInfo: row[5],
    fullName: row[6],
    employeeNumber: row[7],
    communicationClarity: row[8],
    effectiveListening: row[9],
    caseUnderstanding: row[10],
    responseAbility: row[11],
    // caseCompletion: row[12] === 'نعم' ? 'Yes' : 'No', // Assuming 'نعم' means Yes and translating for clarity
    interactionSpeed: row[13],
    knowledgeCommitment: row[14],
    productUnderstanding: row[15],
    notes: row[16] || '',  
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
            height="300px" 
       
          />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
