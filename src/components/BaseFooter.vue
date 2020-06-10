<template>
<footer>
    <p>My social links here but longer</p>
    <p>{{ `&#169; Wilson Jiang ${year}`}}</p>
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
  height: 80px;
  width: 100vw;
  background: #9fd292;
  display: flex;
  justify-content: space-between;
}

footer > p {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

</style>