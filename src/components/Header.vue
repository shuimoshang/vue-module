<template>
  <div class="content">
    <a-layout-header class="layoutHeader">
      <a-menu mode="horizontal">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="setCollapsed"
        />
        <a-menu-item v-for="(item,index) in muneData" :key="index">{{item}}</a-menu-item>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["muneData"],
  data() {
    return {
      meassage: "header menu",
      collapsed: false,
    };
  },
  methods: {
    setCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit("collapsed", this.collapsed);
      //   this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="less" scoped>
.layoutHeader {
  background: #fff;
  padding: 0;
  text-align: left;
  padding-left: 20px;
}
</style>