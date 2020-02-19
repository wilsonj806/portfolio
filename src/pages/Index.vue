<template>
  <Layout>
    <section class="section sect-intro">
      <h1>Hi, I'm Wilson!</h1>
      <p>
        I'm a front end developer building interfaces with modern web technologies such as React.js or Vue.js! I can design, build, and deploy web apps from the ground up.
      </p>
    </section>
    <section class="section">
      <h2>Latest Blog Articles</h2>
      <div class="wrap-blog-list">
        <ul class="list-blogs">
          <BlogItem v-for="blog in $page.allBlog.edges" :key="blog.node.id" :blogNode="blog.node">
          </BlogItem>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  allBlog(sortBy: "created_at", order: DESC, limit: 5) {
    edges {
      node {
        id
        title
        path
        created_at
      }
    }
  }
}
</page-query>

<script>
import BlogItem from '../components/BlogItem'

export default {
  name: 'IndexPage',
  components: {
    BlogItem
  }
}
</script>

<style scoped>
.sect-intro {
  height: 45vh;
}

.list-blogs {
  list-style: none;
  width: 100%;
  padding-left: 0;
}

@media only screen and (min-width: 1024px) {
  .sect-intro {
    height: 35vh;
  }
}
</style>