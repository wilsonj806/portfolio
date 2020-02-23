<template>
  <li class="list-item">
    <g-link :to="blogNode.path" class="link">
      <span style="flex: 3;">{{ blogNode.title }}</span>
      <span style="flex: 3;" v-if="blogNode.description">{{ blogNode.description }}</span>
      <span class="is-new" v-if="isNew">New</span>
    </g-link>
  </li>
</template>

<script>
export default {
  name: 'SingleBlogItem',
  props: {
    blogNode: {
      type: Object,
      required: true
    }
  },
  data() {
    const createdAt = new Date(this.blogNode.created_at)
    const diff = Math.floor(Date.now() - createdAt) / (8.64 * Math.pow(10, 7))

    return {
      isNew: diff <= 30
    }
  }
}
</script>

<style scoped>
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
  border-radius: 0.25rem;
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

.is-new {
  border-radius: 0.5rem;
  margin: 0.125rem;
  padding: 0.5rem;
  color: white;
  font-size: 1.25rem;
  background: rgb(85, 83, 255);
}

h2 {
  margin: 0 0.25rem;
}
</style>