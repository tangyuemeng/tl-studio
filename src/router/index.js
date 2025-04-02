// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/views/HomePage.vue";
import SchedulePage from "../components/views/SchedulePage.vue";
import AboutPage from "../components/views/AboutPage.vue";
import ContactPage from "../components/views/ContactPage.vue";
import ClassPage from "../components/views/ClassPage.vue";
import FAQPage from "../components/views/FAQPage.vue"

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
  {
    path: "/aboutus",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/class",
    name: "Class",
    component: ClassPage,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
