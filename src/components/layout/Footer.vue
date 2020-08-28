<template>
  <div>
    <div class="card-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <Clipper prepend="Hex" :color="colors.hex"/>
          </div>

          <div class="col-lg-6 col-md-12">
            <Clipper prepend="Rgb" :color="colors.rgb"/>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card-footer"
      style="height: 8rem;"
      :style="{ 'background-color': colors.hex }"
    />
  </div>
</template>

<script>
import Clipper from '../fragments/Clipper'

export default {
  components: {
    Clipper
  },

  props: {
    colors: Object,
  },
};
</script>

<style></style>
