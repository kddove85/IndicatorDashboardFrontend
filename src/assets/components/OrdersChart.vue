<template>
    <div>
        <h1>Executive Orders by President</h1>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else>
            <BarChart ref="barRef" :chartData="testData" :options="options" />
        </div>
    </div>
    <p>Source: The American Presidency Project</p>
    <br/>
</template>

<script>
import { getOrders } from '../../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { BarChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { BarChart },
  setup() {
    let data = ref()
    let dataValues = ref([])
    let dataLabels = ref([])
    let loading = ref(true)

    onMounted(async() => {
        data.value = await getOrders();

        dataValues.value = data.value.map(item => item.orders)
        dataLabels.value = data.value.map(item => item.president)
        loading.value = false;
    })
    const barRef = ref();

    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
    legend: {
      display: false,
      position: 'top',
    },
    });

    const testData = computed(() => ({
      labels: dataLabels.value,
      datasets: [
        {
            label: "Executive Orders",
            data: dataValues.value,
            backgroundColor: '#0000FF',
        },
      ]
    }));

    return { testData, barRef, loading, options };
  },
});
</script>

<style>

</style>