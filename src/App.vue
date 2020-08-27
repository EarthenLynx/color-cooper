<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card mt-3" style="">
            <!-- Color preview Element -->
            <div class="card-body">
              <h3 class="card-title">Color Cooper</h3>
              <ColorRgbBar @change-color="colors = $event" />
              {{colors}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorRgbBar from './components/rgb/ColorRgbBar';

export default {
  name: "App",

  components: {
    ColorRgbBar
  },

  data () {
    return {
      colors: {
        hex: "", 
        rgb: ""
      }
    };
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
