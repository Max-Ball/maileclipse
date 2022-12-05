<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="flex items-center justify-between py-4 bg-slate-600 text-light">
    <h5 class="mb-0 ml-3">
      <strong class="text-suds">Suds Creative </strong> Email Template Manager
    </h5>
    <div class="transition-all px-2 flex">
      <router-link :to="{ name: 'Mailables' }"
        class="flex items-center hover:bg-black/30 mb- p-2 rounded transition-colors">
        <span class="mr-3 text-suds">
          <EnvelopeIcon class="w-6" />
        </span>
        <span class="text-md">
          Mailables
        </span>
      </router-link>
      <router-link :to="{ name: 'Mailables' }"
        class="flex items-center hover:bg-black/30 p-2 rounded transition-colors">
        <span class="mr-3 text-suds">
          <RectangleGroupIcon class="w-6" />
        </span>
        <span class="text-md">
          Templates
        </span>
      </router-link>
      <router-link :to="{ name: 'Mailables' }"
        class="flex items-center hover:bg-black/30 p-2 rounded transition-colors">
        <span class="mr-3 text-suds">
          <QuestionMarkCircleIcon class="w-6" />
        </span>
        <span class="text-md">
          Help
        </span>
      </router-link>
    </div>

  </nav>
</template>



<script setup>
import { EnvelopeIcon, RectangleGroupIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'

</script>



<style>

</style>