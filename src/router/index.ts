import { createRouter, createWebHistory } from "vue-router"
import EcwidStoreVIew from "../views/EcwidStoreVIew.vue"
import SettingsView from "../views/SettingsView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/store" },
    {
      path: "/store",
      name: "store",
      component: () => EcwidStoreVIew,
    },
    {
      path: "/settings",
      name: "settings",
      component: () => SettingsView,
    },
  ],
})

export default router
