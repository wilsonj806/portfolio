<template>
  <div>
    <!-- Figure out how to make this a component instead -->
    <div class="project" v-html="$page.project.content"/>
  </div>
</template>

<page-query>
query Project($id: ID!) {
  Project(id:$id) {
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