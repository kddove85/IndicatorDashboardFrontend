<template>
  <h2>Immigration / Deportation</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="300%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: Department of Homeland Security</p>
</template>

<script>
import { getImmigrationDeportation } from '../../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: 'Home',
  components: { apexchart: VueApexCharts },
  setup() {
    let data = ref()
    let immigrationData = ref()
    let deportationData = ref()
    let dataLabels = ref([])
    let loading = ref(true)

    const type = ref("area");

    onMounted(async() => {
      data.value = await getImmigrationDeportation();

      immigrationData.value = data.value.map(item => item.immigration)
      deportationData.value = data.value.map(item => item.deportation)
      dataLabels.value = data.value.map(item => item.year)
      loading.value = false;
    })

    let series = computed(() => ([
      {
        name: "Immigrated",
        data: immigrationData.value,
      },
      {
        name: "Deported",
        data: deportationData.value,
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
            text: "Number of People",
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#388805', '#FF0000'],
      fill: {
        opacity: 0.7
      },
    }));

    return { type, chartOptions, series, loading };
  },
});
</script>