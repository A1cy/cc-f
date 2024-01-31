<script setup>
import { useSheetsDataStore } from '@/@core/stores/sheetsData'
 
const store = useSheetsDataStore()

const statistics = computed(() => [
  {
    title: 'Average Communication Clarity',
    stats: store.averageColumnValues.communicationClarity,
    icon: 'tabler-chart-pie-2',
    color: 'primary',
  },
 
  {
    title: 'Average effective Listening  ',
    stats: store.averageColumnValues.effectiveListening,
    icon: 'tabler-chart-pie-2',
    color: 'success',
  },
 
  {
    title: 'Average case Understanding  ',
    stats: store.averageColumnValues.caseUnderstanding,
    icon: 'tabler-chart-pie-2',
    color: 'error',
  },
 
  {
    title: 'Average responseAbility  ',
    stats: store.averageColumnValues.responseAbility,
    icon: 'tabler-chart-pie-2',
    color: 'primary',
  },
 
  {
    title: 'Average  interaction Speed  ',
    stats: store.averageColumnValues.interactionSpeed,
    icon: 'tabler-chart-pie-2',
    color: 'success',
  },
 
  {
    title: 'Average knowledge Commitment',
    stats: store.averageColumnValues.knowledgeCommitment,
    icon: 'tabler-chart-pie-2',
    color: 'error',
  },
 
  {
    title: 'Average product Understanding',
    stats: store.averageColumnValues.productUnderstanding,
    icon: 'tabler-chart-pie-2',
    color: 'success',
  },
  
 
 
  {
    title: 'Evaluations',
    stats: store.evaluationsCount,
    icon: 'tabler-currency-dollar',
    color: 'info'
  } 
 ])
</script>
<template>
  <VCard title="Status">
    <template #append>
      <span class="text-sm text-disabled">Updated 1h ago</span>
    </template>
    <VCardText>
      <VRow>
        <VCol v-for="item in statistics" :key="item.title" cols="6" md="3">
          <div class="d-flex">
            <VAvatar :color="item.color" variant="tonal" size="42" class="me-3">
              <VIcon :icon="item.icon" />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-medium">{{ item.stats }}</span>
              <span class="text-sm">{{ item.title }}</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
