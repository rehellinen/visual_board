<template lang="pug">
  .line-container
    #line

</template>

<script>
import {LineData} from "../d3/data"

export default {
  mounted () {
    new rehellinen.Lines().drawArea(LineData)
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
  .line-container
    width: 80%
    margin-top: 10px
    #line
      background-color: white
      width: 500px
      height: 200px
      border: 1px solid #e0e3ec
</style>
