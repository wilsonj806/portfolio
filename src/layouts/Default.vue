<template>
  <div class="layout-default">
    <BaseHeader/>
    <slot/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'

export default {
  components: {
    BaseHeader,
    BaseFooter
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