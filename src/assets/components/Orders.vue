<template>
    <div class="card">
        <div class="card-header">
            Executive Orders
        </div>
        <div class="card-body">
            <h5 class="card-title">Orders</h5>
        </div>
        <p v-for="data_point in data_points">
            President: {{ data_point.president }} <br/>
            Number of Orders: {{ data_point.orders }} <br/>
        </p>
    </div>
</template>

<script>
import { getOrders } from '../../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: ''
  }),
  async mounted() {
    this.data_points = await getOrders();
  }
};
</script>

<style>

</style>