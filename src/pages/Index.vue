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
      <!-- <button class='btn btn-primary'>Contact me!</button> -->
    </div>
  </section>
  <!-- <section class='recent'>
    <div class='recent-card-wrap'>
      <h2 class='sec-heading'>Recent Project</h2>
      <RecentProjectCard v-for='recentProjects in $page.recentProject.edges' :key='recentProjects.title' :recentProjectNode='recentProjects.node'/>
    </div>
    <div class='recent-card-wrap rec-blog'>
      <h2>Recent Blog</h2>
      <div class='card-rec'>
        <div>
          <h3>My Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus magna non leo gravida, nec viverra tortor rutrum.</p>
        </div>
    </div>
  </div>
  </section> -->
  <section class='highlight'>
    <h2 class='sec-heading'>Selected Works</h2>
    <ProjectCard v-for="project in $page.allProject.edges" :key="project.id" :projectNode="project.node"/>
  </section>
  </Layout>
</template>

<page-query>
query {
  recentProject: allProject(order: ASC, limit: 2) {
    edges {
      node {
        id
        title
        description
        logo (width: 200, quality: 60)
      }
    }
  }
  recentBlog: allBlog(order: ASC, limit: 1) {
    edges {
      node {
        id
        title
        path
        created_at
      }
    }
  }
  allProject(sortBy: "created_at", order: DESC, filter: { title: { regex: "Todolet|TS Contributors|NYC Arbor Logger"}}) {
    edges {
      node {
        id
        title
        path
        created_at
        image (width: 1000, quality: 100)
        description
        live_link
        repo_link
        tools
      }
    }
  }
}
</page-query>

<script>
import SingleBlogItem from '../components/SingleBlogItem'
import SingleProjectItem from '../components/SingleProjectItem'
import ProjectCard from '../components/ProjectCard'
// import RecentProjectCard from '../components/RecentProject'

export default {
  name: 'IndexPage',
  components: {
    SingleBlogItem,
    ProjectCard,
    // RecentProjectCard
  }
}
</script>

<style scoped src='../styles/landing.css'>

</style>