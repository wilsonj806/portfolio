<template>
  <Layout>
    <section class='intro'>
    <div class='intro-links'>
      <a
        target="_blank"
        aria-label='Github Profile Link'
        rel='noopener noreferrer'
        class="link-github link"
        href="https://github.com/wilsonj806"
      >
        <font-awesome-icon :icon="['fab', 'github']" size="1x" />
      </a>
      <a
        target="_blank"
        rel='noopener noreferrer'
        aria-label='LinkedIn Profile Link'
        class="link"
        href="https://linkedin.com/in/wilsonj806"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="1x" />
      </a>
      <a
        target="_blank"
        aria-label='AngelList Profile Link'
        class="link"
        rel='noopener noreferrer'
        href="https://angel.co/wilson-jiang"
      >
        <font-awesome-icon :icon="['fab', 'angellist']" size="1x" />
      </a>
    </div>
    <div class='intro-text'>
      <p>Hello!</p>
      <p class='serif-bold'>I’m Wilson and I build neat things</p>
      <p>I can build apps or sites with a variety of tools from front-end to back-end!</p>
      <button class='btn btn-primary'>Contact me!</button>
    </div>
  </section>
    <section class="section">
      <h2>Featured Projects</h2>
      <div class="wrap-cards">
          <ProjectCard v-for="project in $page.allProject.edges" :key="project.node.id" :projectNode="project.node"/>
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
  allProject(sortBy: "created_at", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
        path
        created_at
        image (width: 180, quality:90)
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
import ProjectCard from '../components/ProjectCard'
import WipCard from '../components/WipCard'

export default {
  name: 'IndexPage',
  components: {
    SingleBlogItem,
    ProjectCard,
    WipCard
  }
}
</script>

<style scoped src='../styles/landing.css'>

.link {
  margin-left: 0.25rem;
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

.wrap-cards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
}
@media only screen and (min-width: 1024px) {
  h1, h2 {
    padding-bottom: 2rem;
  }

  .sect-intro {
    height: 35vh;
  }

  .wrap-intro-txt {
    width: 60%;
  }

  .link {
      margin-left: 0.5rem;
  }

  .wrap-cards {
  flex-flow: row nowrap;
}
}
</style>