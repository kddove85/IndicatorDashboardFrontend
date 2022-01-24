<template>
    <div class="card">
        <div class="card-header">
            Deportation
        </div>
        <div class="card-body">
            <h5 class="card-title">Deportation</h5>
        </div>
        <p v-for="data_point in data_points">
            Date: {{ data_point.year }} <br/>
            Value: {{ data_point.value }} <br/>
        </p>
    </div>
</template>

<script>
import { getDeportation } from '.../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: ''
  }),
  async mounted() {
    this.data_points = await getDeportation();
  }
};
</script>

<style>

</style>