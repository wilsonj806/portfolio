<template>
  <header>
    <NavDesktop v-if="isMobile === false"/>
    <NavMobile v-else/>
  </header>
</template>

<script>
import NavDesktop from './NavDesktop.vue'
import NavMobile from './NavMobile.vue'
export default {
  components: {
    NavDesktop,
    NavMobile
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768 || screen.width <= 768
    }
  }
}
</script>

<style>
</style>