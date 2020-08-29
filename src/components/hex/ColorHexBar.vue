<template>
  <div class="container">
    <label for="color-hex-control">Adjust hex - color</label>
    <div id="color-hex-control" class="input-group mb-3">
      <input
        @keyup="emitColors"
        v-model="colors.hex"
        type="text"
        class="form-control"
      />
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