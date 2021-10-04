<template>
    <div class="card">
        <div class="card-header">
            Immigration
        </div>
        <div class="card-body">
            <h5 class="card-title">Immigration</h5>
        </div>
        <p v-for="data_point in data_points">
            Date: {{ data_point.year }} <br/>
            Value: {{ data_point.value }} <br/>
        </p>
    </div>
</template>

<script>
import { getImmigration } from '../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: ''
  }),
  async mounted() {
    this.data_points = await getImmigration();
  }
};
</script>

<style>

</style>