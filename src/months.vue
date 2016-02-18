<template>
  <div>
    <div v-for="(index, m) in monthText"
    :class="[classNames.month, classNames.box, active('month', index)]"
    @click="select(index)"
    >{{m}}</div>
  </div>
</template>

<style lang="less" scoped>
.box {
  @import 'common.less';

  &.month {
    flex-basis: 1/4 * 100%;
    margin: 5px 0;
  }
}
</style>

<script>
export default {
  props: ['monthText', 'date', 'display', 'classNames', 'active'],
  methods: {
    select(month) {
      this.$dispatch('month', month)
      this.display('days')
    }
  }
}
</script>