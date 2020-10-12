import Vue from 'vue';
import Vuex from 'vuex';
import muneData from "./layoutData.js";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menuInlineData: muneData.menuInlineData,
        muneHeaderData: muneData.muneHeaderData,
    }
})

export default store;