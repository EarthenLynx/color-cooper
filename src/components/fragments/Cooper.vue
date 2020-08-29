<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Get the dominant colors of your image</h5>

            <button
              @click="$emit('toggle-cooper')"
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Cooper content -->

            <!-- Img processing -->
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col-lg-8 col-md-12">
                  <img class="img-fluid" :src="preview" alt="Image preview" />

                  <label for="file-processing" class="mt-3">Step 1: </label>
                  <div class="input-group mb-3">
                    <div class="custom-file">
                      <input
                        class="custom-file-input"
                        id="file-processing"
                        type="file"
                        @change="changePreview()"
                      />
                      <label class="custom-file-label" for="inputGroupFile01"
                        >Select a picture</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
            <!-- / Img processing -->

            <!-- Number of colors extracted -->
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col-lg-8 col-sm-12">
                  <label for="how-many-colors"
                    >Step 2: # of colors extracted</label
                  >
                  <div class="form-group cooper-actions">
                    <input
                      id="how-many-colors"
                      v-model="value"
                      type="range"
                      min="0"
                      max="20"
                      class="form-control-range"
                    />

                    <input
                      disabled
                      style="width: 3rem;"
                      type="text"
                      class="form-control ml-2"
                      v-model="value"
                    />
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>

            <!-- / Numbers of colors extracted -->

            <!-- Action buttons -->
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col-lg-4 col-sm-12">
                  <div class="input-group mt-2 mb-2">
                    <label for="button-push-to-collection">Step 3:</label>
                    <button
                      @click="extractRgb"
                      type="button"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-palette"></i> Get dominant colors
                    </button>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="input-group mt-2 mb-2">
                    <label for="button-push-to-collection">Step 4:</label>
                    <button
                      id="button-push-to-collection"
                      @click="emitColors"
                      type="button"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-paper-plane"></i> Push to collection
                    </button>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
            <!-- / Action buttons -->

            <!-- / Cooper content -->
          </div>

          <div class="modal-footer">
            <!-- Color preview -->
            <transition-group
              name="preview-slide"
              tag="div"
              class="container cooper-preview-wrapper"
            >
              <div v-for="color in cooperColors" :key="color">
                <div
                  :style="{ 'background-color': color }"
                  class="cooper-preview"
                ></div>
              </div>
            </transition-group>
            <!-- / Color preview  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorThief from "colorthief";
import preview from "@/assets/sample.png";
import { rgbArrToStr, rgbToHex } from "@/utils/colorFuns";

export default {
  name: "Cooper",

  data() {
    return {
      // Initial preview image
      preview,

      // props for colorthief
      index: 1,
      value: 10,
      extractedRgb: [
        [61, 52, 150],
        [223, 72, 167],
        [43, 167, 199],
        [154, 57, 147],
        [149, 40, 72],
      ],
    };
  },

  methods: {
    // When a new img is placed in the file input, update the preview accordingly
    changePreview() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      let preview = document.querySelector("img");

      reader.onloadend = () => {
        preview.src = reader.result;
      };
      reader.readAsDataURL(file);
    },

    // Use colorthief to extract the number of extracted colors from the img
    extractRgb() {
      this.extractedRgb = [];
      const colorThief = new ColorThief();
      const img = document.querySelector("img");
      const extractedColors = colorThief.getPalette(
        img,
        this.numExtractedColors
      );
      this.extractedRgb = extractedColors;
    },

    // Calculate the Rgb and Hex colors extracted from the img.
    // Then, emit them to the parent component
    emitColors() {
      const vm = this;
      const extracted = this.extractedRgb;

      extracted.forEach((rgbArray) => {
        const rgb = rgbArrToStr(rgbArray);
        const hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);

        vm.$emit("add-color", { rgb: rgb, hex: hex });
      });
    },
  },

  computed: {
    // Calculate the preview colors
    cooperColors() {
      const cooperColors = this.extractedRgb.map((rgbArray) => {
        return rgbArrToStr(rgbArray);
      });

      return cooperColors; // Array of rgbs
    },

    // Make sure the number of extracted colors is a number
    numExtractedColors() {
      return parseInt(this.value);
    },
  },
};
</script>

<style scoped>
button.btn {
  width: 100%;
}

.modal-wrapper {
  position: absolute;
  top: 0;
  z-index: 3;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
}

.modal {
  display: block;
  position: absolute;
  overflow-y: auto;
}

.cooper-preview-wrapper,
.cooper-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cooper-preview {
  height: 2rem;
  width: 2rem;
  border-radius: 0.2rem;
}

/* Animation styles for the preview colors */
.preview-slide-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.preview-slide-enter-active {
  transition: all 1.5s;
}

.preview-slide-leave-active {
  position: absolute;
  transform: translateY(20px);
  transition: all 1.5s;
  opacity: 0;
}

.preview-slide-move {
  transition: all 1.5s;
}
</style>
