<template lang="pug">
  div.histogram
    el-card
      div(slot="header" ref="title")
        span {{title}}
      div.card-container
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
      },
      width: {
        type: Number,
        default: 480
      },
    },
    mounted () {
      (new Line({
        marginX: 50,
        width: this.width,
        height: 280,
        id: `line-${this.id}`
      })).draw(LineData)
    }
  }
</script>

<style lang="sass" scoped>
  .card-container
    height: 300px
    width: 100%
    display: flex
    align-items: center
    justify-content: center
  .histogram
    height: 100%
  .el-card
    height: 400px
</style>
