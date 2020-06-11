<template>
<div class='card'>
  <div class='card-content'>
    <h3>{{ projectNode ? projectNode.title : 'Title Here'}}</h3>
    <p>{{ description }}</p>
    <p>You can find the project on <a :href='repoLink' target='_blank' rel='noopener  noreferer'>Github</a> as well!</p>
    <a
      :href='liveLink'
      target='_blank'
      rel='noopener norefferer'
      class='link-btn'
    >
      Demo
    </a>
    <h4>Tools</h4>
    <div :data-tools='tools'/>
    <div class='tools'>
      <p>{{ tools }}</p>
    </div>
  </div>
  <div class='card-img'>
    <img :src='imgSrc' :alt='projectNode.title'/>
  </div>
</div>
</template>

<script>
export default {
  name: 'BaseProjectCard',
  props: {
    projectNode: {
      type: Object,
      image: {
        type: Object,
        src: String
      },
      description: String,
      live_link: String,
      repo_link: String,
      title: String,
    }
  },
  computed: {
    imgSrc() {
      return this.projectNode ? this.projectNode.image.src : ''
    },
    description() {
      return this.projectNode ? this.projectNode.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus magna non leo gravida, nec viverra tortor rutrum.'
    },
    repoLink() {
      return this.projectNode ? this.projectNode.repo_link : ''
    },
    liveLink() {
      return this.projectNode ? this.projectNode.live_link : ''
    },
    tools() {
      return this.projectNode && this.projectNode.tools.length > 0 ? this.projectNode.tools.reduce((acc, tool) => {
          if (acc == '') {
            return tool
          } else {
            return `${acc}, ${tool}`
          }
        }, '') : 'React, Redux, Flask'
    }
  }
}
</script>

<style scoped src="../styles/img.css"></style>
<style scoped>
.card {
  margin: 0 auto 50px auto;
  width: 100%;
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
}

.card-content {
  width: 45%;
  padding: 24px 32px;
}

.card-content > h3,
.card-content > h4 {
  margin: 8px 0 8px 0;
  font-size: 24px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.card-content > p,
.card-content li {
  font-family: Arial, Helvetica, sans-serif;
}

.card-img {
  width: 55%;
  /* background: #fbdcad; */
  min-height: 100%;
}

.card-img > img {
  width: 100%;
  height: 100%;
}

.link-btn {
border-radius: 8px;
padding: 8px 16px;
display: block;
width: 80px;
margin: 8px 0;
background: transparent;
border: 2px solid #83e772;
}

.link-btn:link{
  text-decoration: none;
  color: black;

}

.link-btn:hover {
  background: #35b81e;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 8px 16px;
}

.link-btn:visited {
  color: black;
  text-decoration: none;
}

.tools {
  list-style: none;
}
.tools > li {
  display: inline-block;
  margin: 0 8px;
}
</style>