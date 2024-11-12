import "./style.css"
import { createApp } from "vue"
import App from "./App.vue"

Ecwid.OnPageLoaded.add((page: EcwidPage): void => {
  if (page.type === "CART") {
    const cartContainer = document.querySelector(".ec-store__content-wrapper")

    if (cartContainer) {
      const vueMountPoint = document.createElement("div")

      vueMountPoint.id = "app"
      cartContainer.insertBefore(vueMountPoint, cartContainer.children[1])

      const app = createApp(App)
      app.mount("#app")
    }
  }
})
