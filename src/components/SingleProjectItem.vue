<!-- TODO tile the content so that the links are on the bottom and the excerpt is to the right of the project name -->
<template>
  <li class="list-item">
    <div class="wrap-title">
      <div class="wrapper-img">
        <g-image :src="imgSrc" alt="logo" v-if="imgSrc"/>
        <font-awesome-icon class="icon" :icon="['fas', 'terminal']" v-else/>
      </div>
      <p
        class="title"
      >
        {{ projectNode.title }}
      </p>
    </div>

    <div class="wrap-excerpt">
      <ul class="wrap-links">
        <li>
          <g-link class="link" :to="projectNode.live_link" target="_blank">
            Live site
          </g-link>
        </li>
        <li>
          <g-link class="link" :to="projectNode.repo_link" target="_blank">
          Repository
          </g-link>
        </li>
      </ul>
    </div>
    <div class="expanded">
      <small v-if="projectNode.description">{{ projectNode.description }}</small>
    </div>
  </li>
</template>

<script>

export default {
  name: 'SingleProjectItem',
  props: {
    projectNode: {
      type: Object,
      required: true,
      default: () => ({ image: ''})
    }
  },
  methods: {
    toggleExpand() {
      this.clicked = !this.clicked
    }
  },
  computed: {
    imgSrc() {
      return this.projectNode.image ? this.projectNode.image.src : ''
    },
  },
}
</script>

<style scoped src="../styles/single-project-item.css"></style>