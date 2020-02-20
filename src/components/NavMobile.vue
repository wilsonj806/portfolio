<template>
  <div class="mobile-header">
    <div>
      <g-link class="name">Wilson Jiang</g-link>
    </div>
    <ButtonBurger
      @burger-clicked="toggleClicked"
    />
    <transition name="fade-in">
      <nav class="primary-nav-links" v-if="clicked">
        <div class="wrap-close-btn">
          <button
            type="button"
            @click="toggleClicked"
            class="close-btn"
            aria-label="Close"
          >
            &#215;
          </button>
        </div>
        <g-link to="/about">About</g-link>
        <g-link to="/projects">Projects</g-link>
        <g-link to="/blog">Blog</g-link>
        <g-link to="/contact">Contact</g-link>
      </nav>
    </transition>
  </div>
</template>

<script>
import ButtonBurger from './ButtonBurger'
export default {
  name: 'NavMobile',
  components: {
    ButtonBurger
  },
  methods: {
    toggleClicked() {
      this.clicked = !this.clicked
    }
  },
  data() {
    return {
      clicked: false
    }
  }
}
</script>

<style scoped>
.mobile-header {
  width: 100%;
  display: flex;
  visibility: visible;
  justify-content: space-between;
  align-items: center;
}
.fade-in-enter-active, .fade-in-leave-active {
  transition: all .3s ease-in-out;
}
.fade-in-enter-to {
  transform: translateX(0px)
}

.fade-in-leave-to, .fade-in-enter {
  opacity: 0;
  transform: translateX(-768px);
}

.primary-nav-links {
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
}

.wrap-close-btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.close-btn {
  padding: 0.5rem 0.75rem;
  margin: 0;
  font-size: 1.75rem;
}
.primary-nav-links > a {
  margin: 2rem 0;
  font-size: 3rem;
}

@media only screen and (min-width: 1024px) {
  .mobile-header {
    display: none;
    visibility: hidden;
  }
}
</style>