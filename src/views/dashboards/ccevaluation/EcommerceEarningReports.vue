<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import { hexToRgb } from '@layouts/utils';
import { useSheetsDataStore } from '@/@core/stores/sheetsData'; 
import VueApexCharts from 'vue3-apexcharts';
import { useI18n } from 'vue-i18n' // Import useI18n
const { t } = useI18n()
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}
function getLastSevenDays() {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const result = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    result.push(days[d.getDay()]);
  }
  return result;
}

const store = useSheetsDataStore();
const vuetifyTheme = useTheme();

// Reactive properties for series and performance reports
const series = ref([]);
const performanceReports = ref([]);
// Fetch sheet data and update component state


// Fetch sheet data and update component state
onMounted(async () => {
  await store.fetchSheetData(); // Fetches the sheet data
  const dailyPerformances = store.dailyEmployeePerformances;

  // Check if dailyPerformances is not null or undefined
  if (dailyPerformances) {
    // Aggregate performances for the chart series
    const aggregatedPerformances = [];
    Object.keys(dailyPerformances).forEach(employeeName => {
      const dates = Object.keys(dailyPerformances[employeeName]);
      const lastSevenDays = dates.slice(-7); // Limit to last seven days
      const performances = lastSevenDays.map(date => dailyPerformances[employeeName][date]);
      const averagePerformance = performances.reduce((a, b) => a + b, 0) / performances.length;
      
        // Check if the color for this employee is already stored
        let color = localStorage.getItem(employeeName);
      if (!color) {
        // If not, generate a new color and store it
        color = stringToColor(employeeName);
        localStorage.setItem(employeeName, color);
      }

      
      aggregatedPerformances.push({
        name: employeeName,
        data: performances,
        averagePerformance,
        color: color // Assign a unique color to each employee based on their name
      });
    });

    // Update series for chart based on aggregated performances
    series.value = aggregatedPerformances.map(perf => ({
      name: perf.name,
      data: perf.data,
      color: perf.color // Use the assigned color for each employee
    }));

    // Update performanceReports for list based on average performances
    performanceReports.value = aggregatedPerformances.map(perf => ({
      avatarIcon: 'tabler-user',
      avatarColor: 'primary', // Customize based on some logic if desired
      title: perf.name,
      subtitle: 'Average Performance',
      performance: perf.averagePerformance.toFixed(2),
      percentage: `${(perf.averagePerformance * 10).toFixed(0)}%`, // Convert to percentage
    }));
  }
});

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors;
  const variableTheme = vuetifyTheme.current.value.variables;
  const labelColor = `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['disabled-opacity']})`;
  const labelPrimaryColor = `rgba(${hexToRgb(currentTheme.primary)},0.1)`;
  
  return {
    chart: {
      type: 'bar',
      toolbar: { show: true },
    },
    tooltip: { enabled: true },
    plotOptions: {
      bar: {
        barHeight: '60%',
        columnWidth: '60%',
        startingShape: 'rounded',
        endingShape: 'rounded',
        borderRadius: 4,
        distributed: true,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: 0,
        left: -10,
        right: -10,
      },
    },
    colors: series.value.map(s => s.color),
    dataLabels: { enabled: false },
    legend: { show: true },
    xaxis: {
      categories: getLastSevenDays().slice(0, 7), // Limit to 7 days
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '13px',
        },
      },
    },
    yaxis: { labels: { show: false } },
  }
})

 

const moreList = [
{
    title: t('refresh'),
    value: 'refresh',
  },
  {
    title: t('download'),
    value: 'Download',
  },
  {
    title: t('viewAll'),
    value: 'View All',
  },
]
</script>

<template>
  <VCard :title="t('employeePerformances')" :subtitle="t('dailyPerformanceOverview')">
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText class="pb-0">
      <VList class="card-list mb-3">
        <VListItem v-for="report in performanceReports" :key="report.title">
          <template #prepend>
            <VAvatar rounded size="34" variant="tonal" :color="report.avatarColor">
              <VIcon :icon="report.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ report.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ t(report.subtitle) }}
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center text-body-2">
              <span class="me-3">{{ report.performance }}</span>
              <VIcon color="success" icon="tabler-chevron-up" size="18" class="me-1" />
              <span class="text-disabled">{{ report.percentage }}</span>
            </div>
          </template>
        </VListItem>
      </VList>

      <VueApexCharts :options="chartOptions" :series="series" :height="220" />
    </VCardText>
  </VCard>
</template>
