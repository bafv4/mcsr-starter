import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
] as const;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;