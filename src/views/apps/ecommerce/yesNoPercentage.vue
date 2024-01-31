<script setup>
import VueApexCharts from 'vue3-apexcharts';
import { computed } from 'vue';
import { useSheetsDataStore } from '@core/stores/sheetsData.js'; // Adjust the import path
import { useI18n } from 'vue-i18n' // Import useI18n
const { t } = useI18n()
const store = useSheetsDataStore();

// This computed property will automatically update when the store's state changes
const deliveryExceptionsChartSeries = computed(() => store.yesNoPercentages);

// Adjusting chart configuration to use dynamic labels and series
const deliveryExceptionsChartConfig = {
  labels: ['Yes', 'No'],
  colors: ['#56ca00', '#ff4560'],
  stroke: { width: 0 },
  dataLabels: {
    enabled: true,
    formatter(val) {
      return `${val}%`;
    },
  },
  legend: {
    show: true,
    position: 'bottom',
    offsetY: 10,
    markers: {
      width: 8,
      height: 8,
      offsetX: -3,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 5,
    },
    fontSize: '13px',
    fontWeight: 400,
    labels: {
      colors: '#525252', // Adjust as needed
      useSeriesColors: false,
    },
  },
  tooltip: { theme: 'dark' },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        labels: {
          show: true,
          total: {
            show: false,
            label: 'Total Answers',
            formatter: (w) => {
              // Sum of all series values to show as total
              return `${w.globals.seriesTotals.reduce((a, b) => a + b, 0)}%`
            },
          },
        },
      },
    },
  },
  responsive: [{
    breakpoint: 420,
    options: { chart: { height: 400 } },
  }],
};
</script>

<template>
  <VCard>
    <VCardItem
  
    :title="t('caseFirstTimeCompletionRate')"
    >
      <template #append>
        <!-- Your MoreBtn component -->
      </template>
    </VCardItem>
    <VCardText>
      <VueApexCharts
        type="donut"
        height="300"
        :options="deliveryExceptionsChartConfig"
        :series="deliveryExceptionsChartSeries"
      />
    </VCardText>
  </VCard>
</template>
