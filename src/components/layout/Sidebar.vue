<template>
  <div class="container" id="sidebar">
    <label class="mt-3" for="collection">Collection</label>

    <div class="card mt-3 mb-3" v-for="(color, index) in collection" :key="color">
      <div class="card-header" :style="{ 'background-color': color.hex }"></div>
      <div class="card-body">
        <div class="input-group mt-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i :style="{ color: color.hex }" class="fas fa-copy mx-1"></i>
              Hex</span
            >
          </div>
          <input
            disabled
            placeholder="Hex color"
            type="text"
            class="form-control"
            v-model="color.hex"
          />
        </div>

        <div class="input-group mt-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i :style="{ color: color.hex }" class="fas fa-copy mx-1"></i>
              Rgb</span
            >
          </div>
          <input
            disabled
            placeholder="Rgb color"
            type="text"
            class="form-control"
            v-model="color.rgb"
          />
        </div>
        <button @click="$emit('change-color', color)" class="btn btn-outline-primary mt-3">Set as active color</button>
        <button @click="$emit('delete-color', index)" class="btn btn-outline-danger mt-3 float-right"><i class="fas fa-trash-alt"></i></button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeColor: String,
    collection: Array,
  },
};
</script>

<style scoped lang="scss">
#sidebar {
  z-index: 1;
  overflow-y: auto;
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
    width: 80vw;
  }
}
</style>
