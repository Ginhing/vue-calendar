<template>
  <div>
    <div class="bar">
      <span class="prev-item" @click="next(-1)">&lt;</span>
      <span @click="display('years')">{{displayDate.format('YYYY')}}</span>
      <span @click="display('months')">{{displayDate.format('MM')}}</span>
      <span class="next-item" @click="next(1)">&gt;</span>
    </div>
    <div class="box" v-for="val in weekText">{{val}}</div>
    <div class="box clickable"
    :class="{active: date.date() === day}"
    v-for="day in days" track-by="$index"
    @click="select(day)">{{day}}</div>
  </div>
</template>

<style lang="less" scoped>
.bar {
  flex-basis: 100%;
  text-align: center;
  font-size: 2em;
}
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
import moment from 'moment'
import {arr} from './utils'

export default {
  props: {
    weekText: true,
    date: {
      validator(val) {
        return moment.isMoment(val)
      },
      required: true
    },
    display: {
      type: Function,
      required: true
    }
  },
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
    select(day) {
      this.$dispatch('day', day)
    },
    next(step) {
      this.displayDate = this.displayDate.clone().add(step, 'month')
    }
  }
}
</script>