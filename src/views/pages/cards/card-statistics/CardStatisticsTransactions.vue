<script setup>
import { useSheetsDataStore } from '@/@core/stores/sheetsData'
import { useI18n } from 'vue-i18n' // Import useI18n
const { t } = useI18n()
const store = useSheetsDataStore()

const statistics = computed(() => [
  {
    title: t('Average Communication Clarity'),
    stats: store.averageColumnValues.communicationClarity,
    icon: 'tabler-chart-pie-2',
    color: 'primary',
  },
 
  {
    title: t('Average effective Listening'),
    stats: store.averageColumnValues.effectiveListening,
    icon: 'tabler-volume-2',
    color: 'success',
  },
 
  {
    title: t('Average case Understanding'),
    stats: store.averageColumnValues.caseUnderstanding,
    icon: 'tabler-folder-check',
    color: 'error',
  },
 
  {
    title: t('Average responseAbility'),
    stats: store.averageColumnValues.responseAbility,
    icon: 'tabler-user-check',
    color: 'primary',
  },
 
  {
    title: t('Average interaction Speed'),
    stats: store.averageColumnValues.interactionSpeed,
    icon: 'tabler-trending-up',
    color: 'success',
  },
 
  {
    title: t('Average knowledge Commitment'),
    stats: store.averageColumnValues.knowledgeCommitment,
    icon: 'tabler-bookmark',
    color: 'error',
  },
 
  {
    title: t('Average product Understanding'),
    stats: store.averageColumnValues.productUnderstanding,
    icon: 'tabler-package',
    color: 'success',
  },
  
 
 
 
 ])
</script>
<template>
  <VCard :title="t('Statistics')">
    <template #append>
      <!-- <span class="text-sm text-disabled">Updated 1h ago</span> -->
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
