<template>
  <Layout>
    <section class="section sect-intro">
      <h1>Hi, I'm Wilson!</h1>
      <div class="wrap-intro-txt">
        <p>
          I'm a front end developer building interfaces with modern web technologies such as React.js or Vue.js!
        </p>
        <p>
          I can design, build, and deploy web apps from the ground up and have no qualms about picking up new technlogies or concepts.
        </p>
        <p>
          Check out my <a href="https://github.com/wilsonj806">Github</a> for sample works!
        </p>
      </div>
    </section>
    <section class="section">
      <h2>Latest Projects</h2>
      <div class="wrap-latest-list">
        <ul class="list-latest latest-project">
          <SingleProjectItem v-for="project in $page.allProject.edges" :key="project.node.id" :projectNode="project.node"/>
        </ul>
      </div>
    </section>
    <section class="section">
      <h2>Latest Blog Articles</h2>
      <div class="wrap-latest-list">
        <ul class="list-latest">
          <SingleBlogItem v-for="blog in $page.allBlog.edges" :key="blog.node.id" :blogNode="blog.node"/>
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
        image (width: 42, quality: 90)
        created_at
        description
        live_link
        repo_link
      }
    }
  }
}
</page-query>

<script>
import SingleBlogItem from '../components/SingleBlogItem'
import SingleProjectItem from '../components/SingleProjectItem'

export default {
  name: 'IndexPage',
  components: {
    SingleBlogItem,
    SingleProjectItem
  }
}
</script>

<style scoped>
.sect-intro {
  height: 45vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
}

.latest-project .list-item:not(:last-child) {
  border-bottom: 1px solid darkgrey;
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

  .wrap-intro-txt {
    width: 60%;
  }
}
</style>