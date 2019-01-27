<template lang="pug">
  .wrapper
    .arrow-container(v-if="direction === 'left'")
      .arrow.arrow-left
      .line
    .arrow-container(v-if="direction === 'right'")
      .line
      .arrow
    .down-arrow-container(v-if="direction === 'up'")
      .arrow.up-arrow
      .line
    .down-arrow-container(v-if="direction === 'down'")
      .line
      .arrow
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'right'
      }
    }
  }
</script>

<style lang="sass" scoped>
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
      height: 35px
    .arrow
      width: 10px
      height: 10px
      border-top: 1px solid black
      border-right: 1px solid black
      transform: rotate(135deg)
    .arrow.up-arrow
      transform: rotate(-45deg)


</style>
