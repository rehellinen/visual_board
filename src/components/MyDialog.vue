<template lang="pug">
  div(v-show="dialogVisible")
    el-dialog(:title="title" :visible.sync="dialogVisible"
    @close="closeDialog" width="1100px")
      el-row
        el-col(:span="12")
          el-row(:gutter="20")
            el-col(:span="8")
              input-with-label(title="产品编号")
            el-col(:span="8")
              input-with-label(title="产品名称")
            el-col(:span="8")
              input-with-label(title="规格型号")
          el-row(:gutter="20")
            el-col(:span="8")
              input-with-label(title="产品数量")
            el-col(:span="8")
              input-with-label(title="累计数量")
            el-col(:span="8")
              input-with-label(title="取数时间")
          el-row
            el-col(:span="8")
              input-with-label(title="累计运行")
            el-col(:span="16")
              input-with-label(title="备注")
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
  .el-row
    margin-top: 10px
</style>
