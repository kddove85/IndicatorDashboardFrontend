<template>
  <h2>Earnings Table for week of {{ getMondayOfCurrentWeek() }}</h2>
  <div v-if="loading">
    <p>Loading... this may take several minutes</p>
  </div>
  <div v-else>
      <table class="table table-striped table-primary">
        <thead>
          <tr>
            <th class="header" scope="col">Symbol</th>
            <th class="header" scope="col">Date</th>
            <th class="header" scope="col">Time of Report</th>
            <th class="header" scope="col">Earnings Per Share Actual</th>
            <th class="header" scope="col">Earnings Per Share Estimate</th>
            <th class="header" scope="col">Quarter</th>
            <th class="header" scope="col">Year</th>
            <th class="header" scope="col">Week Opening</th>
            <th class="header" scope="col">Week Close</th>
            <th class="header" scope="col">Change</th>
            <th class="header" scope="col">Change %</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="data_point in data_points">
            <tr class="table-success" v-if="data_point.purchase">
                <td>{{ data_point.symbol }}</td>
                <td>{{ data_point.date }}</td>
                <td>{{ data_point.hour }}</td>
                <td>{{ data_point.epsActual }}</td>
                <td>{{ data_point.epsEstimate }}</td>
                <td>{{ data_point.quarter }}</td>
                <td>{{ data_point.year }}</td>
                <td>{{ data_point.week_opening }}</td>
                <td>{{ data_point.week_closing }}</td>
                <td>{{ data_point.change }}</td>
                <td>{{ data_point.change_percent }}</td>
            </tr>
            <tr v-else>
                <td>{{ data_point.symbol }}</td>
                <td>{{ data_point.date }}</td>
                <td>{{ data_point.hour }}</td>
                <td>{{ data_point.epsActual }}</td>
                <td>{{ data_point.epsEstimate }}</td>
                <td>{{ data_point.quarter }}</td>
                <td>{{ data_point.year }}</td>
                <td>{{ data_point.week_opening }}</td>
                <td>{{ data_point.week_closing }}</td>
                <td>{{ data_point.change }}</td>
                <td>{{ data_point.change_percent }}</td>
            </tr>
          </template>
        </tbody>
      </table>
  </div>
</template>

<script>
import { getEarnings } from '../../services/DashboardApi.js';

export default {
  data: () => ({
    data_points: '',
    loading: true,
  }),
  async mounted() {
    this.data_points = await getEarnings();
    this.loading = false;
  },
  methods: {
    getMondayOfCurrentWeek: function() {
        let today = new Date();
        let first = today.getDate() - today.getDay() + 1;

        let monday = new Date(today.setDate(first));
        return Intl.DateTimeFormat('en-US').format(monday);
    },
  }
};
</script>

<style>
    .header{
        position:sticky;
        top: 0 ;
    }
</style>