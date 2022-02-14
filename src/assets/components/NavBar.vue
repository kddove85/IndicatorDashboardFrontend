<template>
  <ul class="nav nav-tabs card-header-tabs">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home'}" exact>
        Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Economics'}">
        Economics
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Earnings'}">
        Earnings
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Climate'}">
        Climate
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Immigration'}">
        Immigration
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Politics'}">
        Politics
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>

</style>
