<template>
  <Layout>
    <!-- Figure out how to make this a component instead -->
    <article class='blog'>
      <VueRemarkContent/>
    </article>
  </Layout>
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
  width: 75%;
}

.blog >>> p > code {
  background: rgba(144, 238, 144, 0.5);
}

.blog >>> pre {
  background: rgba(144, 238, 144, 0.5);
  padding: 24px;
  white-space: normal;
  width: 80%;
  margin: auto;
  color: rgb(26, 26, 26);
}

.blog >>> a:link,.blog >>> a:visited {
  text-decoration: none;
  color: rgb(190, 105, 0);
}

.blog >>> a:hover {
  text-decoration: underline;
  color: darkorange;
}
</style>