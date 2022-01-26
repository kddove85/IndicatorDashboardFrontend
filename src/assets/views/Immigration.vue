<template>
  <div>
    <h1>
      Immigration Indicators
    </h1>
  </div>
  <div class="container">
    <ImmigrationDeportationChart />
  </div>
</template>

<script setup>
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
