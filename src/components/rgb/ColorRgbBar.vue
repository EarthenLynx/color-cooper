<template>
  <div class="contain">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <Colorslider name="Red" @change-rgb="handleSetColor(0, $event)" />
      </div>
      <div class="col-lg-4 col-md-12">
        <Colorslider name="Green" @change-rgb="handleSetColor(1, $event)" />
      </div>
      <div class="col-lg-4 col-md-12">
        <Colorslider name="Blue" @change-rgb="handleSetColor(2, $event)" />
      </div>
    </div>
  </div>
</template>

<script>
import Colorslider from "./Colorslider";
import { rgbArrToStr, rgbToHex } from "../../utils/colorFuns.js";

export default {
  components: {
    Colorslider,
  },

  data() {
    return {
      rgb: [123, 123, 123],
    };
  },

  methods: {
    handleSetColor(index, newColor) {
      let rgb = this.rgb;
      rgb[index] = newColor;

      // Calculate rgb color
      const rgbColor = rgbArrToStr(rgb);

      // Calculate hex color
      const hexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);

      this.$emit("change-color", { hex: hexColor, rgb: rgbColor });
    },
  },
};
</script>

<style></style>
