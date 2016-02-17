<template>
  <div class="calendar">
    <days class="panel" :date="now"></days>
  </div>
</template>

<script>
import moment from 'moment'
import days from './days.vue'
import months from './months.vue'
export default {
  data() {
    return {
      text: 'world',
      now: moment()
    }
  },
  components: {
    days,
    months
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