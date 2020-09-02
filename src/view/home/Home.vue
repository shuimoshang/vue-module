<template>
  <div class="content">
    <BasicLayout />
    <a-button type="primary">hello world</a-button>
    <a-icon type="home" />
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
import  BasicLayout  from '../../components/BasicLayout.vue';
export default {
  name: "Home",
  components: { BasicLayout ,Button},
  data() {
    return {
      message: "22222",
    };
  },
};
</script>

<style lang="less" scoped>
.content {
//   background-color: red;
//   width: 100px;
//   height: 100px;
}
</style>