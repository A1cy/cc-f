<script setup>
import { ref, onMounted } from "vue";
import { useSheetsDataStore } from "@/@core/stores/sheetsData";

const store = useSheetsDataStore();

onMounted(async () => {
  if (store.employeesPerformance.length === 0) {
    await store.fetchSheetData();
  }
});
</script>

<template>
  <div>
    <VCard class="mb-4" v-for="(employee, index) in store.employeesPerformance" :key="index">
      <VCardText>
        <p class="text-xs">ABOUT</p>
        <VList class="card-list text-medium-emphasis">
          <VListItem>
            <template #prepend>
              <VIcon icon="mdi-account-card-details" size="20" class="me-2" />
            </template>
            <VListItemTitle>
              <span class="font-weight-medium me-1">Full Name:</span>
              <span>{{ employee.fullName }}</span>
            </VListItemTitle>
          </VListItem>
          <VListItem>
            <template #prepend>
              <VIcon icon="mdi-account-card-details" size="20" class="me-2" />
            </template>
            <VListItemTitle>
              <span class="font-weight-medium me-1">Employee Number:</span>
              <span>{{ employee.employeeNumber }}</span>
            </VListItemTitle>
          </VListItem>
          <VListItem>
            <template #prepend>
              <VIcon icon="mdi-chart-line" size="20" class="me-2" />
            </template>
            <VListItemTitle>
              <span class="font-weight-medium me-1">Total Average Performance:</span>
              <span>{{ employee.totalAveragePerformance }}</span>
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCardText>
    </VCard>
  </div>
</template>




<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
<!-- Inside About.vue, bind $attrs to a child component -->
<ChildComponent v-bind="$attrs" />
