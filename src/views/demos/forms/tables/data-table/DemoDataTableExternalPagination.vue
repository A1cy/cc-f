<script setup>
import { ref, onMounted } from 'vue';
import { useSheetsDataStore } from '@/@core/stores/sheetsData'; // Ensure this path matches your project structure

const items = ref([]);

const store = useSheetsDataStore();

const headers = [
  { text: 'Serial Number', align: 'start', value: 'serialNumber' },
  { text: 'Case Number', value: 'caseNumber' },
  { text: 'Contact Type', value: 'contactType' },
  { text: 'Case Date', value: 'caseDate' },
  { text: 'Evaluation Date', value: 'evaluationDate' },
  { text: 'Employee Info', value: 'employeeInfo' },
  { text: 'Full Name', value: 'fullName' },
  { text: 'Employee Number', value: 'employeeNumber' },
  // Add headers for the assessment columns
  { text: 'Communication Clarity', value: 'communicationClarity' },
  { text: 'Effective Listening', value: 'effectiveListening' },
  { text: 'Case Understanding', value: 'caseUnderstanding' },
  { text: 'Response Ability', value: 'responseAbility' },
  { text: 'Case Completion', value: 'caseCompletion' },
  { text: 'Interaction Speed', value: 'interactionSpeed' },
  { text: 'Knowledge and Commitment', value: 'knowledgeCommitment' },
  { text: 'Product Understanding', value: 'productUnderstanding' },
  { text: 'Notes', value: 'notes' },
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
    communicationClarity: row[8],
    effectiveListening: row[9],
    caseUnderstanding: row[10],
    responseAbility: row[11],
    caseCompletion: row[12],
    interactionSpeed: row[13],
    knowledgeCommitment: row[14],
    productUnderstanding: row[15],
    notes: row[16] || '', // Optional, assuming notes might be empty
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
