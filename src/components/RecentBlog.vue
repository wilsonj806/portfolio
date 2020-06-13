<template>
  <div class='card-rec'>
    <h3>{{ recentBlogNode.title}}</h3>
    <p>{{ recentBlogNode.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus magna non leo gravida, nec viverra tortor rutrum.'}}</p>
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

<style>
.card-rec {
  width: 100%;
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

h3 {
  margin: 8px 0;
}

</style>