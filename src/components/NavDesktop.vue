<template>
  <nav class="nav-desktop">
    <div>
      <g-link class="name" to="/">Wilson Jiang</g-link>
    </div>
    <div class="primary-nav-links">
      <g-link to="/about">About</g-link>
      <g-link to="/projects">Projects</g-link>
      <g-link to="/blogs">Blogs</g-link>
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
.nav-desktop {
  display: none;
  visibility: hidden;
}
@media only screen and (min-width: 1024px) {
  .nav-desktop {
    width: 100%;
    display: flex;
    margin: 1rem;
    padding: 0.25rem 0;
    visibility: visible;
    align-items: baseline;
    justify-content: space-between;
  }

  .primary-nav-links > a {
    margin: 0 0.5rem;
  }

  a {
    font-size: 1.75rem;
  }
}
</style>