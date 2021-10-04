<template>
    <div>
        <h1>Change in Inflation Month to Month</h1>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <LineChart ref="lineRef" :chartData="testData" :options="options" />
        </div>
    </div>
    <p>Source: Bureau of Labor Statistics</p>
    <br/>
</template>

<script>
import { getCpi } from '../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { LineChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { LineChart },
  setup() {
    let data = ref()
    let dataValues = ref([])
    let dataLabels = ref([])
    let loading = ref(true)

    onMounted(async() => {
        data.value = await getCpi();

        dataValues.value = data.value.map(item => item.value)
        dataLabels.value = data.value.map(item => item.date)
        loading.value = false;
    })
    const lineRef = ref();

    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: "Line Chart"
      },
    });

    const testData = computed(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          label: 'Change in Inflation %',
          data: dataValues.value,
          backgroundColor: ['#0000FF'],
          tension: 0.5,
        },
      ],
    }));

    return { testData, lineRef, loading, options };
  },
});
</script>

<style>

</style>