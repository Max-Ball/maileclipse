<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div
      class="w-full max-w-4xl space-y-8 bg-white mt-5 shadow-md rounded animate-fade-in-down relative block appearance-none">
      <div class="px-3 py-2">
        <div class="flex items-center justify-between">
          <span class="text-xl">Mailables</span>
          <button class="btn bg-suds font-semibold" data-bs-toggle="modal" data-bs-target="#mailableModal">Add
            Mailable</button>
          <MailableModal />
        </div>
      </div>
      <div
        class="relative block w-full appearance-none rounded-none border border-gray-300 mt-0 bg-slate-200 text-gray-500 py-3">
        <div class="columns-3">
          <div class="px-3">
            Name
          </div>
          <div class="px-3">
            Subject
          </div>
          <div class="px-3">
            Last Edited
          </div>
        </div>
      </div>
      <div class="px-3 py-3 mt-0">
        This will be a foreach over each mailable - need to add component
      </div>
    </div>
  </div>
</template>



<script>
import { onMounted } from 'vue';
import { mailablesService } from '../services/MailableService';
import MailableModal from '../components/MailableModal.vue';

export default {
  setup() {
    async function getAllMailables() {
      try {
        await mailablesService.getAllMailables()
      } catch (error) {
        console.log("[getting mailables error]");
      }
    }

    onMounted(() => {
      getAllMailables();
    })
    return {

    }
  },
  components: { MailableModal }
}




</script>



<style>

</style>
