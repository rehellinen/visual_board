<template lang="pug">
  div.wrapper
    my-header
    div.container
      step
      div.row
        div.one
          histogram(title="每月产品产量折线图" :id="1")
        div.two
          histogram(title="每月产品目标达成折线图"
          :width="600" :id="2")
        div.three
          simple-card(title="当日计划产量目标", content="9999")
          simple-card(title="当日实际产量", content="9999")
          simple-card(title="当月计划产量目标", content="9999")
          simple-card(title="当月实际产量", content="9999")
</template>

<script>
  import Histogram from './Histogram'
  import SimpleCard from './SimpleCard'
  import Step from './Step'
  import MyHeader from './MyHeader'

  export default {
    components: {
      Histogram,
      SimpleCard,
      Step,
      MyHeader
    }
  }
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    flex-direction: column
    align-items: center
    background-color: #f9f9f9
  .container
    display: flex
    flex-direction: column
    min-width: 1300px
    max-width: 1300px
  .row
    display: flex
    justify-content: space-between
    margin-top: 20px
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
