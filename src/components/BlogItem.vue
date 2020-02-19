<template>
  <li class="list-item-blog">
    <g-link :to="blogNode.path" class="link-blog">
      <span style="flex: 3;">{{ blogNode.title }}</span>
      <span class="is-new" v-if="isNew">New</span>
    </g-link>
  </li>
</template>

<script>
export default {
  name: 'BlogItem',
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
.list-item-blog {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 2rem;
}

.link-blog {
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
}
.link-blog:link {
  color: black;
}

.link-blog:visited {
  color: black;
}

.link-blog:focus {
  background: rgb(230, 230, 230);
}

.link-blog:hover {
  background: rgb(230, 230, 230);
}

.link-blog:active {
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