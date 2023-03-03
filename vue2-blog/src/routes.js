
import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
// import {  } from "vue-router";

import Home from "./components/pages/home.vue";
import about from "./components/pages/about.vue";
import Settings from "./components/pages/Settings.vue";
import examplesPage from "./components/pages/examples.vue";
import pageNotFound from './components/pages/404Page.vue';
import userList from './components/userList.vue';

const routes= [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: about
    },
    {
        name: 'Settings',
        path: '/settings',
        component: Settings
    },
    {
        name: 'Vue_Example',
        path: '/vue-examples',
        component: examplesPage
    },
    {
        name: '404',
        path: '/',
        component: pageNotFound
    },
    {
        name: 'userList',
        path: '/user/:id',
        component: userList
    },
];

const router = new VueRouter({
    routes
});

export default router;