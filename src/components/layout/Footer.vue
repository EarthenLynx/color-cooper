<template>
  <div class="card-footer">
    <div class="container">
      <div class="row">
       <div class="col-lg-6 col-md-12">
          <input
            disabled
            placeholder="Hex color"
            type="text"
            class="form-control"
            v-model="colors.hex"
          />
        </div>
        <div class="col-lg-6 col-md-12">
          <input
            disabled
            placeholder="Rgb color"
            type="text"
            class="form-control"
            v-model="colors.rgb"
          />
        </div>
        <div class="col"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    colors: Object,
  },
};
</script>

<style></style>
