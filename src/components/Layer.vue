<template lang="pug">
  div.container
    // 上方四个图
    el-row(:gutter="20")
      el-col(:span="6")
        div.up-four
          p 123
      el-col(:span="6")
        div.up-four
          p 123
      el-col(:span="6")
        div.up-four
          p 123
      el-col(:span="6")
        div.up-four
          p 123
    el-row(:gutter="20")
      // 表格以及大图
      el-col(:span="18")
        el-row
          p 123
        el-row
          p 123
      // 三个图
      el-col(:span="6")
        el-row
          p 123
        el-row
          p 123
        el-row
          p 123
</template>

<script>
    export default {
        name: "Layer"
    }
</script>

<style lang="sass" scoped>
  .up-four
    height: 200px
  .de
</style>
