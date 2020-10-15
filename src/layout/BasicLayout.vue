<template>
  <div class="basic-content">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible class="layoutSider">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-sub-menu v-for="(item,index) in $store.state.menuInlineData" :key="index">
            <span slot="title">
              <a-icon :type="item.iconTypes" />
              <span>{{item.titles}}</span>
            </span>
            <a-menu-item v-for="(item1,index1) in item.childs" :key="index1">
              <router-link :to="item1.routerLink">
                <a-icon :type="item1.icon" />
                <span>{{item1.title}}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <Header @collapsed="getCollapsed" />
        <a-layout-content
          :style="{ margin: '0', padding: '0', background: '#fff', minHeight: '280px' }"
        >
          <router-view>
            <Home />
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Header from "../components/Header";

export default {
  name: "BasicLayout",
  components: { Header, Home, Login },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    getCollapsed(msg) {
      this.collapsed = msg;
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
  text-align: left;
  width: 100px;
}

.layoutSider::-webkit-scrollbar {
  display: none;
}
</style>