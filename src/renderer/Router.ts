import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@renderer/vue/pages/Home.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
] as const;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;