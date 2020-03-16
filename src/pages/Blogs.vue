<template>
  <Layout>
    <section class="section">
      <h1>Blogs</h1>
      <p>Below you'll find blog posts/ articles that I've written to document and share what I've learned while learning software development!</p>
      <div class="wrap-latest-list">
        <ol class="list-latest latest-blog">
          <li class="list-item" v-for="blog in $page.allBlog.edges" :key="blog.node.id">
            <g-link class="link" :to="blog.node.path">
              {{ blog.node.title }}
            </g-link>
          </li>
        </ol>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  allBlog(sortBy: "created_at", order:DESC) {
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
import SingleBlogItem from '../components/SingleBlogItem'
export default {
  name: 'Blogs',
  components: {
    SingleBlogItem
  }
}
</script>

<style scoped>
.latest-blog .list-item:not(:last-child) {
  border-bottom: 1px solid darkgrey;
}

.list-latest {
  width: 100%;
  padding-left: 0;
}

.list-item {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}

.link {
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
}
.link:link {
  color: black;
}

.link:visited {
  color: black;
}

.link:focus {
  background: rgb(230, 230, 230);
}

.link:hover {
  background: rgb(230, 230, 230);
}

.link:active {
  background: rgb(230, 230, 230);
}
</style>