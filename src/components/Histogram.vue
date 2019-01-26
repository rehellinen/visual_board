<template lang="pug">
  div.histogram
    el-card
      div(slot="header" ref="title")
        span {{title}}
      .line-container
        div(:id="'line-' + id")
</template>

<script>
  import {Line} from "../utils/d3/Line"
  import {LineData} from "../utils/data"

  export default {
    props: {
      id: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: '标题'
      }
    },
    mounted () {
      (new Line({
        marginX: 50,
        width: 450,
        id: `line-${this.id}`
      })).draw(LineData)
    }
  }
</script>

<style lang="sass" scoped>
  .histogram
    height: 100%
  .el-card
    height: 400px
</style>
