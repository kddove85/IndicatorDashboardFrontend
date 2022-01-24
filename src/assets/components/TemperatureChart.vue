<template>
    <div>
        <h2>Global Land and Ocean Temperature Anomalies</h2>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <LineChart ref="lineRef" :chartData="testData" :options="options" />
        </div>
    </div>
    <p>Source: National Centers for Environmental Information</p>
    <br/>
</template>

<script>
import { getTemperature } from '../../services/DashboardApi.js';
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
        data.value = await getTemperature();

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
          label: 'Average Surface Temperature in Celsius',
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