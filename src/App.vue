<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center mb-3 mt-3">Color Cooper</h1>
      <p class="text-center">
        🎨 A tool to pick colors from your favorite picture
      </p>
      <div class="row">
        <div class="col"></div>
        <div class="col-lg-6 col-md-12">
          <div class="card mt-3">
            <div class="card-body">
              <div class="container-fluid mb-3">
                <Toolbar />
              </div>
              <div class="container-fluid">
                <div class="row">
                  <!-- Each of the components must pass an $event object that fits the structure of this parent -->
                  <ColorRgbBar :colors="colors" @change-color="colors = $event" />
                  <ColorHexBar :colors="colors" @change-color="colors = $event" />
                </div>
              </div>
            </div>
            <Footer :colors="colors" />
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "./components/layout/Toolbar";
import ColorRgbBar from "./components/rgb/ColorRgbBar";
import ColorHexBar from "./components/hex/ColorHexBar";
import Footer from "./components/layout/Footer";

export default {
  name: "App",

  components: {
    ColorRgbBar,
    Toolbar,
    Footer,
    ColorHexBar,
  },

  data() {
    return {
      // The colors object is passed into each component to calculate 
      // each color anew. From there, it is then updated in App.vue
      colors: {hex: "",rgb: "",},
    };
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

body {
  background-color: #fcfcfc;
}
</style>
