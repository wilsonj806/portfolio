<!-- TODO handle sorting by year -->
<template>
  <Layout>
    <section class="section">
      <h1>Projects</h1>
      <p>Below you'll find more projects that I've worked on, whether it's self-guided projects, open source software, or work-related things that might be interesting(and aren't under NDA).</p>
      <div class="wrap-latest-list">
        <ul class="list-latest latest-project">
          <SingleProjectItem v-for="project in $page.allProject.edges" :key="project.node.id" :projectNode="project.node"/>
          <li v-if="$page.allProject.edges.length === 0">No projects yet, check back soon!</li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  allProject(sortBy: "created_at", order: DESC, limit: 30) {
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
import SingleProjectItem from '../components/SingleProjectItem'

export default {
  name: 'Projects',
  components: {
    SingleProjectItem
  }
}
</script>

<style scoped>
.latest-project .list-item:not(:last-child) {
  border-bottom: 1px solid darkgrey;
}

.list-latest {
  list-style: none;
  width: 100%;
  padding-left: 0;
}

</style>