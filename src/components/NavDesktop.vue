<template>
  <nav>
    <div>
      <g-link class="name">Wilson Jiang</g-link>
    </div>
    <div class="primary-nav-links">
      <g-link to="/about">About</g-link>
      <g-link to="/projects">Projects</g-link>
      <g-link to="/blog">Blog</g-link>
      <g-link to="/contact">Contact</g-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavDesktop'
}
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  margin: 1rem;
  padding: 0.25rem 0;
  justify-content: space-between;
  align-items: baseline;
}

.primary-nav-links > a {
  margin: 0 0.5rem;
}

a {
  font-size: 1.75rem;
}
</style>