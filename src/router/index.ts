import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/store" },
    {
      path: "/store",
      name: "store",
      component: () => import("@/views/EcwidStoreView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/SettingsView.vue"),
    },
  ],
})

export default router
