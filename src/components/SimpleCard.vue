<template lang="pug">
  el-card
    p {{content}}
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: '内容'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .el-card
    width: 100px
    height: 90px
</style>
