<template>
  <div>
    <h1>
      Economic Indicators
    </h1>
  </div>

  <div class="container">
    <br><hr><br>
    <GdpChart />
    <br><hr><br>
    <SpendingChart />
    <br><hr><br>
    <div class="row align-items-start">
      <div class="col">
        <CpiChart />
      </div>
      <div class="col">
        <CpiYearChart />
      </div>
    </div>
    <br><hr><br>
    <GasChart />
    <br><hr><br />
    <UnemploymentChart />
    <br><hr><br />
    <DeficitChart />
    <br>
  </div>

</template>

<script setup>
import GdpChart from '../components/GdpChart.vue'
import CpiChart from '../components/CpiChart.vue'
import CpiYearChart from '../components/CpiYearChart.vue'
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
