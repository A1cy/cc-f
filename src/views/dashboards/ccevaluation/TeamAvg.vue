<script setup>
import { onMounted, ref } from 'vue';
import { useSheetsDataStore } from '@/@core/stores/sheetsData'; // Adjust the import path as necessary

const store = useSheetsDataStore();
const employeesPerformance = ref([]);

onMounted(async () => {
  await store.fetchSheetData();
  employeesPerformance.value = store.employeesPerformance;
});
</script>

<template>
  <VRow>
    <VCol
      v-for="employee in employeesPerformance"
      :key="employee.employeeNumber"
      sm="6"
      lg="3"
      cols="12"
    >
      <VCard>
        <VCardItem>
          <VCardTitle class="d-flex flex-column align-center justify-center gap-y-5">
            <!-- Assuming avatar is not available in your sheet data, so it's omitted -->
            <div class="text-center">
              <h4 class="text-h4">{{ employee.fullName }}</h4>
              <h6 class="text-h6">{{ employee.employeeInfo }}</h6>
            </div>
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <div class="d-flex justify-space-around">
            <div class="text-center">
              <h4 class="text-h4">{{ employee.totalAveragePerformance }}</h4>
              <span class="text-body-1">Average Performance</span>
            </div>
            <!-- Additional details like projects, tasks, connections can be added here if available -->
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.vertical-more {
  position: absolute;
  inset-block-start: 1rem;
  inset-inline-end: 0.5rem;
}
</style>
