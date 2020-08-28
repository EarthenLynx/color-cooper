<template>
<div class="modal-wrapper">
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button @click="$emit('toggle-cooper')" type="button" class="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {};
</script>

<style scoped>
.modal-wrapper {
    position: absolute;
    top: 0; 
    z-index: 2;
    height: 100vh; 
    width: 100vw; 
    background-color: rgba(0, 0, 0, 0.2);
}

.modal {
    display: block; 
    position: absolute;
}
</style>
