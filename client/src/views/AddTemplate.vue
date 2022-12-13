<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-6xl space-y-8 mt-5 animate-fade-in-down relative block appearance-none">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="bg-slate-200 py-3 px-2 rounded">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex items-center mb-0">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Templates' }">Templates</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Add Template</li>
            </ol>
          </nav>
        </div>
        <div
          class="w-full max-w-6xl space-y-8 bg-white my-4 shadow-md rounded animate-fade-in-down relative block appearance-none">
          <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400
            dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a href="#html"
                  class="inline-block py-3 px-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active dark:text-blue-500 dark:border-blue-500">HTML</a>
              </li>
              <li class="mr-2">
                <a href="#markdown"
                  class="inline-block py-3 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page">Markdown</a>
              </li>
            </ul>
          </div>
          <div class="columns-2 md:columns-3 lg:columns-4">
            <div class="img-overlay">
              <img class="img-overlay-image mb-4 cursor-pointer" src="https://source.unsplash.com/random/2 /">
              <div class="overlay cursor-pointer">
                <h4 class="text cursor-pointer">This is the title</h4>
              </div>
            </div>
            <img class="mb-4" src="https://source.unsplash.com/random/2" />
            <img class="mb-4" src="https://source.unsplash.com/random/3" />
            <img class="mb-4" src="https://source.unsplash.com/random/4" />
            <img class="mb-4" src="https://source.unsplash.com/random/5" />
            <img class="mb-4" src="https://source.unsplash.com/random/6" />
            <img class="mb-4" src="https://source.unsplash.com/random/7" />
            <img class="mb-4" src="https://source.unsplash.com/random/8" />
            <img class="mb-4" src="https://source.unsplash.com/random/10" />
            <img class="mb-4" src="https://source.unsplash.com/random/11" />
            <img class="mb-4" src="https://source.unsplash.com/random/12" />
            <img class="mb-4" src="https://source.unsplash.com/random/13" />
            <img class="mb-4" src="https://source.unsplash.com/random/14" />
            <img class="mb-4" src="https://source.unsplash.com/random/15" />
            <img class="mb-4" src="https://source.unsplash.com/random/16" />
            <img class="mb-4" src="https://source.unsplash.com/random/17" />
            <img class="mb-4" src="https://source.unsplash.com/random/18" />
            <img class="mb-4" src="https://source.unsplash.com/random/19" />
            <img class="mb-4" src="https://source.unsplash.com/random/20" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {

  setup() {

    return {};
  },
};
</script>



<style>

</style>