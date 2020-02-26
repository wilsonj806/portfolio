<template>
  <Layout>
    <article>
      <div>
      <h1>About</h1>
        <p>
          Hi, I'm Wilson, if you're a bit more curious about who I am, this page is for exactly that! I'm a front end developer, technical writer, and former mechanical engineer. Currently I'm volunteering as a teacher for <a class="link" href="https://codenation.org/" alt="Code Nation link">Code Nation</a>, building projects, and writing!
        </p>

        <p>
          Learning web development, or software development in general is a massive undertaking and I wanted to use this site to document the process. The Internet allows for learning to take place at an incredibly fast pace, AND it makes information so much easier to find. Personally for me, I'm aiming to spread that knowledge, because there's no point in hoarding it, or the process that I undertook to get that knowledge.
        </p>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
article {
  display:flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0.25rem 0.5rem;
}

h1 {
  width: 100%;
  text-align: left;
}
p {
  text-indent: 2rem;
}

@media screen and (min-width: 1024px) {
  div {
    width: 70%;
  }
}

@media screen and (min-width: 1440px) {
  div {
    width: 50%;
  }
}
</style>