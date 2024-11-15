<script setup lang="ts">
import { h, onMounted, render } from "vue"
import { useRouter } from "vue-router"
import RecentlyUpdatedProductsWidget from "@/components/RecentlyUpdatedProductsWidget.vue"

const router = useRouter()

function addWidgetToStoreCartView() {
  const cartContainer = document.querySelector(".ec-cart__body")
  const recentlyUpdatedProductsDiv = document.querySelector(
    "#recently-updated-products",
  )

  if (cartContainer && !recentlyUpdatedProductsDiv) {
    const settings = localStorage.getItem("isWidgetEnabled")

    if (settings === "enabled") {
      const vueMountPoint = document.createElement("div")
      vueMountPoint.id = "recently-updated-products"

      cartContainer.appendChild(vueMountPoint)

      render(h(RecentlyUpdatedProductsWidget), vueMountPoint)
    }
  }
}

onMounted(() => {
  xProductBrowser(`id=my-store-${import.meta.env.VITE_EDWID_STORE_ID}`)

  Ecwid.OnPageLoaded.add((page: EcwidPage): void => {
    if (page.type === "CART") {
      addWidgetToStoreCartView()
    }
  })
})
</script>

<template>
  <div id="my-store-101560752"></div>
  <div class="flex justify-center pb-8">
    <button
      class="btn btn-default"
      @click.left="router.push({ path: '/settings' })"
    >
      Widget Settings
    </button>
  </div>
</template>
