<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="container-fluid">
    <div class="row">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
