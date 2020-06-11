<template>
  <div class="layout-default">
    <BaseNav/>
    <slot/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseFooter from '../components/BaseFooter'
import BaseNav from '../components/BaseNav'

export default {
  components: {
    BaseFooter,
    BaseNav
  },

}
</script>

<style scoped>
.layout-default {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}

</style>