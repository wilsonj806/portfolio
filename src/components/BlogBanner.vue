<template>
<div class='img-banner'>
  <img :src='imgSrc' alt='blog-banner'>
</div>
</template>

<script>
export default {
  name: 'BlogBanner',
  props: {
    imgSrc: String
  }
}
</script>

<style scoped>
.img-banner {
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}
</style>