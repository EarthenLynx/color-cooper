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
            @click="$emit('change-color', color)"
            class="btn btn-outline-primary mt-3"
          >
            Set as active color
          </button>
          <button
            @click="$emit('delete-color', index)"
            class="btn btn-outline-danger mt-3 float-right"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </transition-group>
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

@media (max-width: 992px) {
  #sidebar {
    width: 40vw;
  }
}

@media (max-width: 576px) {
  #sidebar {
    width: 100vw;
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
