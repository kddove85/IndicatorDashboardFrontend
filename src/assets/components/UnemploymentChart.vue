<template>
  <h2>National Unemployment %</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="300%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: Bureau of Labor Statistics</p>
</template>

<script>
import { getUnemployment } from '../../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: 'Home',
  components: { apexchart: VueApexCharts },
  setup() {
    let data = ref()
    let dataValues = ref([])
    let dataLabels = ref([])
    let loading = ref(true)

    const type = ref("bar");

    onMounted(async() => {
      data.value = await getUnemployment();

      dataValues.value = data.value.map(item => item.value)
      dataLabels.value = data.value.map(item => item.date)
      loading.value = false;
    })

    let series = computed(() => ([
      {
        name: "Unemployment %",
        data: dataValues.value,
      },
    ]));

    let chartOptions = computed(() => ({
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: dataLabels.value,
        tickAmount: 20,
      },
      yaxis: {
        title: {
            text: "Unemployment %",
        },
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.7
      },
    }));

    return { type, chartOptions, series, loading };
  },
});
</script>