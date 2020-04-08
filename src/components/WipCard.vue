<template>
  <section class='card-wip'>
    <h2 class="card-header-text">Work in Progress!</h2>
    <WipCardText
      v-if="index === 0"
      :wipData="$static.allWip.edges[0].node"/>
    <WipCardText
      v-else
      :wipData="$static.allWip.edges[1].node"/>
    <div class="row-btn">
      <!-- TODO Make this programmatically generate the number of things -->
      <button
        type="button"
        class="btn-toggler"
        @click="toggleSelection(0)"
        :style="index === 0 ? activeColor : ''"
        />
      <button
        type="button"
        class="btn-toggler"
        @click="toggleSelection(1)"
        :style="index === 1 ? activeColor : ''"
      />
    </div>
  </section>
</template>

<static-query>
query {
  allWip(sortBy: "created_at", order: DESC, limit: 2) {
    edges {
      node {
        id
        type
        title
        description
      }
    }
  }
}

</static-query>


<script>
import WipCardText from './WipCardText'
export default {
  name: 'WipCard',
  components: {
    WipCardText
  },
  methods: {
    toggleSelection(val) {
      if (this.index === parseInt(val)) return
      this.index = val
    },
  },
  data() {
    return {
      index: 0,
      activeColor: 'background: rgba(255, 255, 255, 0.85);'
    }
  },
}
</script>

<style scoped>
.card-wip {
  right: 10%;
  top: 50%;
  position: absolute;
  width: 12rem;
  height: 16rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.125rem;
  display: flex;
  flex-flow: column nowrap;
  place-items: center flex-start;
  background: rgba(48, 45, 228, 0.65);
  color: rgb(235, 235, 235);
  overflow: hidden;
}

.card-header-text {
  margin: 0.125rem;
  font-size: 1.125rem;
}

.card-body {
  height: 14.75rem;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  place-items: flex-start space-between;
}

.card-body > * {
  display: block;
}

.card-text {
  font-size: 0.825rem;
}

.row-btn {
  padding: 0.5rem 0;
  display: flex;
  place-items: center;
}

.btn-toggler {
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border: 1px solid rgb(85, 85, 85);
}

</style>