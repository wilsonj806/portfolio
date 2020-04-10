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
        v-for="(wip, wipIndex) in $static.allWip.edges"
        type="button"
        :key="wipIndex"
        class="btn-toggler"
        :data-index="wipIndex"
        @click="toggleSelection(wipIndex)"
        :style="index === wipIndex ? activeColor : ''"
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
      this.index = parseInt(val)
    },
  },
  data() {
    return {
      index: 0,
      activeColor: 'background: rgba(190, 245, 197, 0.85);border: 1px solid rgb(29, 29, 29);'
    }
  },
}
</script>

<style scoped>
.card-wip {
  right: -10%;
  top: 25%;
  position: absolute;
  width: 288px;
  height: 336px;
  padding: 18px;
  border-radius: 6px;
  display: flex;
  flex-flow: column nowrap;
  place-items: flex-start flex-start;
  border: 1px solid rgb(86, 52, 167);
  box-shadow: 4px 4px 3px rgba(65, 65, 65, 0.226);
  color: rgb(73, 25, 117);
  background: rgb(250, 250, 250);
  overflow: hidden;
}

.card-header-text {
  margin: 2px;
  width: 100%;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
}

.card-body {
  height: 236px;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  place-items: flex-start space-between;
}

.card-body > * {
  display: block;
}


.row-btn {
  padding: 8px 0;
  display: flex;
  align-self: center;
  place-items: center;
}

.btn-toggler {
  width: 16px;
  height: 16px;
  margin: 0 8px;
  border-radius: 50%;
  border: 1px solid rgba(85, 85, 85, 0.562);
}

.btn-toggler:hover {
  border: 1px solid rgb(29, 29, 29);
  background: rgba(190, 245, 197, 0.85);
}

</style>