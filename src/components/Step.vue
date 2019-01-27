<template lang="pug">
  el-card
    div.container
      div.row
        machine(title="自动包装机" :info="info")
        .arrow-container
          .arrow.arrow-left
          .line
        machine(title="自动喷漆室" :info="info")
        .arrow-container
          .arrow.arrow-left
          .line
        machine(title="自动打滑机" :info="info")
        .arrow-container
          .arrow.arrow-left
          .line
        machine(title="辊道抛丸机" :info="info" :danger="true")

      .row
        .placeholder

      div.row

        machine(title="1台电磁吊" :info="info" :danger="true")
        .placeholder
        .placeholder
        .placeholder
        machine(title="2台混砂机" :info="info" :danger="true")
        .placeholder
        .down-arrow-container
          .arrow.up-arrow
          .line

      .row
        .down-arrow-container
          .line
          .arrow
        .placeholder
        .placeholder
        .placeholder
        .down-arrow-container
          .line
          .arrow
        .placeholder
        .down-arrow-container
          .arrow.up-arrow
          .line

      div.row
        machine(title="4台加料车" :info="info")
        .placeholder
        machine(title="1台保温浇筑炉" :info="info")
        .arrow-container
          .line
          .arrow
        machine(title="1台静压造型机" :info="info")
        .arrow-container
          .line
          .arrow
        .arrow-container
          .line
          .arrow

      .row
        .down-arrow-container
          .line
          .arrow
        .placeholder
        .down-arrow-container
          .arrow.up-arrow
          .line
        .placeholder
        .placeholder
        .placeholder
        .placeholder

      div.row
        machine(title="4台电炉" :info="info")
        .arrow-container
          .line
          .arrow
        machine(title="1台铁水转运车" :info="info")
        .placeholder
        .placeholder
        .placeholder
        .placeholder
    div
</template>

<script>
  import Machine from './Machine'
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
      Machine
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
  .down-arrow-container
    width: 130px
    height: 85px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    .line
      background-color: black
      width: 1px
      height: 40px
    .arrow
      width: 10px
      height: 10px
      border-top: 1px solid black
      border-right: 1px solid black
      transform: rotate(135deg)
    .arrow.up-arrow
      transform: rotate(-45deg)

  .arrow-container
    width: 130px
    display: flex
    align-items: center
    .line
      background-color: black
      width: 80px
      height: 1px
    .arrow
      width: 10px
      height: 10px
      border-top: 1px solid black
      border-right: 1px solid black
      transform: rotate(45deg)
    .arrow.arrow-left
      transform: rotate(-135deg)
  .placeholder
    width: 130px
    height: 30px
  .de
</style>
