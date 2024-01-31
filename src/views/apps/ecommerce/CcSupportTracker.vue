<script setup>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useSheetsDataStore } from '@core/stores/sheetsData.js'; // Ensure this path is correct
import { useTheme } from 'vuetify';
import { hexToRgb } from '@layouts/utils';

const store = useSheetsDataStore();
const vuetifyTheme = useTheme();

// Bind the calculated average performance to the series
const series = computed(() => [store.totalAveragePerformance * 10]);

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;
  
  return {
    labels: ['Average Performance'],
    chart: { type: 'radialBar' },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -140,
        endAngle: 130,
        hollow: { size: '65%' },
        track: {
          background: currentTheme.surface,
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: `rgba(${hexToRgb(currentTheme['on-background'])}, ${variableTheme['disabled-opacity']})`,
            fontSize: '13px',
            fontWeight: '400',
            fontFamily: 'Public Sans',
          },
          value: {
            offsetY: 10,
            color: `rgba(${hexToRgb(currentTheme['on-background'])}, ${variableTheme['high-emphasis-opacity']})`,
            fontSize: '38px',
            fontWeight: '400',
            fontFamily: 'Public Sans',           
            formatter: (val) => `${val.toFixed(2)} / 10`, // This will format the value as a decimal out of 10

          },
        },
      },
    },
    colors: [currentTheme.primary],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.5,
        gradientToColors: [currentTheme.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    stroke: { dashArray: 10 },
    grid: {
      padding: {
        top: -20,
        bottom: 5,
      },
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    responsive: [{
      breakpoint: 960,
      options: { chart: { height: 340 } },
    }],
  }
});


const supportTicket = [
  {
    avatarColor: 'primary',
    avatarIcon: 'tabler-users',
    title: 'Employees',
    subtitle: store.uniqueEmployeeCount,
  },
  {
    avatarColor: 'info',
    avatarIcon: 'tabler-circle-check',
    title: 'Evaluations',
    subtitle: store.evaluationsCount,
  },
  {
    avatarColor: 'warning',
    avatarIcon: 'tabler-clock',
    title: 'Response Time',
    subtitle: '1 Day',
  },
]
</script>

<template>
  <VCard
    title="Support Tracker"
    subtitle="Last 7 Days"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="[{ title: 'View More', value: 'View More' }, { title: 'Delete', value: 'Delete' }]" />
      </div>
    </template>

    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="5"
          sm="6"
          class="mt-auto"
        >
          <div class="mb-6">
            <h4 class="text-h1">
              {{store.evaluationsCount}}
            </h4>
            <p>
              Total Evaluations
            </p>
          </div>

          <VList class="card-list">
            <VListItem
              v-for="ticket in supportTicket"
              :key="ticket.title"
            >
              <VListItemTitle class="font-weight-medium">
                {{ ticket.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-disabled">
                {{ ticket.subtitle }}
              </VListItemSubtitle>
              <template #prepend>
                <VAvatar
                  rounded
                  size="34"
                  :color="ticket.avatarColor"
                  variant="tonal"
                >
                  <VIcon :icon="ticket.avatarIcon" />
                </VAvatar>
              </template>
            </VListItem>
          </VList>
        </VCol>
        <VCol
          cols="12"
          md="7"
          sm="6"
        >
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            height="340"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 18px;
}
</style>
