<template lang="pug">
  div(v-show="dialogVisible")
    el-dialog(:title="title" :visible.sync="dialogVisible"
    @close="closeDialog" width="1100px")
      el-row
        el-col(:span="12")
          el-row
            el-col(:span="8")
              input-with-label(title="产品编号")
            el-col(:span="8")
            el-col(:span="8")
          el-row
            el-col(:span="8")
            el-col(:span="8")
            el-col(:span="8")
          el-row
            el-col(:span="8")
            el-col(:span="16")
        el-col(:span="12")
      el-row
        el-col(:span="12")
        el-col(:span="12")
    div
</template>

<script>
  import InputWithLabel from './InputWithLabel'

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
    },
    components: {
      InputWithLabel
    }
  }
</script>

<style lang="sass" scoped>
</style>
