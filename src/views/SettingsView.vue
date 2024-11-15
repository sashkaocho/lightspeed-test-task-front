<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue"
import { useRouter } from "vue-router"
import SelectableProductList from "@/components/settings/SelectableProductList.vue"
import SettingsCard from "@/components/settings/SettingsCard.vue"
import {
  exportProductsToCSVFormat,
  fetchRecentlyUpdatedProducts,
} from "@/helpers/products.ts"
import { IProduct } from "@/ts/product.types.ts"

const router = useRouter()

const products = ref<IProduct[]>([])

const isWidgetEnabled = ref<boolean>(true)
const showedProductsLength = ref<number>(8)

watch(showedProductsLength, (value) => {
  localStorage.setItem("showedProductsLength", value)
})

watch(isWidgetEnabled, (value) => {
  const state = value ? "enabled" : "disabled"
  localStorage.setItem("isWidgetEnabled", state)
})

async function exportSelectedProducts(): Promise<void> {
  await exportProductsToCSVFormat(
    products.value.filter((product) => product.selected),
  )
}

onMounted(async () => {
  products.value = await fetchRecentlyUpdatedProducts()

  const storedWidgetState = localStorage.getItem("isWidgetEnabled")
  if (storedWidgetState === "enabled") {
    isWidgetEnabled.value = true
  } else if (storedWidgetState === "disabled") {
    isWidgetEnabled.value = false
  }

  const productsLength = localStorage.getItem("showedProductsLength")
  if (!productsLength) {
    localStorage.setItem("showedProductsLength", showedProductsLength.value)
  } else {
    showedProductsLength.value = productsLength as number
  }
})

onUnmounted(() => {
  // This will clear OnPageLoaded listener and restart it. Ecwid doesn't have OnPageLoaded.remove().
  location.reload()
})
</script>

<template>
  <main class="px-12 pt-4">
    <button class="btn btn-muted-accent mb-3" @click="router.push('/store')">
      Store
    </button>

    <SettingsCard
      v-model:isWidgetEnabled="isWidgetEnabled"
      v-model:showedProductsLength="showedProductsLength"
    />

    <div class="toolbar">
      <button
        type="button"
        class="btn btn-primary btn-medium"
        @click="exportSelectedProducts"
      >
        <span class="gwt-InlineLabel">Export selected products</span>
      </button>
    </div>

    <div class="filtered-list">
      <div class="filtered-list__body">
        <div class="filtered-list__items long-list">
          <SelectableProductList
            :product="product"
            v-for="product in products"
            :key="product.id"
          />
        </div>
      </div>
    </div>
  </main>
</template>
