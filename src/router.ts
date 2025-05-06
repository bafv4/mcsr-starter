import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;