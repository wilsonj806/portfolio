<template>
  <nav>
    <div class='nav-header'>
      <g-link to='/' class='home-link'>WJ</g-link>
    </div>
    <div class="nav-links">
      <ul class='nav-list'>
        <!-- <li><g-link to='/works'>Works</g-link></li> -->
        <!-- <li><g-link to='/blog'>Blog</g-link></li> -->
        <li class='nav-list-item'>
          <!-- Fix the darkness on the hover state -->
          <g-link class='nav-link' to='/blogs/'>Blogs</g-link>
        </li>
        <li class='nav-list-item'>
          <!-- Fix the darkness on the hover state -->
          <a class='nav-link' href='https://www.dropbox.com/s/kol2kp0do40ggza/Wilson%20Jiang%20-%20Resume.pdf?dl=0'>Resume</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BaseNav'
}
</script>

<style src='../styles/nav.css' scoped>
</style>