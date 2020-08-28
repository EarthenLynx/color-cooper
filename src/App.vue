<template>
  <div id="app">
    <!-- Sidebar -->
    <transition name="sidebar-slide">
      <Sidebar
        v-if="sidebarActive"
        @change-color="colors = $event"
        @delete-color="handleDeleteColorFromCollection($event)"
        :activeColor="colors.hex"
        :collection="collection"
      />
    </transition>
    <!-- / Sidebar -->

    <!-- Toastbar -->
    <Messagebar :messages="messages" />
    <!-- / Toastbar -->
    <!-- Main Application -->
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
                <!-- Toolbar -->
                <Toolbar
                  :sidebarActive="sidebarActive"
                  @toggle-sidebar="sidebarActive = !sidebarActive"
                  @add-color="handleAddColorToCollection"
                  @randomize="colors = $event"
                />
                <!-- / Toolbar -->
              </div>
              <div class="container-fluid">
                <div class="row">
                  <!-- Color picker components -->
                  <ColorRgbBar
                    :colors="colors"
                    @change-color="colors = $event"
                  />
                  <ColorHexBar
                    :colors="colors"
                    @change-color="colors = $event"
                  />
                  <!-- / Color picker components -->
                </div>
              </div>
            </div>
            <!-- Footer and color preview -->
            <Footer :colors="colors" />
            <!-- / Footer and color preview -->
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <!-- / Main Application -->
  </div>
</template>

<script>
import Sidebar from "./components/layout/Sidebar";
import Messagebar from "./components/layout/Messagebar";
import Toolbar from "./components/layout/Toolbar";
import ColorRgbBar from "./components/rgb/ColorRgbBar";
import ColorHexBar from "./components/hex/ColorHexBar";
import Footer from "./components/layout/Footer";

export default {
  name: "App",

  components: {
    Sidebar,
    Messagebar,
    ColorRgbBar,
    Toolbar,
    Footer,
    ColorHexBar,
  },

  data() {
    return {
      // The colors object is passed into each component to calculate
      // each color anew. From there, it is then updated in App.vue
      colors: { hex: "#7b7b71", rgb: "rgb(123, 123, 113)" },
      collection: [],
      messages: [],
      sidebarActive: true,
    };
  },

  methods: {
    handleAddColorToCollection() {
      this.collection.push(this.colors);
      this.handleAddMessage({
        id: this.messages.length,
        type: "success", 
        value: "Color added to collection"
      }, 2000)
    },

    handleDeleteColorFromCollection(index) {
      this.collection.splice(index, 1);
      this.handleAddMessage({
        id: this.messages.length,
        type: "success", 
        value: "Color deleted from collection"
      }, 2000)
    },

    handleAddMessage(message, duration) {
      this.messages.push(message); 
      setTimeout(() => {
        this.messages.shift();
      }, duration) 
    }
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

body {
  background-color: #fcfcfc;
}

label {
  font-weight: 600;
  font-size: 1.1rem;
}

span.input-group-text {
  font-weight: 600;
}

/**
 * Styles for the animations 
 * 1. Sidebar animation
 *
 *
 */

.sidebar-slide-enter {
  transform: translateX(-100px);
  opacity: 0;
}

.sidebar-slide-enter-active {
  transition: all 1s;
}

.sidebar-slide-leave-active {
  transform: translateX(-100px);
  transition: all 1s;
  opacity: 0;
}
</style>
