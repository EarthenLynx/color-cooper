<template>
  <div id="toolbar">
    <div id="toolbar-left" class="float-left">
      <!-- Toggle Sidebar -->
      <popper
        trigger="hover"
        :options="{
          placement: 'top',
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
      <!-- / Toggle sidebar -->

      <!-- Save collection -->
      <popper
        trigger="hover"
        :options="{
          placement: 'top',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper">
          Save collection
        </div>

        <button
          @click="getCsv()"
          slot="reference"
          type="button"
          class="btn btn-outline-primary"
        >
          <i class="fas fa-save"></i>
        </button>
      </popper>
      <!-- / Save collection -->
    </div>

    <div id="toolbar-right" class="text-right">
      <!-- Button 1 right -->
      <popper
        trigger="hover"
        :options="{
          placement: 'top',
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
          Randomize a color
        </div>

        <button
          @click="randomize"
          slot="reference"
          type="button"
          class="btn btn-outline-primary"
        >
          <i class="fas fa-dice-five"></i>
        </button>
      </popper>
      <!-- / Button 2 right -->

      <!-- Button 3 right -->
      <popper
        trigger="hover"
        :options="{
          placement: 'top',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper">
          Upload an image
        </div>

        <button
          @click="$emit('toggle-cooper')"
          slot="reference"
          type="button"
          class="btn btn-primary"
        >
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

import { createRandomColor, hexToRgb } from "../../utils/colorFuns";
import { parse } from "json2csv";

export default {
  name: "Toobar",

  props: {
    collection: Array,
    sidebarActive: Boolean,
  },

  components: {
    popper: Popper,
  },

  methods: {
    // Create a random color and emit it to the parent
    randomize() {
      const hex = createRandomColor();
      const rgb = hexToRgb(hex);

      this.$emit("randomize", { hex: hex, rgb: rgb });
    },

    // Create an element to download the collection as csv
    getCsv() {
      const fields = ["Hex", "Rgb"];
      const csv = parse(this.collection, fields);
      const blob = new Blob(["\ufeff", csv]);
      const url = URL.createObjectURL(blob);
      let downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "data.csv";

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
  },
};
</script>
