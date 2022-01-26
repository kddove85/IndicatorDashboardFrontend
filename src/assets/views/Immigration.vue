<template>
  <div>
    <h1>
      Immigration Indicators
    </h1>
  </div>
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <ImmigrationChart />
        <br />
      </div>
      <div class="col">
        <DeportationChart />
        <br />
      </div>
    </div>
    <ImmigrationDeportationChart />
  </div>
</template>

<script setup>
import ImmigrationChart from '../components/ImmigrationChart.vue'
import DeportationChart from '../components/DeportationChart.vue'
import ImmigrationDeportationChart from '../components/ImmigrationDeportationChart.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
