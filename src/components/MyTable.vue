<template lang="pug">
  div
    el-table(:data="data")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
      el-table-column(property="date" label="日期")
</template>

<script>
  export default {
    props: {
      property: {
        type: Array,
        default: () => []
      },
      data: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
