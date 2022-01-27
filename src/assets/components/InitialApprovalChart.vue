<template>
  <h2>Presidential Approval Rating at Time of Entering Office</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="250%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: The American Presidency Project</p>
</template>

<script>
import { getInitialApproval } from '../../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: 'Home',
  components: { apexchart: VueApexCharts },
  setup() {
    let data = ref()
    let dataApproval = ref([])
    let dataDisapproval = ref([])
    let dataLabels = ref([])
    let loading = ref(true)

    const type = ref("bar");

    onMounted(async() => {
      data.value = await getInitialApproval();

        dataApproval.value = data.value.map(item => item.approval)
        dataDisapproval.value = data.value.map(item => item.disapproval)
        dataLabels.value = data.value.map(item => item.president)
        loading.value = false;
    })

    let series = computed(() => ([
      {
        name: "Approval",
        data: dataApproval.value,
      },
      {
        name: "Disapproval",
        data: dataDisapproval.value,
      },
    ]));

    let chartOptions = computed(() => ({
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: dataLabels.value,
      },
      yaxis: {
        title: {
            text: "Approval % Upon Entering Office",
        },
        max: 100
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1AA7EC', '#EA4C46'],
      fill: {
        opacity: 0.7
      },
      plotOptions: {
        bar: {
            horizontal: false,
        },
      },
    }));

    return { type, chartOptions, series, loading };
  },
});
</script>