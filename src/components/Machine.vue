<template lang="pug">
  .wrapper(:class="{danger, down}")
    my-dialog(:visible="dialogVisible"
    :title="title" @close="dialogClose")
    .machine(@click="openDialog")
        p.title {{title}}
        p {{info.product}}
        p {{info.status}}
        p {{info.team}}
</template>

<script>
  import MyDialog from './MyDialog'
  export default {
    data () {
      return {
        dialogVisible: false
      }
    },
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
    },
    methods: {
      openDialog () {
        this.dialogVisible = true
      },
      dialogClose () {
        this.dialogVisible = false
      }
    },
    components: {
      MyDialog
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .wrapper
    background-color: $success-color
    border-radius: 5px
  .wrapper.danger
    background-color: $danger-color
  .wrapper.down
    background-color: $minor-font-color
  .machine
    display: flex
    flex-direction: column
    align-items: center
    width: 130px
    border-radius: 5px
    padding: 10px 0
    .title
      font-size: $bigger-font-size
      padding-bottom: 10px
      color: white
    p
      font-size: $normal-font-size
      margin: 2px
      color: $border-one
</style>
