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
      <p>I can build apps or sites with from front-end to back-end! React, TypeScript, and Express are my go to tools, but I can pick up just about anything.</p>
      <!-- <button class='btn btn-primary'>Contact me!</button> -->
    </div>
  </section>
  <!-- TODO render this in when the blog is fixed -->
  <section class='recent'>
    <div class='recent-card-wrap'>
      <h2 class='sec-heading'>Recent Project</h2>
      <RecentProjectCard v-for='recentProjects in $page.recentProject.edges' :key='recentProjects.title' :recentProjectNode='recentProjects.node'/>
    </div>
    <div class='recent-card-wrap rec-blog'>
      <h2 class='sec-heading'>Recent Blog</h2>
      <RecentBlogCard v-for='recentBlog in $page.recentBlog.edges' :key='recentBlog.title' :recentBlogNode='recentBlog.node'/>
    </div>

  </section>
  <section class='highlight'>
    <h2 class='sec-heading'>Selected Works</h2>
    <ProjectCard v-for="project in $page.allProject.edges" :key="project.id" :projectNode="project.node"/>
  </section>
  </Layout>
</template>

<page-query>
query {
  recentProject: allProject(order: DESC, limit: 1) {
    edges {
      node {
        id
        title
        description
        logo (width: 200, quality: 60)
      }
    }
  }
  recentBlog: allBlog(order: DESC, limit: 1) {
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
import ProjectCard from '../components/ProjectCard'
import RecentProjectCard from '../components/RecentProject'
import RecentBlogCard from '../components/RecentBlog'

export default {
  name: 'IndexPage',
  components: {
    SingleBlogItem,
    ProjectCard,
    RecentProjectCard,
    RecentBlogCard
  }
}
</script>

<style scoped src='../styles/landing.css'>

</style>