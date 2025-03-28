// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/views/HomePage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: "ホーム" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 設定されたmeta.titleがある場合、それをドキュメントタイトルとして使用
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;