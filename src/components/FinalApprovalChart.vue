<template>
    <div>
        <h1>Presidential Approval Rating at Time of Leaving Office</h1>
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
import { getFinalApproval } from '../services/DashboardApi.js';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { BarChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { BarChart },
  setup() {
    let data = ref()
    let dataApproval = ref([])
    let dataDisapproval = ref([])
    let dataLabels = ref([])
    let loading = ref(true)

    onMounted(async() => {
        data.value = await getFinalApproval();

        dataApproval.value = data.value.map(item => item.approval)
        dataDisapproval.value = data.value.map(item => item.disapproval)
        dataLabels.value = data.value.map(item => item.president)
        loading.value = false;
    })
    const barRef = ref();

    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
    },
    });

    const testData = computed(() => ({
      labels: dataLabels.value,
      datasets: [
        {
            label: "Approval %",
            data: dataApproval.value,
            backgroundColor: '#0000FF',
        },
        {
            label: "Disapproval %",
            data: dataDisapproval.value,
            backgroundColor: '#DC143C',
        },
      ]
    }));

    return { testData, barRef, loading, options };
  },
});
</script>

<style>

</style>