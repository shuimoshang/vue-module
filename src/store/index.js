import Vue from 'vue';
import Vuex from 'vuex';
import muneData from "./layoutData.js";
import purpleData from "./PurpleHomeData.js";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 存放状态
        layoutTF: true,
        menuInlineData: muneData.menuInlineData,
        muneHeaderData: muneData.muneHeaderData,
        purpleData,
    },
    getters: {
        // state的计算属性
    },
    mutations: {
        // 更改state中状态的逻辑，同步操作
    },
    actions: {
        // 提交mutation,异步操作
    },
    // 如果将store分成一个个的模块的话，则需要用到modules。
    // 然后在每一个module 中写state,geeters,mutations,actions等。
    modules: {
        // a:moduleA,
        // b:muduleB.
        // ...
    }
})

export default store;