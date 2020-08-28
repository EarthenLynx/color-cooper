<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">
        <i :style="{ color: color }" class="fas fa-copy mx-1"></i>
        {{prepend}}</span
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
</template>

<script>
export default {
    props: {
        prepend: String,
        color: String
    }
};
</script>

<style></style>
