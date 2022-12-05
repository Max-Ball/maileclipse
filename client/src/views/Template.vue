<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div
      class="w-full max-w-4xl space-y-8 bg-white mt-5 shadow-md rounded animate-fade-in-down relative block appearance-none">
      <div class="px-3 py-2">
        <div class="flex items-center justify-between">
          <span class="text-xl">Templates</span>
          <router-link :to="{ name: 'NewTemplates' }" class="btn bg-suds font-semibold">Add
            Template</router-link>
        </div>
      </div>
      <div
        class="relative block w-full appearance-none rounded-none border border-gray-300 mt-0 bg-slate-200 text-gray-500 py-3">
        <div class="columns-4">
          <div class="px-3">
            Name
          </div>
          <div class="px-3">
            Description
          </div>
          <div class="px-3">
            Template
          </div>
          <div class="px-3">
            Type
          </div>
        </div>
      </div>
      <div class="px-3 py-3 mt-0">
        This will be a foreach over each template - need to add template list component
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
