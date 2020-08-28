<template>
  <div class="form-group card">
      <div
        class="color-indicator"
        :style="{ 'background-color': backgroundColor }"
      ></div>

    <input
      v-model="value"
      @change="$emit('change-rgb', parseInt(value))"
      type="range"
      min="0"
      max="255"
      class="form-control-range"
    />
  </div>
</template>

<script>
export default {
  name: "colorslider",

  props: {
    name: String,
    index: Number,
  },

  data() {
    return {
      value: 123,
    };
  },

  computed: {
    // Set Slider Background depending on the index that's been passed
    backgroundColor() {
      return this.index === "0"
        ? `rgb(${this.value}, 0, 0)`
        : this.index === "1"
        ? `rgb(0, ${this.value}, 0)`
        : `rgb(0, 0, ${this.value})`;
    },
  },
};
</script>

<style>
.form-group {
  display: flex !important; 
  flex-direction: row !important;
  padding: 0.5rem;
  border-radius: 1rem;
}

.color-indicator {
  height: 1.5rem;
  width: 2rem;
  margin-right: 1rem;
  border-radius: 0.2rem;
}
</style>
