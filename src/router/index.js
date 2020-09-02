 import Vue from 'vue';
 import Router from 'vue-router';

 import Home from '@/view/home/Home'
 Vue.use(Router);

 export default new Router({
     routes: [{
         path: '/home',
         name: "Home",
         component: Home
     }]
 })