<template>
  <div class="mobile-header">
    <div style="position: relative;">
      <g-link class="name">WJ</g-link>
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
        <g-link class="nav-link" to="/about">About</g-link>
        <g-link class="nav-link" to="/projects">Projects</g-link>
        <g-link class="nav-link" to="/blog">Blog</g-link>
              <a class="nav-link" href="https://www.dropbox.com/s/soxnd60u5du2x66/Wilson-Jiang-Resume.pdf?&raw=1" target="_blank">Resume</a>
        <!-- <g-link to="/contact">Contact</g-link> -->
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

<style scoped src="../styles/nav.css">
</style>