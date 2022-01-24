<template>
    <div class="card">
        <div class="card-header">
            Monthly Average Gas Prices
        </div>
        <div class="card-body">
            <h5 class="card-title">Gas Prices in USD</h5>
        </div>
        <p v-for="data_point in data_points">
            Date: {{ data_point.date }} <br/>
            Value: {{ data_point.price }} <br/>
        </p>
    </div>
</template>

<script>
import { getGasPrices } from '../../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: ''
  }),
  async mounted() {
    this.data_points = await getGasPrices();
  }
};
</script>

<style>

</style>