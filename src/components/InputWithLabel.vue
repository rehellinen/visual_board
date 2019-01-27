<template lang="pug">
  el-row(:gutter="10")
    el-col(:span="6")
      p {{title}}
    el-col(:span="18")
      el-input
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .el-col
    height: 40px
    display: flex
    justify-content: center
    align-items: center
  p
    margin: 0
    font-size: $normal-font-size
</style>
