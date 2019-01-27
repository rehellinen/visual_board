<template lang="pug">
  div.header-container
    p.title Visual Board
    p.author powered by rehellinen
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/base"
  .header-container
    display: flex
    align-items: baseline
    margin-bottom: 25px
    background-color: $blue-color
    width: 100%
    height: 85px
    p
      color: white
      margin-left: 10px
    .title
      font-size: 25px
      margin-left: 30px
    .author
      font-size: 15px
  .de
</style>
