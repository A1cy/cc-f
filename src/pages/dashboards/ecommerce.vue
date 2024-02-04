<script setup>
// import EcommerceCongratulationsJohn from '@/views/dashboards/ecommerce/EcommerceCongratulationsJohn.vue'
// import EcommerceEarningReports from '@/views/dashboards/ecommerce/EcommerceEarningReports.vue'
// import EcommerceExpensesRadialBarCharts from '@/views/dashboards/ecommerce/EcommerceExpensesRadialBarCharts.vue'
// import EcommerceGeneratedLeads from '@/views/dashboards/ecommerce/EcommerceGeneratedLeads.vue'
// import EcommerceInvoiceTable from '@/views/dashboards/ecommerce/EcommerceInvoiceTable.vue'
// import EcommerceOrder from '@/views/dashboards/ecommerce/EcommerceOrder.vue'
// import EcommercePopularProducts from '@/views/dashboards/ecommerce/EcommercePopularProducts.vue'
// import EcommerceRevenueReport from '@/views/dashboards/ecommerce/EcommerceRevenueReport.vue'
// import EcommerceStatistics from '@/views/dashboards/ecommerce/EcommerceStatistics.vue'
// import EcommerceTotalProfitLineCharts from '@/views/dashboards/ecommerce/EcommerceTotalProfitLineCharts.vue'
// import EcommerceTransactions from '@/views/dashboards/ecommerce/EcommerceTransactions.vue'
import {
  useSheetsDataStore,
} from '@/@core/stores/sheetsData'
import CardStatisticsTransactions from '@/views/pages/cards/card-statistics/CardStatisticsTransactions.vue'
import yesNoPercentage from '@/views/apps/ecommerce/yesNoPercentage.vue'
import CcSupportTracker from '@/views/apps/ecommerce/CcSupportTracker.vue'
import datasheet from '@/views/apps/ecommerce/datasheet.vue'


const store = useSheetsDataStore()

store.fetchSheetData() // Fetch data on component mount or when needed
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <CardStatisticsTransactions />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <CcSupportTracker />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <yesNoPercentage />
      </VCard>
    </VCol>
    <VCol cols="12">
      <datasheet />
    </VCol>
    <!-- Integration of Google Sheets Data -->
    <!-- 
      <VCol cols="12" md="12" lg="12" />
      <VCol cols="12" md="5" lg="4">
      <EcommerceCongratulationsJohn />
      </VCol>

 
      <VCol cols="12" md="7" lg="8">
      <EcommerceStatistics class="h-100" />
      </VCol>

      <VCol cols="12" lg="4">
      <VRow>
      <VCol cols="12" lg="6" md="3" sm="6">
      <EcommerceExpensesRadialBarCharts />
      </VCol>

      <VCol cols="12" lg="6" md="3" sm="6">
      <EcommerceTotalProfitLineCharts />
      </VCol>

      <VCol cols="12" md="6" lg="12">
      <EcommerceGeneratedLeads />
      </VCol>
      </VRow>
      </VCol>

      <VCol cols="12" lg="8">
      <EcommerceRevenueReport />
      </VCol>

      <VCol cols="12" sm="6" lg="4">
      <EcommerceEarningReports />
      </VCol>

      <VCol cols="12" sm="6" lg="4">
      <EcommercePopularProducts />
      </VCol>

      <VCol cols="12" sm="6" lg="4">
      <EcommerceOrder />
      </VCol>

      <VCol cols="12" sm="6" lg="4">
      <EcommerceTransactions />
      </VCol>

      <VCol cols="12" lg="8">
      <EcommerceInvoiceTable />
      </VCol> 
    -->
  </VRow>
</template>

<style lang="scss">
    @use "@core/scss/template/libs/apex-chart.scss";
</style>
