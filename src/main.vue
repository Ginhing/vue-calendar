<template>
  <div :class="classNames.root">
    <input :class="classNames.input" type="text"
    v-model="date" @keydown.stop.prevent @click="show">
    <component :class="classNames.panel" :is="currentView"
    keep-alive
    transition="fade"
    transition-mode="out-in"
    :date="now"
    :display="display"
    :active="active"
    :week-text="weekText"
    :month-text="monthText"
    :class-names="classNames"
    ></component>
  </div>
</template>

<style lang="less" scoped>
.calendar {
  display: inline-block;
  width: 200px;
}
.panel {
 display: flex;
 flex-wrap: wrap;
 text-align: center;
}
.fade-transition {
  transition: opacity .15s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
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
      coerce(val) {
        let preset = {
          root: 'calendar',
          input: 'calendar-input',
          panel: 'panel',
          box: 'box',
          bar: 'bar',
          day: 'day',
          month: 'month',
          year: 'year'
        }
        return {...preset, ...val}
      }
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
    let now = moment(this.date, this.format)
    return {
      now,
      currentView: null,
      dateCache: now.clone(),
      blur: e => !this.$el.contains(e.target) && this.hide()
    }
  },
  ready() {
    window.addEventListener('click', this.blur)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.blur)
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
      this.date = this.dump()
    }
  },
  methods: {
    show() {
      this.currentView = 'days'
    },
    display(viewName) {
      this.currentView = viewName
    },
    hide() {
      this.currentView = null
    },
    active(key, val) {
      let {years: Y, months: M, date: D} = this.dateCache.toObject()
      let {years, months} = this.now.toObject()
      let test = {
        year: val === Y,
        month: years === Y && val === M,
        day: years === Y && months === M && val === D,
      }
      return test[key] ? 'active' : ''
    },
    dump() {
      this.dateCache = this.now.clone()
      return this.dateCache.format(this.format)
    }
  },
  components: {
    days,
    months,
    years
  }
}
</script>