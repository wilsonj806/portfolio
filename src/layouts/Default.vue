<template>
  <div class="layout-default">
    <BaseHeader/>
    <slot/>
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'

export default {
  components: {
    BaseHeader
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