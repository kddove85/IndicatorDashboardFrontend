<template>
    <div>
        <h1>National Average Price for <b>Regular</b> Gas Per Gallon in USD by Month</h1>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <LineChart ref="lineRef" :chartData="testData" :options="options" />
        </div>
    </div>
    <p>Source: U.S. Energy Information Administration</p>
    <br/>
</template>

<script>
import { getGasPrices } from '../../services/DashboardApi.js';
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
        data.value = await getGasPrices();

        dataValues.value = data.value.map(item => item.price)
        dataLabels.value = data.value.map(item => item.date)
        loading.value = false;
    })
    const lineRef = ref();

    const annotation1 = ref({
      type: 'line',
      scaleID: 'x',
      value: '2005-05',
      borderColor: 'red',
      borderWidth: 10,
    });

    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
          position: 'bottom',
        },
        title: {
          display: false,
          text: "Line Chart"
        },
        annotation: {
          annotations: {
            annotation1,
          },
        },
    });

    const testData = computed(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          label: 'National Average Gas Price',
          data: dataValues.value,
          backgroundColor: ['#0000FF'],
        },
      ],
    }));

    return { testData, lineRef, loading, options };
  },
});
</script>

<style>

</style>