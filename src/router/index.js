import { createWebHistory, createRouter } from "vue-router";
import Home from "../App.vue"
import Navigator from "../views/Navigator.vue";
import Algoritmi from "../views/Algoritmi.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/navigator",
    name: "Navigator",
    component: Navigator,
  },
  {
    path: "/algoritmi",
    name: "Algoritmi",
    component: Algoritmi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;