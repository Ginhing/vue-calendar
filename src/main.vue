<template>
  <div class="calendar">
    <h1>{{now.format('YYYY/MM/DD')}}</h1>
    <component :is="currentView"
    :date="now"
    :display="display"
    :week-text="weekText"
    class="panel"
    ></component>
  </div>
</template>

<script>
import moment from 'moment'
import days from './days.vue'
import months from './months.vue'
import years from './years.vue'

export default {
  props: {
    date: {
      type: moment().constructor,
      twoWay: true,
      default: () => moment()
    },
    weekText: {
      type: Array,
      default: () => ['日','一','二','三','四','五','六']
    },
  },
  data() {
    return {
      currentView: 'days',
      now: this.date.clone()
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
      this.date = this.now
    }
  },
  methods: {
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

<style lang="less" scoped>
.calendar {
  width: 400px;
}
.panel {
 display: flex;
 flex-wrap: wrap;
}
</style>