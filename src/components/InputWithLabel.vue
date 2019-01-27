<template lang="pug">
  el-row(:gutter="10")
    el-col(:span="6")
      p 产品编号
    el-col(:span="18")
      el-input
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  p
    margin: 0
    font-size: $normal-font-size
</style>
