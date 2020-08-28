<template>
  <div id="toolbar" class="text-right">
    <!-- Button 1 -->
    <popper
      trigger="hover"
      :options="{
        placement: 'left',
        modifiers: { offset: { offset: '0,10px' } },
      }"
    >
      <div class="popper">
        Add active color to collection
      </div>

      <button @click="$emit('add-color')" slot="reference" type="button" class="btn btn-outline-primary">
      <i class="fas fa-plus"></i>
    </button>
    </popper>
    <!-- Button 1 -->

    <!-- Button 2 -->
    <popper
      trigger="hover"
      :options="{
        placement: 'top',
        modifiers: { offset: { offset: '0,10px' } },
      }"
    >
      <div class="popper">
        Get a random color
      </div>

      <button slot="reference" type="button" class="btn btn-outline-primary">
      <i class="fas fa-random"></i>
    </button>
    </popper>
    <!-- / Button 2 -->
    
    <!-- Button 3 -->
    <popper
      trigger="hover"
      :options="{
        placement: 'right',
        modifiers: { offset: { offset: '0,10px' } },
      }"
    >
      <div class="popper">
        Upload an image 
      </div>

      <button slot="reference" type="button" class="btn btn-primary">
      <i class="fas fa-images"></i>
    </button>
    </popper>
    <!-- / Button 3 -->
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

export default {
  components: {
      'popper': Popper
    },
};
</script>

<style scoped lang="scss">
button.btn.btn-primary {
  color: #fff;
  margin-left: 1rem;
}

button.btn.btn-outline-primary {
  margin-left: 1rem;
}
</style>
