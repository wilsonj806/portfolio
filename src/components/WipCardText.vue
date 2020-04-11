<template>
  <div class="card-body">
    <h3>{{wipData.title}}</h3>
    <p>Type: <span class="wip-data">{{wipData.type}}</span></p>
    <p>Description: <span class="wip-data">{{wipData.description}}</span></p>
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
p {
  text-overflow:ellipsis;
  font-weight: 600;
  /* color: rgb(29, 94, 32); */
}



h3 {
  font-size: 1.125rem;
}

.wip-data {
  font-weight: 500;
}
</style>