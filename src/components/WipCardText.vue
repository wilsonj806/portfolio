<template>
  <div class="card-body">
    <h3>{{wipData.title}}</h3>
    <span>{{`Type: ${ wipData.type }`}}</span>
    <span>{{`Description: ${ wipData.description }`}}</span>
  </div>
</template>

<script>
export default {
  name: 'WipCardText',
  props: {
    wipData: {
      type: Object,
      required: true,
      default: () => ({ title: 'n/a', type: 'Project', description: 'n/a'})
    },
  }
}
</script>

<style scoped>
span {
  text-overflow:ellipsis;
}

h3 {
  font-size: 1.0625rem;
}
</style>