import { createWebHashHistory, createRouter} from "vue-router";

import Home from "./components/pages/home.vue";
import about from "./components/pages/about.vue";
import Settings from "./components/pages/Settings.vue";
import examplesPage from "./components/pages/examples.vue";

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
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;