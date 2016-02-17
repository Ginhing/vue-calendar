import Vue from 'vue'
import moment from 'moment'
import calendar from './src/main.vue'

new Vue({
  el: '#demo',
  data: () => ({
    dateString: moment().format('YYYY/MM/DD')
  }),
  components: {
    calendar
  }
})