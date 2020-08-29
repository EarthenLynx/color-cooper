<template>
  <popper
    trigger="clickToOpen"
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,10px' } },
    }"
  >
    <div class="popper">
      Copied to clipboard!
    </div>

    <div slot="reference" @click="clip" class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
          <i :style="{ color: color }" class="fas fa-copy mx-1"></i>
          {{ prepend }}</span
        >
      </div>
      <input
        disabled
        placeholder="Hex color"
        type="text"
        class="form-control"
        v-model="color"
      />
    </div>
  </popper>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

export default {
  name: "Clipper",

  props: {
    prepend: String,
    color: String,
  },

  components: {
    popper: Popper,
  },

  methods: {
    // Copy to clipboard when user clicks on the element
    clip() {
      let copy = document.createElement("textarea");
      document.body.appendChild(copy);
      copy.value = this.color;
      copy.select();
      document.execCommand("copy");
      document.body.removeChild(copy);
    },
  },
};
</script>

<style scoped>
div.input-group {
  cursor: pointer;
}
</style>
