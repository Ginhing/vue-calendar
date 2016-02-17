<template>
  <div :class="classNames.root">
    <input :class="classNames.input" type="text"
    v-model="date" @keydown.stop.prevent @click="show">
    <component :class="classNames.panel" :is="currentView"
    :date="now"
    :display="display"
    :week-text="weekText"
    :month-text="monthText"
    :class-names="classNames"
    ></component>
  </div>
</template>

<style lang="less" scoped>
.calendar {
  width: 400px;
}
.panel {
 display: flex;
 flex-wrap: wrap;
}
</style>

<script>
import moment from 'moment'
import days from './days.vue'
import months from './months.vue'
import years from './years.vue'

export default {
  props: {
    format: {
      type: String,
      default: () => 'YYYY/MM/DD'
    },
    date: {
      type: String,
      twoWay: true,
      required: true
    },
    classNames: {
      type: Object,
      default: () => ({
        root: 'calendar',
        input: 'calendar-input',
        panel: 'panel',
        box: 'box',
        bar: 'bar',
        day: 'day',
        month: 'month',
        year: 'year'
      })
    },
    weekText: {
      type: Array,
      default: () => ['日','一','二','三','四','五','六']
    },
    monthText: {
      type: Array,
      default: () => ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    }
  },
  data() {
    return {
      currentView: null,
      now: moment(this.date, this.format)
    }
  },
  events: {
    year(val) {
      this.now = this.now.clone().year(val)
    },
    month(val) {
      this.now = this.now.clone().month(val)
    },
    day(val) {
      this.now = this.now.clone().date(val)
      this.date = this.now.format(this.format)
    }
  },
  methods: {
    show() {
      this.currentView = 'days'
    },
    display(viewName) {
      this.currentView = viewName
    }
  },
  components: {
    days,
    months,
    years
  }
}
</script>