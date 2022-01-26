<template>
  <h2>Department Spending in Billions USD</h2>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <apexchart :type="type" width="100%" height="300%" :options="chartOptions" :series="series"></apexchart>
  </div>
  <p>Source: FiscalData.Treasury.gov</p>
</template>

<script>
import { getDepartmentSpending } from '../../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: 'Home',
  components: { apexchart: VueApexCharts },
  setup() {
    let data = ref()
    let data_sets = ref([])
    let department_keys = ref([])
    let loading = ref(true)

    const type = ref("bar");

    onMounted(async() => {
        data.value = await getDepartmentSpending();
        department_keys = Object.keys(data.value)
        loading.value = false;
    })

    let series = computed(() => ([
      {
        name: department_keys[5],
        data: data.value[department_keys[5]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[8],
        data: data.value[department_keys[8]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[13],
        data: data.value[department_keys[13]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[16],
        data: data.value[department_keys[16]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[17],
        data: data.value[department_keys[17]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[3],
        data: data.value[department_keys[3]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[6],
        data: data.value[department_keys[6]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[15],
        data: data.value[department_keys[15]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[25],
        data: data.value[department_keys[25]].map(item => item.cost_in_billions),
      },
      {
        name: department_keys[42],
        data: data.value[department_keys[42]].map(item => item.cost_in_billions),
      },
    ]));

    let chartOptions = computed(() => ({
      chart: {
        id: "vuechart-example",
        stacked: true,
      },
      xaxis: {
        categories: data.value[department_keys[0]].map(item => item.date),
      },
      yaxis: {
        title: {
            text: "Cost in Billions USD",
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1AA7EC', '#4FA64F', '#D4Af37', '#EA4C46', '#A03CAE', '#000000', '#E36B89', '#6B3E2E'],
      fill: {
        opacity: 0.7
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      annotations: {
          xaxis: [
            {
              x: '2009',
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
              x: '2017',
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
              x: '2021',
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