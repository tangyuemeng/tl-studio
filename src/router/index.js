// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/views/HomePage.vue";
import SchedulePage from "../components/views/SchedulePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: SchedulePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
