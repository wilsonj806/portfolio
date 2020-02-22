<template>
  <li class="list-item" :style="extendHeight">
    <!-- <g-link :to="projectNode.path" class="link"> -->
      <div class="wrap-title">
        <g-image :src="imgSrc" alt="logo" v-if="imgSrc"/>
        <p
          class="title"
          :style="addPad"
        >
          {{ projectNode.title }}
        </p>
      </div>

      <div class="wrap-excerpt">
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
        <button @click="toggleExpand" type="button">&#8964;</button>
      </div>
      <div class="expanded" :style="displayExpanded">
        <small v-if="projectNode.description">{{ projectNode.description }}</small>
      </div>
    <!-- </g-link> -->
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
    addPad() {
      return this.projectNode.image ? "" : "padding-left: 42px";
    },
    displayExpanded() {
      return this.clicked ? "display: block; visibility: visible" : "display: none; visibility: hidden;" ;
    },
    extendHeight() {
      return this.clicked ? "height: 6rem;" : "" ;
    }
  },
  data() {
    return {
      clicked: false
    }
  },
}
</script>

<style scoped src="../styles/single-project-item.css"></style>