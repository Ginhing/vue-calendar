<template>
  <div :class="classNames.panel + '-vertical'">
    <div :class="[classNames.year, classNames.box]" v-for="y in years"
    @click="select(y)">{{y}}</div>
  </div>
</template>

<style lang="less" scoped>
.panel-vertical {
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 300px;
  overflow-y: auto;
}
.box {
  text-align: center;

  &.year {
    margin: 5px 0;
  }
}
</style>

<script>
import {arr} from './utils'
export default {
  props: ['date', 'display', 'classNames'],
  data() {
    let size = 200
    let begin = this.date.year() - size / 2
    let years = arr(size).map((_, i) => begin + i)
    return {
      years
    }
  },
  methods: {
    select(year) {
      this.$dispatch('year', year)
      this.display('months')
    }
  }
}
</script>