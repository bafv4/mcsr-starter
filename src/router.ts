import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "window" */ "./views/Home.vue"),
  },
  {
    path: "/graal/",
    name: "GraalInstallation",
    component: () => import(/* webpackChunkName: "window" */ "./views/GraalInstallation.vue"),
  },
] as const;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;