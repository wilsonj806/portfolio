<template>
  <footer>
    <div class="section">
      <p>
        Built with <a class="link" href="https://gridsome.org/"><img src="../../img/gridsome-logo.svg" alt="gridsome logo"/> Gridsome</a>
      </p>
      <p>
        {{ `&#169; Wilson Jiang ${year}`}}
      </p>
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
  margin-top: 2rem;
  width: 100vw;
  /* background-color: rgb(126, 126, 126); */
  color: black;
  display: flex;
  justify-content: center;
}

div {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}

img {
  width: 1rem;
  align-self: center;
  margin-right: 0.125rem;
}

p {
  margin: 0 0;
  font-size: 0.825rem;
}

.link {
  display: inline-flex;
  align-items: baseline;
}

.link:link {
  text-decoration: none;
  color: black;
}

.link:visited {
  color: black;
}

.link:hover {
  text-decoration: underline;
}

@media only screen and (min-width: 1024px) {
  div {
    width: 70%;
  }
}
</style>