<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">About this app</h5>
            <button
              @click="$emit('toggle-about')"
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Modal content -->
            <p>
              Color Cooper was built as a hobby project and on top of some
              awesome Javascript packages, of which some are:
            </p>

            <ul class="list-group mb-3">
              <li
                v-for="module in modules"
                :key="module.link"
                class="list-group-item"
              >
                <a :href="module.link" target="_blank">
                  <span v-html="module.icon"></span>
                  {{ module.name }}
                </a>
              </li>
            </ul>

            <p>
              The app does all its calculation in your browser, that means none
              of your data are being sent forth to and back from any server.
            </p>

            <p>
              If you like Color Cooper, you're very welcome to fork - and
              improve it. Also, check out my portfolio and my other projects in
              the link below.
            </p>

            <!-- / Modal content -->
          </div>
          <div class="modal-footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-sm-12 text-left">
                  <a href="https://earthenlynx.github.io/portfolio/"
                    >About me</a
                  >
                </div>
                <div class="col-lg-6 col-sm-12 text-right">
                  <a href="https://github.com/EarthenLynx/color-cooper"
                    >Github repos</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      modules: [
        {
          name: "Color Thief",
          link: "https://github.com/null2/color-thief",
          icon: '<i class="fab fa-github"></i>',
        },
        {
          name: "Vue Popper js",
          link: "https://github.com/RobinCK/vue-popper",
          icon: '<i class="fab fa-github"></i>',
        },
        {
          name: "Bootstrap",
          link: "https://getbootstrap.com/",
          icon: '<i class="fab fa-bootstrap"></i>',
        },
        {
          name: "Vue js",
          link: "https://vuejs.org/",
          icon: '<i class="fab fa-vuejs"></i>',
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>
