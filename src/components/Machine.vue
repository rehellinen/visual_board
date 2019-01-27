<template lang="pug">
  .machine(:class="{danger, down}")
    p.title {{title}}
    p {{info.product}}
    p {{info.status}}
    p {{info.team}}
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      info: {
        type: Object,
        default: () => ({})
      },
      danger: {
        type: Boolean,
        default: false
      },
      down: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .machine.danger
    background-color: $danger-color
  .machine.down
    background-color: $minor-font-color
  .machine
    display: flex
    flex-direction: column
    align-items: center
    width: 130px
    border: 1px solid $border-one
    border-radius: 5px
    padding: 10px 0
    background-color: $success-color
    .title
      font-size: $bigger-font-size
      padding-bottom: 10px
      color: white
    p
      font-size: $normal-font-size
      margin: 2px
      color: $border-one
</style>
