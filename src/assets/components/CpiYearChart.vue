<template>
  <h2>Change in Inflation Year to Year</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="300%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: Bureau of Labor Statistics</p>
</template>

<script>
import { getCpiYearly } from '../../services/DashboardApi.js';
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
        data.value = await getCpiYearly();

      dataValues.value = data.value.map(item => item.value)
      dataLabels.value = data.value.map(item => item.date)
      loading.value = false;
    })

    let series = computed(() => ([
      {
        name: "Change in Inflation %",
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
            text: "Change in Inflation %",
        },
        max: 10,
        min: -10
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
              from: -100,
              to: 0,
              color: '#2A9DF4'
            },
            {
              from: 0,
              to: 100,
              color: '#FF0000'
            }]
          }
        },
      },
      annotations: {
          xaxis: [
            {
              x: '1981-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Reagan'
              }
            },
            {
              x: '1989-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Bush'
              }
            },
            {
              x: '1993-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Clinton'
              }
            },
            {
              x: '2001-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Bush'
              }
            },
            {
              x: '2009-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Obama'
              }
            },
            {
              x: '2017-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Trump'
              }
            },
            {
              x: '2020-03',
              borderColor: '#50C878',
              label: {
                borderColor: "#50C878",
                style: {
                  color: '#fff',
                  background: "#50C878"
                },
                text: 'Covid'
              }
            },
            {
              x: '2021-01',
              borderColor: '#775DD0',
              label: {
                borderColor: "#775DD0",
                style: {
                  color: '#fff',
                  background: "#775DD0"
                },
                text: 'Biden'
              }
            },
          ]
        }
    }));

    return { type, chartOptions, series, loading };
  },
});
</script>