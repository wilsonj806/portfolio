<template>
  <div class='card-rec'>
    <!-- TODO Make it static height-->
    <h3>{{ recentBlogNode.title}}</h3>
    <p>{{ recentBlogNode.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus magna non leo gravida.'}}</p>
    <g-link class='link-btn' :to='recentBlogNode.path'>Read More</g-link>
  </div>
</template>

<script>
export default {
  name: 'RecentBlogCard',
  props: {
    recentBlogNode: {
      type: Object,
      title: String,
      description: String,
      path: String
    }
  }

}
</script>

<style scoped>
.card-rec {
  width: 100%;
  height: 185px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.link-btn {
border-radius: 8px;
padding: 8px;
display: block;
width: 120px;
margin: 8px 0;
background: transparent;
border: 2px solid #83e772;
text-align: center;
}


p {
  height: 70px;
}

h3 {
  margin: 8px 0;
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