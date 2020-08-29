<template>
  <div id="messagebar">
    <div class="container mt-3">
      <transition-group name="message-slide" tag="div">
        <div
          v-for="message in messages"
          :key="message"
          class="alert"
          :class="{
            'alert-danger': message.type === 'danger',
            'alert-success': message.type === 'success',
            'alert-warning': message.type === 'warning',
          }"
          role="alert"
        >
          <i class="fas fa-bell"></i> {{ message.value }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messagebar",

  props: {
    messages: Array,
  },
};
</script>

<style>
#messagebar {
  z-index: 0;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 25vw;
}

@media (max-width: 992px) {
  #messagebar {
    width: 100%;
    height: 15vh;
  }
}

.message-slide-enter {
  transform: translateY(20px);
  opacity: 0;
}

.message-slide-enter-active {
  transition: all 1s;
}

.message-slide-leave-active {
  position: absolute;
  transform: translateY(-20px);
  transition: all 1s;
  opacity: 0;
}

.message-slide-move {
  transition: all 1s;
}
</style>
