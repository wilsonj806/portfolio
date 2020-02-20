<template>
  <Layout>
    <section class="section sect-intro">
      <h1>Hi, I'm Wilson!</h1>
      <p>
        I'm a front end developer building interfaces with modern web technologies such as React.js or Vue.js! I can design, build, and deploy web apps from the ground up.
      </p>
    </section>
    <section class="section">
      <h2>Latest Projects</h2>
      <div class="wrap-latest-list">
        <ul class="list-latest">
          <SingleMdItem v-for="project in $page.allProject.edges" :key="project.node.id" :blogNode="project.node">
            <g-image :src="project.node.image.src" alt="logo"/>
          </SingleMdItem>
        </ul>
      </div>
    </section>
    <section class="section">
      <h2>Latest Blog Articles</h2>
      <div class="wrap-latest-list">
        <ul class="list-latest">
          <SingleMdItem v-for="blog in $page.allBlog.edges" :key="blog.node.id" :blogNode="blog.node">
          </SingleMdItem>
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
  allProject(sortBy: "created_at", order: DESC, limit: 5) {
    edges {
      node {
        id
        title
        path
        image (width: 60, quality: 90)
        created_at
      }
    }
  }
}
</page-query>

<script>
import SingleMdItem from '../components/SingleMdItem'

export default {
  name: 'IndexPage',
  components: {
    SingleMdItem
  }
}
</script>

<style scoped>
.sect-intro {
  height: 45vh;
}

.list-latest {
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