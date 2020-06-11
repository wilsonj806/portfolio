<template>
<div class='card'>
  <div class='card-content'>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>You can find the project repo on <a :href='repoLink' target='_blank' rel='noopener  noreferer'>Github</a>!</p>
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
      <p class='tools-text'>{{ tools }}</p>
    </div>
  </div>
  <div class='card-img'>
    <!-- TODO: Add a zoom button -->
    <img :src='imgSrc' :alt='title'/>
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
    title() {
      return this.projectNode ? this.projectNode.title : 'Project Title Here'
    },
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
      return this.projectNode && this.projectNode.tools.length > 0 ? this.projectNode.tools.reduce((acc, tool, i) => {
          if (acc == '') {
            return tool
          } else if (i < 5) {
            return `${acc}, ${tool}`
          } else {
            return acc;
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
  max-height: 326px;
}

.card-content {
  width: 35%;
  padding: 24px 32px 0 32px;
  margin-bottom: 24px;
  overflow-y: auto;
}

.card-content > h3,
.card-content > h4 {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.tools-text {
  margin: 4px 0px;
  font-size: 14px;
  color: grey;
  font-family: Arial, Helvetica, sans-serif;
}

.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbdcad;
  width: 65%;
  min-height: 100%;
  padding: 24px;
}

.card-img > img {
  max-width: 100%;
  height: auto;
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

.tools {
  list-style: none;
}
.tools > li {
  display: inline-block;
  margin: 0 8px;
}

@media screen and (min-width: 1440px ){
  .card {
  max-height: 326px;
  }
  .card-content {
    width: 40%;
  }
  .card-img {
    width: 65%;
  }

  .card-content > h3,
  .card-content > h4 {
  margin: 8px 0 8px 0;
  font-size: 24px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
}
</style>