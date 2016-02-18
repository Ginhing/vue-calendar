<template>
  <div :class="classNames.panel + '-vertical'">
    <div v-for="y in years"
    :class="[classNames.year, classNames.box, active('year', y)]"
    @click="select(y)"
    >{{y}}</div>
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
  @import 'box.less';
}
.year {
  margin: 5px 0;
}
</style>

<script>
import {arr} from './utils'
export default {
  props: ['date', 'display', 'classNames', 'active'],
  data() {
    let size = 200
    let begin = this.date.year() - size / 2
    let years = arr(size).map((_, i) => begin + i)
    return {
      years
    }
  },
  attached() {
    let activeEle = this.$el.getElementsByClassName('active')[0]
    if (activeEle) {
      let offset = activeEle.offsetTop - this.$el.clientHeight / 2
      this.$el.scrollTop = offset
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