<template>
    <div>
        <h1>Department Spending USD in Billions</h1>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <BarChart ref="barRef" :chartData="testData" :options="options" />
        </div>
    </div>
    <p>Source: FiscalData.Treasury.gov</p>
    <br/>
</template>

<script>
import { getDepartmentSpending } from '../../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { BarChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { BarChart },
  setup() {
    let data = ref()
    let data_sets = ref([])
    let department_keys = ref([])
    let loading = ref(true)

    onMounted(async() => {
        data.value = await getDepartmentSpending();
        department_keys = Object.keys(data.value)
        loading.value = false;
    })
    const barRef = ref();

    const options = ref({
      responsive: true,
      scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true
        }
      },
      maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
    },
    title: {
      display: false,
      text: "Bar Chart"
    },
    });

    const testData = computed(() => ({
      labels: data.value[department_keys[0]].map(item => item.date),
      datasets: [
        {
            label: department_keys[5],
            data: data.value[department_keys[5]].map(item => item.cost_in_billions),
            backgroundColor: '#00FFFF',
            stack: 'Stack 0',
        },
        {
            label: department_keys[8],
            data: data.value[department_keys[8]].map(item => item.cost_in_billions),
            backgroundColor: '#89CFF0',
            stack: 'Stack 0',
        },
        {
            label: department_keys[13],
            data: data.value[department_keys[13]].map(item => item.cost_in_billions),
            backgroundColor: '#0000FF',
            stack: 'Stack 0',
        },
        {
            label: department_keys[16],
            data: data.value[department_keys[16]].map(item => item.cost_in_billions),
            backgroundColor: '#7393B3',
            stack: 'Stack 0',
        },
        {
            label: department_keys[17],
            data: data.value[department_keys[17]].map(item => item.cost_in_billions),
            backgroundColor: '#088F8F',
            stack: 'Stack 0',
        },
        {
            label: department_keys[27],
            data: data.value[department_keys[27]].map(item => item.cost_in_billions),
            backgroundColor: '#0096FF',
            stack: 'Stack 0',
        },
        {
            label: department_keys[44],
            data: data.value[department_keys[44]].map(item => item.cost_in_billions),
            backgroundColor: '#6495ED',
            stack: 'Stack 0',
        },
      ]
    }));

    return { testData, barRef, loading, options };
  },
});
</script>

<style>

</style>