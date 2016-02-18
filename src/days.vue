<template>
  <div>
    <div :class="classNames.bar">
      <span @click="next(-1)">&lt;</span>
      <span @click="display('years')">{{date.format('YYYY')}}</span>
      <span @click="display('months')">{{date.format('MM')}}</span>
      <span @click="next(1)">&gt;</span>
    </div>
    <div v-for="val in weekText" unhover
    :class="[classNames.day, classNames.box]"
    >{{val}}</div>
    <div v-for="day in days" track-by="$index"
    :class="[classNames.day, classNames.box, active('day', day)]"
    :unhover="!day"
    @click="select(day)">{{day}}</div>
  </div>
</template>

<style lang="less" scoped>
.bar {
  flex-basis: 100%;
  text-align: center;
}
.box {
  @import 'box.less';
}
.day {
  flex-basis: 1/7 * 100%;
  margin: 5px 0;
}
</style>

<script>
import {arr} from './utils'

export default {
  props: ['weekText', 'date', 'display', 'classNames', 'active'],
  computed: {
    days() {
      let lastDay = this.date.daysInMonth()
      let days = arr(lastDay).map((v,i) => i+1)
      let paddingLeft = arr(this.date.clone().startOf('month').day()).map(v => '')
      return [].concat(paddingLeft, days)
    }
  },
  methods: {
    ifActive(day) {
      return this.date.date() === day ? this.classNames.active : ''
    },
    select(day) {
      this.$dispatch('day', day)
    },
    next(step) {
      this.$dispatch('month', this.date.month() + step)
    }
  }
}
</script>