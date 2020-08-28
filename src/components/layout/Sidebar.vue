<template>
  <div class="container" id="sidebar">
    <label class="mt-3" for="collection">Collection</label>
    <button
      @click="$emit('toggle-sidebar')"
      type="button"
      class="close mt-2"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>

    <transition-group name="collection-slide">
      <div
        class="card mt-3 mb-3"
        v-for="(color, index) in collection"
        :key="color"
      >
        <div
          class="card-header"
          :style="{ 'background-color': color.hex }"
        ></div>
        <div class="card-body">
          <div class="input-group mt-3">
            <Clipper prepend="Hex" :color="color.hex" />
          </div>

          <div class="input-group mt-3">
            <Clipper prepend="Rgb" :color="color.rgb" />
          </div>
          <button
            @click="$emit('delete-color', index)"
            class="btn btn-outline-danger mt-3"
          >
            Delete
          </button>
          <button
            @click="$emit('change-color', color)"
            class="btn btn-outline-primary mt-3 float-right"
          >
            Set as active color
          </button>
        </div>
      </div>
    </transition-group>
    <div v-if="collection.length > 3" class="sidebar-toolbar">
      <div class="containe">
        <div class="row">
          <div class="col-6">
            <button
              @click="$emit('wipe-collection')"
              class="btn btn-outline-danger mt-3 toolbar-button"
            >
              <i class="fas fa-broom"></i>
              Wipe clean
            </button>
          </div>
          <div class="col-6">
            <button
              @click="$emit('toggle-sidebar')"
              class="btn btn-outline-info mt-3 toolbar-button mobile"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipper from "../fragments/Clipper";

export default {
  components: {
    Clipper,
  },

  props: {
    activeColor: String,
    collection: Array,
  },
};
</script>

<style scoped lang="scss">
button.toolbar-button {
  width: 100%;
}

#sidebar {
  z-index: 1;
  overflow-y: scroll;
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 25vw;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
}

#preview {
  height: 10rem;
  width: 100%;
}

.card-header {
  height: 2.5rem;
}

.sidebar-toolbar {
  background-color: #fff;
  position: sticky;
  left: 0;
  bottom: 0;
  height: 4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
}

.mobile {
  display: none;
}

@media (max-width: 992px) {
  #sidebar {
    width: 40vw;
  }

  .mobile {
    display: block;
  }
}

@media (max-width: 576px) {
  #sidebar {
    width: 100vw;
  }

  .mobile {
    display: block;
  }
}

.collection-slide-enter {
  transform: translateX(20px);
  opacity: 0;
}

.collection-slide-enter-active {
  transition: all 1s;
}

.collection-slide-leave-active {
  position: absolute;
  transform: translateX(-20px);
  transition: all 1s;
  opacity: 0;
}

.collection-slide-move {
  transition: all 1s;
}
</style>
