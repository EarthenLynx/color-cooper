<template>
  <div class="form-group">
    <label for="formControlRange">{{ name }}</label>
    <input v-model="value"  @change="$emit('change-rgb', parseInt(value))" type="range" min="0" max="255" class="form-control-range" />
    {{value}}
  </div>
</template>

<script>
export default {
  name: "colorslider",

  props: {
    name: String,
  },

  data() {
    return {
        value: 123, 
    };
  },
};
</script>

<style></style>
