 import Vue from 'vue';
 import Router from 'vue-router';
 Vue.use(VueRouter);
 import Home from '@/view/Home';
 import Login from '@/view/Login';
 import PurpleHome from '@/view/PurpleHome';
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
     path: '/purpleHome',
     name: "PurpleHome",
     component: PurpleHome
 }, {
     path: '/',
     name: "Login",
     component: Login
 }, ];

 const router = new VueRouter({ routes })

 export default router;