<template>
  <div>
    <div :class="classNames.bar">
      <span @click="next(-1)">&lt;</span>
      <span @click="display('years')">{{displayDate.format('YYYY')}}</span>
      <span @click="display('months')">{{displayDate.format('MM')}}</span>
      <span @click="next(1)">&gt;</span>
    </div>
    <div :class="[classNames.day, classNames.box]"
    v-for="val in weekText" unhover>{{val}}</div>
    <div :class="[classNames.day, classNames.box]"
    v-for="day in days" track-by="$index"
    @click="select(day)">{{day}}</div>
  </div>
</template>

<style lang="less" scoped>
.bar {
  flex-basis: 100%;
  text-align: center;
}
.box {
  text-align: center;
  flex-basis: 1/7 * 100%;

  &.day {
    margin: 5px 0;

    &:hover:not([unhover]) {
      background-color: red;
    }
  }
}
</style>

<script>
import moment from 'moment'
import {arr} from './utils'

export default {
  props: ['weekText', 'date', 'display', 'classNames'],
  data() {
    return {
      displayDate: this.date.clone()
    }
  },
  computed: {
    days() {
      let date = this.displayDate
      let lastDay = date.clone().endOf('month').date()
      let days = arr(lastDay).map((v,i) => i+1)
      let paddingLeft = arr(date.clone().startOf('month').day()).map(v => '')
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
      this.displayDate = this.displayDate.clone().add(step, 'month')
    }
  }
}
</script>