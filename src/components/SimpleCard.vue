<template lang="pug">
  el-card
    p.title {{title}}
    p.content {{content}}
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '这是标题'
      },
      content: {
        type: String,
        default: '这是内容'
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .el-card
    display: flex
    align-items: center
    justify-content: center
    width: 100px
    height: 90px
    .title
      color: $main-font-color
      font-size: $big-font-size
    .content
      color: $minor-font-color
      font-size: $normal-font-size
</style>
