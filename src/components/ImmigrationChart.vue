<template>
    <div>
        <h1>Immigration</h1>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <LineChart ref="lineRef" :chartData="testData" :options="options" />
        </div>
    </div>
    <p>Source: Department of Homeland Security</p>
    <br/>
</template>

<script>
import { getImmigration } from '../services/DashboardApi.js';
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
        data.value = await getImmigration();

        dataValues.value = data.value.map(item => item.value)
        dataLabels.value = data.value.map(item => item.year)
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
          label: 'Immigration',
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