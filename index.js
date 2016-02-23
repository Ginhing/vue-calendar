import Vue from 'vue'
import moment from 'moment'
import calendar from './src/main.vue'

Vue.config.debug = true

new Vue({
  el: '#demo',
  data: () => ({
    enable: false,
    dateString: moment().format('YYYY/MM/DD')
  }),
  methods: {
    toggle() {
      this.enable = !this.enable
    }
  },
  components: {
    calendar
  }
})