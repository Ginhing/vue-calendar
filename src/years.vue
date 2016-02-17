<template>
  <div class="panel-vertical">
    <div class="box" v-for="y in years" @click="select(y)">{{y}}</div>
  </div>
</template>

<style lang="less" scoped>
.panel-vertical {
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 300px;
  overflow-y: auto;

  .box {
    text-align: center;
  }
}
</style>

<script>
import {arr} from './utils'
export default {
  props: {
    date: true
  },
  data() {
    let begin = this.date.year() - 50
    let years = arr(100).map((_, i) => begin + i)
    return {
      years
    }
  },
  methods: {
    select(year) {
      console.log(year)
    }
  }
}
</script>