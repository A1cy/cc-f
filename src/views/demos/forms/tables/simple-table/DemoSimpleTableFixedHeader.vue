<script setup>
import { defineProps } from 'vue';

// Assuming the Google Sheets data is passed as a prop
const props = defineProps({
  sheetData: Array
});
</script>

<template>
  <VTable height="250" fixed-header class="text-no-wrap">
    <thead>
      <tr>
        <!-- Dynamically generate table headers from the first row of sheet data -->
        <th v-for="(header, index) in props.sheetData[0]" :key="index" class="text-uppercase">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- Dynamically generate table rows from sheet data, skipping the first row (headers) -->
      <tr v-for="(row, rowIndex) in props.sheetData.slice(1)" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
