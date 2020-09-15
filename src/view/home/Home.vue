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
      message: "世人慌慌张张，不过图碎银几两，而这碎银几两，可解这世间万种慌张，保老人晚年安康，儿女入得学堂，柴米油盐五谷粮。",
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