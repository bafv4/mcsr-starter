import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@renderer/vue/pages/Home.vue";
import Setup from "./vue/pages/Setup.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/setup/",
    name: "Setup",
    component: Setup,
  },
] as const;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;