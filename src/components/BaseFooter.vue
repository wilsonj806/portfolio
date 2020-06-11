<template>
<footer>
    <div class='socials'>
      <p class='social-text'>Socials: </p>
      <a
        target="_blank"
        aria-label='Github Profile Link'
        rel='noopener noreferrer'
        class="link-github link"
        href="https://github.com/wilsonj806"
      >
        <font-awesome-icon :icon="['fab', 'github']" size="1x" /> Github
      </a>
      <a
        target="_blank"
        rel='noopener noreferrer'
        aria-label='LinkedIn Profile Link'
        class="link"
        href="https://linkedin.com/in/wilsonj806"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="1x" /> LinkedIn
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
      <p class='cr-text'>{{ `&#169; Wilson Jiang ${year}` }}</p>
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
  height: 140px;
  width: 100%;
  border-top: 1px solid lightgrey;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

div {
  margin: 0 32px;
}

.socials {
  position: relative;
}


.link:link, .link:visited {
  color: rgb(1, 80, 18);
  text-decoration: none;
  padding: 8px;
}

.link:hover {
  text-decoration: underline;
}
/*
.link:hover::after {
  width: 100%;
  right: auto;
  left: 0;
}

.link::after{
  content: '';
  background: rgba(153, 0, 153, 0.85);
  height: 50px;
  opacity: 0.8;
  position: absolute;
  right: 50%;
  top: 0;
  transition: all 0.15s;
  width: 0;
  z-index: -2;
} */

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