<template>
  <li class="list-item" :style="toggleHeight">
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
        <button class="btn-expand" @click="toggleExpand" type="button" v-html="toggleBtnTxt">
        </button>
      </div>
      <div class="expanded" :style="toggleDisplay">
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
    toggleDisplay() {
      return this.clicked ? "height: 2rem; visibility: visible; color: black; padding: 0.5rem 3.5rem" : "height: 0rem; visibility: hidden; color: transparent;" ;
    },
    toggleHeight() {
      return this.clicked ? "max-height: 7rem;" : "" ;
    },
    toggleBtnTxt() {
      return this.clicked ? "&#8722;" : "&#43;" ;
    },
  },
  data() {
    return {
      clicked: false
    }
  },
}
</script>

<style scoped src="../styles/single-project-item.css"></style>