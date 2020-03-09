<template>
  <article>
    <div>
      <h2
        class="title"
      >
        {{ projectNode.title }}
      </h2>
    </div>
    <div class="wrapper-img">
      <g-image :src="imgSrc" alt="img" v-if="imgSrc"/>
      <font-awesome-icon class="icon" :icon="['fas', 'terminal']" v-else/>
    </div>
    <div style="margin-top: 0.75rem;">
      <span v-if="projectNode.description">{{ projectNode.description }}</span>
    </div>
    <div>
      <ul class="wrap-links">
        <li>
          <g-link class="link-project" :to="projectNode.live_link" target="_blank">
            Live site
          </g-link>
        </li>
        <li>
          <g-link class="link-project" :to="projectNode.repo_link" target="_blank">
          Repository
          </g-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BaseProjectCard',
  props: {
    projectNode: {
      type: Object
    }
  },
  computed: {
    imgSrc() {
      return this.projectNode.image ? this.projectNode.image.src : ''
    },
  }
}
</script>

<style scoped src="../styles/img.css"></style>
<style scoped>
article {
  color: rgb(22, 77, 45);
  background: rgba(233, 232, 232, 0.7);
  box-sizing:content-box;
  width: 250px;
  height: 360px;
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  /* border-radius: 1rem; */
  border: 1px solid rgba(231, 231, 231, 0.8);
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
}

article:hover {
  box-shadow: 2px 2px 3px rgba(184, 184, 184, 0.35);
}

.title {
  width: 100%;
  margin: 0;
  font-size: 1.25rem;
}

div {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.icon {
  color: rgb(202, 201, 201);
  width: 100%;
  font-size: 150px;
}

ul {
  list-style: none;
  padding-left: 0;
}

.link-project {
  position: relative;
  text-decoration: none;
}

.link-project:link, .link-project:visited {
  color: rgb(79, 167, 118);
}

.link-project:hover::after, .link-project:focus::after {
  width: 100%;
  right: auto;
  left: 0;
}

.link-project::after {
  content: "";
  background: rgb(190, 154, 236);
  border-bottom: 1px solid rgb(31, 31, 31);
  height: 0.5rem;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 50%;
  transition: all 0.15s;
  width: 0;
  z-index: -1;
}

@media only screen and (min-width: 1024px) {
  article {
    margin: 0 2rem;
  }
}
</style>