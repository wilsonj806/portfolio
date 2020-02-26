<template>
  <nav class="nav-desktop">
    <div>
      <g-link class="name" to="/">WJ</g-link>
    </div>
    <div class="primary-nav-links--desktop">
      <g-link to="/about" class="nav-link--desktop">About</g-link>
      <g-link to="/projects" class="nav-link--desktop">Projects</g-link>
      <!-- <g-link to="/blogs">Blogs</g-link> -->
      <!-- <g-link to="/contact">Contact</g-link> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavDesktop'
}
</script>

<style scoped src="../styles/nav.css">
</style>