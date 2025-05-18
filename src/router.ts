import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/dest/",
    name: "ChooseDestination",
    component: () => import("./views/ChooseDestination.vue"),
  },
  {
    path: "/env/",
    name: "Env",
    component: () => import("./views/EnvInstallation.vue"),
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