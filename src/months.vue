<template>
  <div>
    <div class="box" v-for="(index, m) in monthText"
    @click="select(index)"
    >{{m}}</div>
  </div>
</template>

<style lang="less" scoped>
.box {
  flex-basis: 1/4 * 100%;
  text-align: center;
  margin: 5px 0;

  &:hover {
    background-color: red;
  }
}
</style>

<script>
export default {
  props: {
    monthText: {
      type: Array,
      default: () => ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    date: true
  },
  data: () => ({
  }),
  methods: {
    select(month) {
      console.log(month)
    }
  }
}
</script>