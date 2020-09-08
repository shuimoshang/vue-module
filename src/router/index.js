 import Vue from 'vue';
 import Router from 'vue-router';
 Vue.use(VueRouter);
 import Home from '@/view/home/Home';
 import Login from '@/view/login/Login';
 import VueRouter from 'vue-router';

 const routes = [{
     path: '/home',
     name: "Home",
     component: Home
 }, {
     path: '/login',
     name: "Login",
     component: Login
 }, {
     path: '/',
     name: "Home",
     component: Home
 }, ];

 const router = new VueRouter({ routes })

 export default router;