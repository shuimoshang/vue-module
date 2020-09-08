<template>
  <div>{{message}}</div>
</template>

<script>
// import BasicLayout  from '../../components/BasicLayout.vue';
// import Header from '../../components/Header.vue'
export default {
  name: "Home",
  // components: { BasicLayout, Header },
  data() {
    return {
      message: "home page",
    };
  },
};
</script>

<style lang="less" scoped>
// .content {
  // width: 100%;
  // height: 100%;
  // padding: 80px 0 0 240px;
// }
</style>