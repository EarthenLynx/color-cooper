<template>
  <div class="container">
    <label for="color-hex-control">Adjust hex - color & brightness</label>
    <div id="color-hex-control" class="input-group mb-3">
      <!-- Darken color - button -->
      <div class="input-group-prepend">
        <popper
          trigger="hover"
          :options="{
            placement: 'left',
            modifiers: { offset: { offset: '0,10px' } },
          }"
        >
        <div class="popper">
            Darken selected color
          </div>
          <button
            slot="reference"
            @click="$emit('darken-color')"
            class="btn btn-outline-primary"
            type="button"
          >
            <i class="fas fa-angle-double-left"></i>
          </button>
        </popper>
      </div>
      <!-- / Darken color - button -->

      <!-- Hex color - Input -->
      <input
        @keyup="emitColors"
        v-model="colors.hex"
        type="text"
        class="form-control"
        style="text-align: center;"
      />
      <!-- / Hex color - Input -->

      <!-- Brighten color - button -->
      <div class="input-group-append">
        <popper
          trigger="hover"
          :options="{
            placement: 'right',
            modifiers: { offset: { offset: '0,10px' } },
          }"
        >
          <div class="popper">
            Brighten up selected color
          </div>
          <button
            slot="reference"
            @click="$emit('brighten-color')"
            class="btn btn-outline-primary"
            type="button"
          >
            <i class="fas fa-angle-double-right"></i>
          </button>
        </popper>
      </div>
      <!-- / Brighten color - button -->
    </div>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

import { hexToRgb } from "@/utils/colorFuns.js";

export default {
  name: "HexBar",

  props: {
    colors: Object,
  },

  components: {
    popper: Popper,
  },

  methods: {
    // Calculate the Rgb and Hex colors extracted from the img.
    // Then, emit them to the parent component
    emitColors() {
      const hex = this.colors.hex;
      const rgb = hexToRgb(hex);

      this.$emit("change-color", { hex: hex, rgb: rgb });
    },
  },
};
</script>
