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

    <input disabled type="text" class="form-control" v-model="value" />
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

<style scoped>
input.form-control {
  margin-left: 1rem;
  width: 3.5rem;
}

.form-group {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.color-indicator {
  height: 2rem;
  width: 3rem;
  margin-right: 1rem;
  border-radius: 0.2rem;
}
</style>
