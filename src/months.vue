<template>
  <div>
    <div :class="[classNames.month, classNames.box]" v-for="(index, m) in monthText"
    @click="select(index)"
    >{{m}}</div>
  </div>
</template>

<style lang="less" scoped>
.box {
  text-align: center;

  &.month {
    flex-basis: 1/4 * 100%;
    margin: 5px 0;
  }
}
</style>

<script>
export default {
  props: ['monthText', 'date', 'display', 'classNames'],
  methods: {
    select(month) {
      this.$dispatch('month', month)
      this.display('days')
    }
  }
}
</script>