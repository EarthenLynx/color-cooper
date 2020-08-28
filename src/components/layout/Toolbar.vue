<template>
  <div id="toolbar">
    <div id="toolbar-left" class="float-left">
      <popper
        trigger="hover"
        :options="{
          placement: 'right',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper">
          Toggle Sidebar
        </div>

        <button
          
          @click="$emit('toggle-sidebar')"
          slot="reference"
          type="button"
          class="btn btn-outline-primary"
        >
          <i v-if="!sidebarActive" class="fas fa-bars"></i>
          <i v-if="sidebarActive" class="fas fa-times"></i>
        </button>
      </popper>
    </div>
    <div id="toolbar-right" class="text-right">
      <!-- Button 1 right -->
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

        <button
          @click="$emit('add-color')"
          slot="reference"
          type="button"
          class="btn btn-outline-primary"
        >
          <i class="fas fa-plus"></i>
        </button>
      </popper>
      <!-- Button 1 right -->

      <!-- Button 2 right -->
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

        <button @click="randomize" slot="reference" type="button" class="btn btn-outline-primary">
          <i class="fas fa-random"></i>
        </button>
      </popper>
      <!-- / Button 2 right -->

      <!-- Button 3 right -->
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
      <!-- / Button 3 right -->
    </div>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

import {createRandomColor, hexToRgb} from '../../utils/colorFuns';

export default {
  props: {
    colors: Object,
    sidebarActive: Boolean
  },

  components: {
    popper: Popper,
  },

  methods: {
    randomize () {
      const hex = createRandomColor(); 
      const rgb = hexToRgb(hex);

      this.$emit('randomize', {hex: hex, rgb: rgb});

    }
  }
};
</script>

<style scoped lang="scss">
button.btn.btn-primary {
  color: #fff;
}
</style>
