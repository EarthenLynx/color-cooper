<template>
  <div>
    <div class="card-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 mt-2 mb-2">
            <Clipper prepend="Hex" :color="colors.hex" />
          </div>

          <div class="col-lg-6 col-md-12 mt-2 mb-2">
            <Clipper prepend="Rgb" :color="colors.rgb" />
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
import Clipper from "@/components/fragments/Clipper";

export default {
  name: "Footer",
  
  components: {
    Clipper,
  },

  props: {
    colors: Object,
  },
};
</script>

<style></style>
