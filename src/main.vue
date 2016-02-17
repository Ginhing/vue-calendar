<template>
  <div class="calendar">
    <days class="panel" :date="now"></days>
    <months class="panel" :date="now"></months>
    <years class="panel" :date="now"></years>
  </div>
</template>

<script>
import moment from 'moment'
import days from './days.vue'
import months from './months.vue'
import years from './years.vue'

export default {
  data() {
    return {
      text: 'world',
      now: moment()
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