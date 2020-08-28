<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upload a picture</h5>
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

            <div class="container">
              <!-- Img processing -->
              <div class="row">
                <div class="col"></div>
                <div class="col-lg-10 col-md-12">
                  <img class="img-fluid" :src="preview" alt="Image preview" />

                  <div class="input-group mb-3 mt-3">
                    <div class="custom-file">
                      <input
                        class="custom-file-input"
                        id="file-processing"
                        type="file"
                        @change="changePreview()"
                      />
                      <label class="custom-file-label" for="inputGroupFile01"
                        >Upload an image</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
              <!-- / Img processing -->
            </div>

            <!-- / Cooper content -->
          </div>
          <div class="modal-footer">
            <button @click="extractRgb" type="button" class="btn btn-primary">
              <i class="fas fa-palette"></i> Get colors
            </button>

            <button @click="emitColors" type="button" class="btn btn-primary">
              <i class="fas fa-palette"></i> Add all to collection
            </button>

            <button
              @click="$emit('toggle-cooper')"
              type="button"
              class="btn btn-secondary"
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
import ColorThief from "colorthief";
import preview from "@/assets/sample.png";
import { rgbArrToStr, rgbToHex } from "@/utils/colorFuns";

export default {
  data() {
    return {
      // Initial preview image
      preview,

      // props for colorthief
      index: 1,
      numExtractedColors: 5,
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
    changePreview() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      let preview = document.querySelector("img");

      reader.onloadend = () => {
        preview.src = reader.result;
      };
      reader.readAsDataURL(file);
    },

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
};
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
}

.modal {
  display: block;
  position: absolute;
}
</style>
