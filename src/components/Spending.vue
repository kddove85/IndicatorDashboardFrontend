<template>
    <div class="card">
        <div class="card-header">
            Department Spending
        </div>
        <div class="card-body">
            <h5 class="card-title">Department Spending in Billions</h5>
        </div>
        <p v-for="key in keys">
            <b>Department: {{ key }}</b> <br/>
            <p v-for="data_point in data_points[key]">
                Date: {{ data_point.date }} <br/>
                Cost in Billions: {{ data_point.cost_in_billions }} <br/>
            </p>
        </p>
    </div>
</template>

<script>
import { getDepartmentSpending } from '../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: '',
    keys: '',
  }),
  async mounted() {
    this.data_points = await getDepartmentSpending();
    console.log(this.data_points);
    this.keys = Object.keys(this.data_points);
  }
};
</script>

<style>

</style>