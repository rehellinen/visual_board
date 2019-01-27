<template lang="pug">
  div(v-show="dialogVisible")
    el-dialog(:title="title" :visible.sync="dialogVisible" @close="closeDialog")
      p 123
</template>

<script>
  export default {
    data () {
      return{
        dialogVisible: false
      }
    },
    watch: {
      visible (newVal) {
        this.dialogVisible = newVal
      },
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      closeDialog () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
