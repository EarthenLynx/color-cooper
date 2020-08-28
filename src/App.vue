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

    <!-- cooper Modal -->
    <transition name="cooper-show">
      <Cooper @add-color="handleAddColorToCollection($event)" @toggle-cooper="cooperActive = false" v-if="cooperActive" />
    </transition>
    <!-- / cooper Modal -->

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
                  @toggle-cooper="cooperActive = !cooperActive"
                  @add-color="handleAddColorToCollection(colors)"
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
import Cooper from "./components/fragments/Cooper";
import Toolbar from "./components/layout/Toolbar";
import ColorRgbBar from "./components/rgb/ColorRgbBar";
import ColorHexBar from "./components/hex/ColorHexBar";
import Footer from "./components/layout/Footer";

export default {
  name: "App",

  components: {
    Sidebar,
    Messagebar,
    Cooper,
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
      cooperActive: false,
      sidebarActive: true,
    };
  },

  methods: {
    handleAddColorToCollection(color) {
      this.collection.push(color);
      this.handleAddMessage({
        type: "success",
        value: "Color added to collection",
      });
    },

    handleDeleteColorFromCollection(index) {
      this.collection.splice(index, 1);
      this.handleAddMessage({
        type: "success",
        value: "Color deleted from collection",
      });
    },

    handleAddMessage(message) {
      this.messages.push({ id: this.messages.length, ...message });
      setTimeout(() => {
        this.messages.shift();
      }, 2000);
    },
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
 * 2. Cooper animation
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

.cooper-show-enter {
  opacity: 0;
}

.cooper-show-enter-active {
  transition: all 0.5s;
}

.cooper-show-leave-active {
  transition: all 0.5s;
  opacity: 0;
}
</style>
