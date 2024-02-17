// q: the data here is not updated from the google sheet


<script setup>
import { ref, onMounted } from 'vue';
import { useSheetsDataStore } from '@/@core/stores/sheetsData'; // Ensure this path matches your project structure
import { VDataTable } from 'vuetify/labs/VDataTable'

const items = ref([]);
const store = useSheetsDataStore();

// Headers remain the same as you are just mapping the data differently
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
    caseLink: row[1], // Added caseLink mapping if needed
    caseNumber: row[2],
    contactType: row[3],
    caseDate: row[4],
    evaluationDate: row[5],
    employeeInfo: row[6],
    fullName: row[7],
    employeeNumber: row[8],
    communicationClarity: row[9],
    effectiveListening: row[10],
    caseUnderstanding: row[11],
    responseAbility: row[12],
    // caseCompletion: row[13], // Update this if you need to translate 'نعم'/'لا' to 'Yes'/'No'
    interactionSpeed: row[14],
    knowledgeCommitment: row[15],
    productUnderstanding: row[16],
    feedback: row[17], // Added feedback mapping if needed
    correction: row[18], // Added correction mapping if needed
    notes: row[17] || '', // Adjust this based on where notes are now located or if another field is more appropriate
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
