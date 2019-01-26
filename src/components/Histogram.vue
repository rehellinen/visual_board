<template lang="pug">
  div
    el-card
      div(slot="header")
        span 图表1标题
      .line-container
        #line
</template>

<script>
  import {Histogram} from "../utils/d3/Histogram"
  import {Line} from "../utils/d3/Line"
  import {LineData} from "../utils/data"

  export default {
    mounted () {
      (new Line({
        marginX: 10
      })).draw(LineData)
    }
  }
</script>

<style scoped>

</style>
