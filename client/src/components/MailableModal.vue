<template>
  <div class="modal fade" id="mailableModal" tabindex="-1">
    <div class="modal-dialog modal-md">
      <form id="create_mailable" method="POST">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New Mailable</h1>
            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-warning new-mailable-alerts d-none" role="alert">

            </div>
            <div class="form-group">
              <label for="mailableName" class="pb-2">Name</label>
              <input type="text" class="form-control" id="mailableName" name="name" placeholder="Mailable name"
                required>
              <small class="form-text text-muted text-xs">Enter mailable name e.g <b>Welcome User</b>,
                <b>WelcomeUser</b></small>
            </div>
            <div class="form-group mt-3">
              <label class="checkbox-inline mb-3">
                <input type="checkbox" id="markdown--truth" value="option1"> Markdown Template<br>
                <small class="form-text text-muted text-xs">Use markdown template</small>
              </label>
            </div>
            <div class="form-group markdown-input" style="display: none;">
              <label for="markdownView">Markdown</label>
              <input type="text" class="form-control" name="markdown" id="markdownView" placeholder="e.g markdown.view">
            </div>
            <div class="form-group mb-4">
              <label class="checkbox-inline">
                <input type="checkbox" id="forceCreation" name="force"> Force<br>
                <small class="form-text text-muted text-xs">Force mailable creation even if already exists</small>
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn bg-slate-500 text-dark font-semibold hover:bg-slate-600"
              data-dismiss="modal">Close</button>
            <button class="btn bg-suds text-dark font-semibold">Create Mailable</button>
          </div>
        </div>
      </form>
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