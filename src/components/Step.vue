<template lang="pug">
  el-card
    .container
      .row
        machine(title="自动包装机" :info="info")
        arrow(direction="left")
        machine(title="自动喷漆室" :info="info")
        arrow(direction="left")
        machine(title="自动打滑机" :info="info")
        arrow(direction="left")
        machine(title="辊道抛丸机" :info="info" :danger="true")

      .row
        .placeholder

      .row
        machine(title="1台电磁吊" :info="info" :danger="true")
        .placeholder
        .placeholder
        .placeholder
        machine(title="2台混砂机" :info="info" :danger="true")
        .placeholder
        arrow(direction="up")


      .row
        arrow(direction="down")
        .placeholder
        .placeholder
        .placeholder
        arrow(direction="down")
        .placeholder
        arrow(direction="up")

      .row
        machine(title="4台加料车" :info="info")
        .placeholder
        machine(title="1台保温浇筑炉" :info="info")
        arrow(direction="right")
        machine(title="1台静压造型机" :info="info")
        arrow(direction="right")
        arrow(direction="right")

      .row
        arrow(direction="down")
        .placeholder
        arrow(direction="up")
        .placeholder
        .placeholder
        .placeholder
        .placeholder

      div.row
        machine(title="4台电炉" :info="info")
        arrow(direction="right")
        machine(title="1台铁水转运车" :info="info")
        .placeholder
        .placeholder
        .placeholder
        .placeholder
    div
</template>

<script>
  import Machine from './Machine'
  import Arrow from './Arrow'

  export default {
    data () {
      return {
        info: {
          product: '#9527#',
          status: '开',
          team: '#9527#'
        }
      }
    },
    components: {
      Machine,
      Arrow
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .container
    display: flex
    flex-direction: column
  .row
    display: flex
    justify-content: space-around
    align-items: center
  .placeholder
    width: 130px
    height: 30px
  .de
</style>
