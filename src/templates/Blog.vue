<template>
  <div>
    <!-- Figure out how to make this a component instead -->
    <VueRemarkContent/>
  </div>
</template>

<page-query>
query Blog($id: ID!) {
  blog(id:$id) {
    id
    path
    content
  }
}
</page-query>

<style scoped>
.blog {
  margin: auto;
  max-width: 65%;
}
</style>