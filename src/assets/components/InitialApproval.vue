<template>
    <div class="card">
        <div class="card-header">
            Initial Presidential Approval Rating
        </div>
        <div class="card-body">
            <h5 class="card-title">Approval/Disapproval % at Time of Leaving Office</h5>
        </div>
        <p v-for="data_point in data_points">
            President: {{ data_point.president }} <br/>
            Approval: {{ data_point.approval }} <br/>
            Disapproval: {{ data_point.disapproval }} <br/>
        </p>
    </div>
</template>

<script>
import { getInitialApproval } from '../../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: ''
  }),
  async mounted() {
    this.data_points = await getInitialApproval();
  }
};
</script>

<style>

</style>