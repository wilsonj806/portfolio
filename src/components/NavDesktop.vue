<template>
  <nav class="nav-desktop">
    <div style="position: relative;">
      <g-link class="name" to="/">WJ</g-link>
    </div>
    <div class="primary-nav-links--desktop">
      <g-link to="/about" class="nav-link--desktop">About</g-link>
      <g-link to="/projects" class="nav-link--desktop">Projects</g-link>
      <g-link to="/blogs" class="nav-link--desktop">Blogs</g-link>
      <a class="nav-link--desktop" href="https://www.dropbox.com/s/soxnd60u5du2x66/Wilson-Jiang-Resume.pdf?dl=07&raw=1" target="_blank">Resume</a>
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