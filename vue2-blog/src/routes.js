import { createRouter} from "vue-router";

import aboutPage from "./components/pages/about";
import SettingsPage from './components/pages/Settings';
import HomePage from './components/pages/home';
import examplesPage from './components/pages/examples';
import userList from './components/userList';
import pageNotFound from './components/pages/404Page';

const routes = [
  {
    name: "About",
    path: "/about",
    component: aboutPage,
  },
  {
    name: "home",
    path: "/home",
    component: HomePage,
  },
  {
    name: "settings",
    path: "/settings",
    component: SettingsPage,
  },
  {
    name: "vue-example",
    path: "/vue-examples",
    component: examplesPage,
  },
  {
    name: "user",
    path: "/user-list/:id",
    component: userList,
  },
  {
    name: "404",
    path: "*",
    component: pageNotFound,
  },
];

const router = createRouter({
//   history: createWebHistory(),
  routes,
});

export default router;
