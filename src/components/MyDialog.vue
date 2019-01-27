<template lang="pug">
  div(v-show="dialogVisible")
    el-dialog(:title="title" :visible.sync="dialogVisible"
    @close="closeDialog" width="1100px")
      el-row(:gutter="20")
        el-col(:span="12")
          el-row(:gutter="10")
            el-col(:span="8")
              my-input(title="产品编号")
            el-col(:span="8")
              my-input(title="产品名称")
            el-col(:span="8")
              my-input(title="规格型号")
          el-row(:gutter="10")
            el-col(:span="8")
              my-input(title="产品数量")
            el-col(:span="8")
              my-input(title="累计数量")
            el-col(:span="8")
              my-input(title="取数时间")
          el-row(:gutter="10")
            el-col(:span="8")
              my-input(title="累计运行")
            el-col(:span="16")
              my-input(title="备注")
        el-col(:span="12")
          my-table(:data="gridData")
      el-row(:gutter="30")
        el-col(:span="12")
          my-table(:data="gridData")
        el-col(:span="12")
          my-table(:data="gridData")
    div
</template>

<script>
  import MyInput from './MyInput'
  import MyTable from './MyTable'
  export default {
    data () {
      return{
        dialogVisible: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
      MyInput,
      MyTable
    }
  }
</script>

<style lang="sass" scoped>
  .el-row
    margin-top: 10px
</style>
