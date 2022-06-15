<template>
  <transition name="scroll-button">
    <div 
      class="button"
      @click="scrollToTop()"
      v-if="windowTop>=900"
    >
      <fa icon="arrow-up"/>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      windowTop: Number
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0, 
        behavior: 'smooth'
      });
    },
    onScroll(e) {
      this.windowTop = window.top.scrollY;
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  background-color: #fff;
  box-shadow: 0px 0px 6px 4px rgba($color: #000000, $alpha: 0.1);
  border-radius: 50%;

  @media(max-width:700px) {
    bottom: 4vw;
    right: 4vw;
  }

  &:hover {
    box-shadow: 0px 0px 6px 4px rgba($color: #000000, $alpha: 0.1);
    animation: up .5s ease-in;
    cursor: pointer;

    @keyframes up {
      0% {
        transform: translateY(0px);
      }  
      25% {
        transform: translateY(-5px);
      }
      50% {
        transform: translateY(0px);
      }
      75% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }

  svg {
    padding: 10px 12px;
  }
}

.scroll-button-leave-active,
.scroll-button-enter-active {
  transition: all 0.3s ease;
}

.scroll-button-enter-to,
.scroll-button-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.scroll-button-enter-from,
.scroll-button-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

</style>