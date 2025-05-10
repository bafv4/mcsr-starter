import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/choose-dest/",
    name: "ChooseDestination",
    component: () => import("./views/ChooseDestination.vue"),
  },
  {
    path: "/graal/",
    name: "GraalInstallation",
    component: () => import("./views/GraalInstallation.vue"),
  },
  {
    path: "/err/:errtype",
    name: "Error",
    component: () => import("./views/Error.vue"),
    props: true,
  },
] as const;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;