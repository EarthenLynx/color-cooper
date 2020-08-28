<template>
  <div class="container">
    <label for="color-hex-control">Adjust hex - color</label>
    <div id="color-hex-control" class="input-group mb-3">
      <input
        @keyup="handleSetColor"
        v-model="value"
        type="text"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
import { hexToRgb } from "../../utils/colorFuns.js";

export default {
  name: "HexBar",

  props: {
    colors: Object,
  },

  data() {
    return {
      value: "#f2f2f2",
    };
  },

  methods: {
    handleSetColor() {
      const hex = this.value;
      const rgb = hexToRgb(hex);

      this.$emit("change-color", { hex: hex, rgb: rgb });
    },
  },
};
</script>