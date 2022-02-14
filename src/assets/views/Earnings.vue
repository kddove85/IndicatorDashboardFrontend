<template>
  <div>
    <h1>
      Earnings Report
    </h1>
  </div>

  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <EarningsTable />
      </div>
    </div>
  </div>
</template>

<script setup>
  import EarningsTable from '../components/EarningsTable.vue'
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
