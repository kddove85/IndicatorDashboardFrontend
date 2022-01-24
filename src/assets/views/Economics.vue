<template>
  <div>
    <h1>
      Economic Indicators
    </h1>
  </div>

  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <SpendingChart />
        <br />
      </div>
      <div class="col">
        <CpiChart />
        <br />
      </div>
    </div>
    <GasChart />
    <br />
    <UnemploymentChart />
    <br />
    <DeficitChart />
    <br />
  </div>
  <br/>

</template>

<script setup>
import CpiChart from '../components/CpiChart.vue'
import UnemploymentChart from '../components/UnemploymentChart.vue'
import SpendingChart from '../components/SpendingChart.vue'
import GasChart from '../components/GasChart.vue'
import DeficitChart from '../components/DeficitChart.vue'
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
