<template>
  <div
    role="button"
    aria-label="Open"
    aria-haspopup="true"
    class="nav-menu-btn"
    @click="$emit('burger-clicked')"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'ButtonBurger'
}
</script>

<style scoped>
.nav-menu-btn {
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  width: 2.625rem;
  height: 2.5rem;
  margin: 0.325rem;
}

span {
  display: block;
  position: absolute;
  left: 0;
  height: 0.325rem;
  width: 100%;
  border-radius: 0.125rem;
  background: rgba(0,0,0,0.7);
  opacity: 1;
  cursor: pointer;
}

.nav-menu-btn span:nth-child(1) {
  top: 0px;
}

.nav-menu-btn span:nth-child(2) {
  top: 0.8rem;
}

.nav-menu-btn span:nth-child(3) {
  top: 1.6rem;
}

</style>