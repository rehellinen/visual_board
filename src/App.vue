<template lang="pug">
  #app
    Title
    BrokenLine
</template>

<script>
import BrokenLine from './components/BrokenLine'
import Title from './components/Title'

export default {
  components: {
    BrokenLine,
    Title
  }
}
</script>

<style scoped>
  @import "./assets/css/reset.css";
  #app {
    min-height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
