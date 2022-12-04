<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="sidebar bg-purple-500">
    <div class="py-4 px-2">
      <div class="flex items-center p-2 rounded">
        <span class="mr-2 w-1">
          <HomeIcon />
        </span>
        <span>
          Mailables
        </span>
      </div>
    </div>
  </section>
</template>



<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>



<style scoped>
.sidebar {
  width: 20vw;
  height: 100vh;
}
</style>