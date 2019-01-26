<template lang="pug">
  div.container
    // 上方四个图
    div.row
      div.one
        histogram(:id="1")
      div.two
        histogram(:id="2")
      div.three
        simple-card(title="当日计划产量目标", content="9999")
        simple-card(title="当日实际产量", content="9999")
        simple-card(title="当月计划产量目标", content="9999")
        simple-card(title="当月实际产量", content="9999")
</template>

<script>
  import Histogram from './Histogram'
  import SimpleCard from './SimpleCard'

  export default {
    components: {
      Histogram,
      SimpleCard
    }
  }
</script>

<style lang="sass" scoped>
  .container
    display: flex
    flex-direction: column
    min-width: 1300px
  .row
    display: flex
    justify-content: space-around
    .one
      width: 500px
    .two
      width: 650px
    .three
      display: flex
      flex-direction: column
      justify-content: space-between
  .de
</style>
