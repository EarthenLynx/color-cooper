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
import preview from "@/assets/sample.png";

export default {
  data() {
    return {
      preview,
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
