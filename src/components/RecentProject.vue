<template>
<div class='card-rec'>
  <img class='recent-logo' :src='recentProjectNode.logo.src || ""' alt='recent project logo'>
  <div class='recent-content'>
    <h3>{{ recentProjectNode.title }}</h3>
    <p>{{ recentProjectNode.description }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Recent Project Card',
  props: {
    recentProjectNode: {
      type: Object,
      title: String,
      description: String,
      logo: {
        src: String
      }
    }
  }
}
</script>

<style scoped>

.card-rec {
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.recent-logo {
  /* max-height: 120px; */
  width: 90px;
  /* background: grey; */
  margin-right: 16px;
}

.recent-content {
  width: calc(100% - 120px);
}

h3 {
  margin: 8px 0;
}
</style>