<template>
  <div>
    <div class="box" v-for="val in weekText">{{val}}</div>
    <div class="box clickable"
    v-for="day in days" track-by="$index"
    @click="select(day)">{{day}}</div>
  </div>
</template>

<style lang="less" scoped>
.box {
  flex-basis: 1/7 * 100%;
  margin: 5px 0;
  text-align: center;

  &.clickable:hover {
    background-color: cyan;
  }
}
</style>

<script>
import {arr} from './utils'
export default {
  props: {
    weekText: {
      type: Array,
      default: () => ['日','一','二','三','四','五','六'],
      validator(val) {
        return val.length === 7
      }
    },
    date: true
  },
  data: () => ({
    days: []
  }),
  ready() {
    this.days = this.getDays(this.date)
  },
  methods: {
    getDays(date) {
      let lastDay = date.clone().endOf('month').date()
      let days = arr(lastDay).map((v,i) => i+1)
      let paddingLeft = arr(date.clone().startOf('month').day()).map(v => '')
      return [].concat(paddingLeft, days)
    },
    select(day) {
      console.log(day)
    }
  }
}
</script>