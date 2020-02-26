<template>
  <header>
    <NavDesktop/>
    <NavMobile/>
  </header>
</template>

<script>
import NavDesktop from './NavDesktop.vue'
import NavMobile from './NavMobile.vue'
export default {
  components: {
    NavDesktop,
    NavMobile
  }
}
</script>

<style scoped src="../styles/nav.css"></style>