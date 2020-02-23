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
          Check out my socials!
        </p>
        <div>
          <a
            target="_blank"
            class="link-github link"
            href="https://github.com/wilsonj806"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="1x" />  Github
          </a>
          <a
            target="_blank"
            class="link-linkedin link"
            href="https://linkedin.com/in/wilsonj806"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="1x" />  LinkedIn
          </a>
          <a
            target="_blank"
            class="link-angellist link"
            href="https://angel.co/wilson-jiang"
          >
            <font-awesome-icon :icon="['fab', 'angellist']" size="1x" />  AngelList
          </a>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>Latest Projects</h2>
      <div class="wrap-latest-list">
        <ul class="list-latest latest-project">
          <SingleProjectItem v-for="project in $page.allProject.edges" :key="project.node.id" :projectNode="project.node"/>
          <li v-if="$page.allProject.edges.length === 0">No projects yet, check back soon!</li>
        </ul>
      </div>
    </section>
    <section class="section">
      <h2>Latest Blog Articles</h2>
      <div class="wrap-latest-list">
        <ul class="list-latest">
          <SingleBlogItem v-for="blog in $page.allBlog.edges" :key="blog.node.id" :blogNode="blog.node"/>
          <li v-if="$page.allBlog.edges.length === 0">No blogs yet, check back soon!</li>
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
        created_at
        image (width: 40, quality:90)
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

.link-github {
  background: #221e1b;
}
.link-linkedin {
  background: #3371b7;
}
.link-angellist {
  background: black;
}

.link-linkedin:hover {
  background: #2962a3;
}

.link {
  margin-left: 0.5rem;
  max-width: 6.25rem;
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  color: rgb(245, 245, 245);
}

.link:link {
  color: rgb(245, 245, 245);
}

.link:visited {
  color: rgb(245, 245, 245);
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