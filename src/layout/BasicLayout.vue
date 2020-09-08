<template>
  <div class="basic-content">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible class="layoutSider">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-sub-menu v-for="(item,index) in menuInlineData" :key="index">
            <span slot="title">
              <a-icon :type="item.iconTypes" />
              <span>{{item.titles}}</span>
            </span>
            <a-menu-item v-for="(item1,index1) in item.childs" :key="index1">
              <router-link :to="item.routerLink">
                <a-icon :type="item1.icon" />
                <span>{{item1.title}}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="layoutHeader">
          <a-menu mode="horizontal">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
            <a-menu-item v-for="(item,index) in muneHeaderData" :key="index">{{item}}</a-menu-item>
          </a-menu>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view>
              <Home />
              <Login />
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Home from "../view/home/Home.vue";
import Login from "../view/login/Login.vue";
export default {
  name: "BasicLayout",
  components: { Home, Login },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      current: ["mail"],
      menuInlineData: [
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/login",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
        {
          titles: "菜单",
          iconTypes: "mail",
          routerLink: "/home",
          childs: [
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
            { title: "子菜单项", icon: "pie-chart" },
          ],
        },
      ],
      muneHeaderData: [
        "菜单项",
        "菜单项",
        "菜单项",
        "菜单项",
        "菜单项",
        "菜单项",
        "菜单项",
        "菜单项",
        "菜单项",
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      //   34000 + 10000 + 87000
    },
  },
};
</script>

<style lang="less" scoped>
.basic-content {
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.layoutHeader {
  background: #fff;
  padding: 0;
  text-align: left;
  padding-left: 20px;
}

.layoutSider {
  text-align: center;
  height: 100vh;
  overflow-y: scroll;
}

.layoutSider::-webkit-scrollbar {
  display: none;
}
</style>