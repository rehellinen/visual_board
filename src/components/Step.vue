<template lang="pug">
  el-card
    div.container
      div.row
        .machine
          p 自动包装机
        .arrow-container
          .arrow.arrow-left
          .line
        .machine
          p 自动喷漆室
        .arrow-container
          .arrow.arrow-left
          .line
        .machine
          p 自动打滑机
        .arrow-container
          .arrow.arrow-left
          .line
        .machine
          p 辊道抛丸机

      .row
        .placeholder

      div.row
        div.machine
          p 1台电磁吊
        .placeholder
        .placeholder
        .placeholder
        div.machine
          p 2台混砂机
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
        div.machine
          p 4台加料车
        .placeholder
        div.machine
          p 1台保温浇筑炉
        .arrow-container
          .line
          .arrow
        div.machine
          p 1台静压造型机
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
        div.machine
          p 4台电炉
        .arrow-container
          .line
          .arrow
        div.machine
          p 1台铁水转运车
        .placeholder
        .placeholder
        .placeholder
        .placeholder
    div
</template>

<script>
  export default {
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
  .machine
    display: flex
    flex-direction: column
    align-items: center
    width: 130px
    border: 1px solid $border-one
    border-radius: 5px
  .placeholder
    width: 130px
    height: 30px
  .de
</style>
