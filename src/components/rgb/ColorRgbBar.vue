<template>
  <div class="container-fluid">
    
    <label for="color-hex-control">Adjust rgb - color</label>
    <div id="color-rgb-control" class="row">
      <div class="col-md-12">
        <Colorslider name="Red" :color="rgb[0]" index="0" @change-rgb="handleSetColor(0, $event)" />
      </div>
      <div class="col-md-12">
        <Colorslider name="Green" :color="rgb[1]" index="1" @change-rgb="handleSetColor(1, $event)" />
      </div>
      <div class="col-md-12">
        <Colorslider name="Blue" :color="rgb[2]" index="2" @change-rgb="handleSetColor(2, $event)" />
      </div>
    </div>
  </div>
</template>

<script>
import Colorslider from "./Colorslider";
import { rgbStrToArr, rgbArrToStr, rgbToHex } from "../../utils/colorFuns.js";

export default {
  name: "Rgbbar",

  components: {
    Colorslider,
  },

  props: {
    colors: Object
  },

  computed: {
    rgb() {
      // Convert the array from the parent's property into a bindable array of color values
      return rgbStrToArr(this.colors.rgb);
    }
  },

  methods: {
    // Set the parent's color depending on the event value received by each child
    handleSetColor(index, event) {
      let rgb = this.rgb;
      rgb[index] = event;

      // Calculate rgb color
      const rgbColor = rgbArrToStr(rgb);

      // Calculate hex color
      const hexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);

      // Emit the new color object to the parent
      this.$emit("change-color", { hex: hexColor, rgb: rgbColor });
    },
  },
};
</script>

<style></style>
