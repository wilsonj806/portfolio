<template>
<div class='card-rec'>
  <img class='recent-logo' :src='recentProjectNode.logo.src || ""' alt='recent project logo'>
  <div class='recent-content'>
    <h3>{{ recentProjectNode.title }}</h3>
    <p>{{ recentProjectNode.description }}</p>
    <a
      :href='liveLink'
      target='_blank'
      rel='noopener norefferer'
      class='link-btn'
    >
      Demo
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'RecentProjectCard',
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
  width: 100%;
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

.link-btn {
border-radius: 8px;
padding: 8px;
display: block;
width: 80px;
margin: 8px 0;
background: transparent;
border: 2px solid #83e772;
text-align: center;
}

.link-btn:link{
  text-decoration: none;
  color: black;

}

.link-btn:visited {
  color: black;
  text-decoration: none;
}

.link-btn:hover {
  background: #35b81e;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
}

</style>