<template>
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
    <GasChart />
    <br />
    <UnemploymentChart />
    <br />
    <OrdersChart />
    <br />
    <DeficitChart />
    <br />
    <InitialApprovalChart />
    <br />
    <FinalApprovalChart />
    <br />
    <div class="row align-items-start">
      <div class="col">
        <FinalApproval />
      </div>
<!--      <div class="col">-->
<!--        <GDP />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <CPI />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <Unemployment />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <Immigration />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <Deportation />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <Spending />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <Gas />-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        <Orders />-->
<!--      </div>-->
    </div>
  </div>
  <br/>
</template>

<script setup>

import GDP from './components/GDP.vue'
import CPI from './components/CPI.vue'
import CpiChart from './components/CpiChart.vue'
import Unemployment from './components/Unemployment.vue'
import UnemploymentChart from './components/UnemploymentChart.vue'
import Immigration from './components/Immigration.vue'
import ImmigrationChart from './components/ImmigrationChart.vue'
import Deportation from './components/Deportation.vue'
import DeportationChart from './components/DeportationChart.vue'
import Spending from './components/Spending.vue'
import SpendingChart from './components/SpendingChart.vue'
import Gas from './components/Gas.vue'
import GasChart from './components/GasChart.vue'
import Orders from './components/Orders.vue'
import OrdersChart from './components/OrdersChart.vue'
import Deficit from './components/Deficit.vue'
import DeficitChart from './components/DeficitChart.vue'
import FinalApproval from './components/FinalApproval.vue'
import FinalApprovalChart from './components/FinalApprovalChart.vue'
import InitialApproval from './components/InitialApproval.vue'
import InitialApprovalChart from './components/InitialApprovalChart.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
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
