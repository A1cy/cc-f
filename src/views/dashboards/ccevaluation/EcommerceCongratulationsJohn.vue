<script setup>
import { ref, onMounted } from 'vue';
import { useSheetsDataStore } from '@/@core/stores/sheetsData';
import congoImg from '@images/illustrations/laptop-girl.png';

const store = useSheetsDataStore();
const bestEmployeeDetails = ref({ name: '', avgScore: 'N/A' });
const bestFirstCallResolutionEmployee = ref({ name: '', totalResolutions: 'N/A' });

onMounted(async () => {
  try {
    await store.fetchSheetData(); // Fetch data initially
    bestEmployeeDetails.value = store.bestEmployeeDetails;
    bestFirstCallResolutionEmployee.value = store.bestEmployeeFirstCallResolution;
    console.log('Best Employee Details:', bestEmployeeDetails.value);
    console.log('Best First Call Resolution Employee:', bestFirstCallResolutionEmployee.value);
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
});
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="8">
        <VCardText>
          <h6 class="text-lg text-no-wrap font-weight-medium">
            Congratulations {{ bestEmployeeDetails.name }}!! 🎉
          </h6>
          <p class="mb-2">
            Best customer care employee of the week
          </p>
          <h4 class="text-h4 font-weight-medium text-primary mb-1">
            Avg: {{ bestEmployeeDetails.avgScore }}/10
          </h4>
          <VBtn>View Performance</VBtn>
        </VCardText>
      </VCol>
      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            :src="congoImg"
            height="147"
            class="congo-john-img w-100"
          />
        </VCardText>
      </VCol>
    </VRow>
    <VRow no-gutters class="mt-4">
      <VCol cols="8">
        <VCardText>
          <h6 class="text-lg text-no-wrap font-weight-medium">
            Congratulations {{ bestFirstCallResolutionEmployee.name }}!! 🎉
          </h6>
          <p class="mb-2">
            Best employee for solving issues on the first call
          </p>
          <h4 class="text-h4 font-weight-medium text-primary mb-1">
            Total Resolutions: {{ bestFirstCallResolutionEmployee.totalResolutions }}
          </h4>
        </VCardText>
      </VCol>
      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            :src="congoImg"
            height="147"
            class="congo-john-img w-100"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.congo-john-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 1.25rem;
}
</style>
