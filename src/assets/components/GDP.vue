<template>
    <div class="card">
        <div class="card-header">
            Real Gross Domestic Product
        </div>
        <div class="card-body">
            <h5 class="card-title">Real GDP</h5>
        </div>
        <p v-for="dataPoint in dataPoints">
            Date: {{ dataPoint.date }} <br/>
            Value: {{ dataPoint.value }} <br/>
        </p>
    </div>
</template>

<script>
import { getGdp } from '../../services/DashboardApi.js';
export default {

  data: () => ({
    dataPoints: []
  }),

  async mounted() {
    this.dataPoints = await getGdp();
  },
};
</script>

<style>

</style>