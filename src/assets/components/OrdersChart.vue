<template>
  <h2>Executive Orders by President</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="500%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: The American Presidency Project</p>
</template>

<script>
import { getOrders } from '../../services/DashboardApi.js';
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
      data.value = await getOrders();

      dataValues.value = data.value.map(item => item.orders)
      dataLabels.value = data.value.map(item => item.president)
      loading.value = false;
    })

    let series = computed(() => ([
      {
        name: "Executive Orders",
        data: dataValues.value,
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
            text: "Executive Orders",
        },
        max: 4000
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.7
      },
      plotOptions: {
        bar: {
            horizontal: true,
        },
      },
    }));

    return { type, chartOptions, series, loading };
  },
});
</script>