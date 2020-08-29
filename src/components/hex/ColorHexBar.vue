<template>
  <div class="container">
    <label for="color-hex-control">Adjust hex - color & brightness</label>
    <div id="color-hex-control" class="input-group mb-3">
      <div class="input-group-prepend">
        <button @click="$emit('darken-color')" class="btn btn-outline-primary" type="button">
          <i class="fas fa-angle-double-left"></i>
        </button>
      </div>
      <input
        @keyup="emitColors"
        v-model="colors.hex"
        type="text"
        class="form-control"
        style="text-align: center;"
      />
      <div class="input-group-append">
        <button
          @click="$emit('brighten-color')"
          class="btn btn-outline-primary"
          type="button"
        >
          <i class="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { hexToRgb } from "@/utils/colorFuns.js";

export default {
  name: "HexBar",

  props: {
    colors: Object,
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
