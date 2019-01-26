<template lang="pug">
  el-card(:body-style="cardStyle")
    div.card-container
      p.title {{content}}
      p.content {{title}}
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
    },
    data () {
      return {
        cardStyle: {
          padding: '5px'
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .card-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    height: 80px
    p
      margin: 5px
    .title
      color: $main-font-color
      font-size: $bigger-font-size
      width: 50px
    .content
      color: $minor-font-color
      font-size: $normal-font-size
</style>
