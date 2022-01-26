<template>
  <h2>National Deficit in Billions USD</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="300%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: The American Presidency Project</p>
</template>

<script>
import { getDeficit } from '../../services/DashboardApi.js';
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
      data.value = await getDeficit();

      dataValues.value = data.value.map(item => item.deficit)
      dataLabels.value = data.value.map(item => item.year)
      loading.value = false;
    })

    let series = computed(() => ([
      {
        name: "Degrees in Celsius",
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
            text: "Billions of USD",
        },
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.7
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: -10000,
              to: 0,
              color: '#FF0000'
            },
            {
              from: 0,
              to: 10000,
              color: '#388805'
            }]
          }
        },
      },
    }));

    return { type, chartOptions, series, loading };
  },
});
</script>