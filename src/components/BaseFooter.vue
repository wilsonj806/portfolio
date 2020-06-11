<template>
<footer>
    <div class='socials'>
      <p class='social-text'>Social Media: </p>
      <a
        target="_blank"
        aria-label='Github Profile Link'
        rel='noopener noreferrer'
        class="link-github link"
        href="https://github.com/wilsonj806"
      >
        <font-awesome-icon :icon="['fab', 'github']" size="1x" /> Github Profile
      </a>
      <a
        target="_blank"
        rel='noopener noreferrer'
        aria-label='LinkedIn Profile Link'
        class="link"
        href="https://linkedin.com/in/wilsonj806"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="1x" /> LinkedIn Profile
      </a>
      <a
        target="_blank"
        aria-label='AngelList Profile Link'
        class="link"
        rel='noopener noreferrer'
        href="https://angel.co/wilson-jiang"
      >
        <font-awesome-icon :icon="['fab', 'angellist']" size="1x" /> AngelList
      </a>
    </div>
    <div class='copyright'>
      <p class='cr-text'>{{ `&#169; Wilson Jiang ${year} - Designed and developed by me` }}</p>
      <p class='cr-text'>Built with Vue and Gridsome!</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  height: 120px;
  width: 100vw;
  background: #9fd292;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 0 32px;
}

p {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

a:link, a:visited {
  color: white;
  text-decoration: white;
  padding: 8px;
}

a:hover {
  border: 1px solid white;
  border-radius: 8px;
  padding: 7px;
}

.copyright {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
}

.cr-text {
  margin: 8px;
}

.social-text {
  margin-top: 0;
  margin-bottom: 16px;
}

</style>