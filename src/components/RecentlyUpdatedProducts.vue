<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue"
import axios from "axios"
import { IProduct } from "../ts/product.types.ts"

const storeId = import.meta.env.VITE_STORE_ID
const token = import.meta.env.VITE_TOKEN

const products = ref<IProduct[]>([])
const numberOfProducts = ref<number>(8)
const selectedOrder = ref<string>("recently updated")

const displayedProducts = computed<IProduct[]>(() => {
  return products.value.slice(0, numberOfProducts.value)
})

async function fetchRecentlyUpdatedProducts(): Promise<void> {
  try {
    const response = await axios.get(
      `https://app.ecwid.com/api/v3/${storeId}/products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    products.value = response.data.items
    console.log(products.value)
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}

function orderBy(): void {
  switch (selectedOrder.value) {
    case "recently updated":
      products.value.sort((a, b) => b.updateTimestamp - a.updateTimestamp)
      break
    case "random":
      products.value = products.value.sort(() => Math.random() - 0.5)
      break
    case "name":
      products.value.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      break
  }
}

function isRecentlyUpdated(product): boolean {
  return product.updateTimestamp > product.createTimestamp
}

function goToProductPage(product): void {
  Ecwid.openPage("product", { id: product.id, slug_value: product.slug_value })
}

function addToCart(product): void {
  Ecwid.Cart.addProduct(product)
}

onMounted(async () => {
  await fetchRecentlyUpdatedProducts()
})

watch(selectedOrder, orderBy)
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center justify-between">
      <h3 class="text-center">Recently Updated Products</h3>
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2">
          <span>Number of products:</span>
          <select class="border rounded-md" v-model="numberOfProducts">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option selected value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="flex items-center gap-2">
          <span>OrderBy:</span>
          <select class="border rounded-md" v-model="selectedOrder">
            <option value="recently updated">Recently updated</option>
            <option value="random">Random</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <div
        v-for="product in displayedProducts"
        :key="product.id"
        class="flex flex-col gap-3.5"
      >
        <img
          @click.left="goToProductPage(product)"
          :src="product.imageUrl"
          :alt="product.name"
          class="cursor-pointer"
        />
        <button
          @click.left="addToCart(product)"
          class="btn btn-primary !bg-blue-700"
        >
          Add to cart
        </button>
        <div class="flex flex-col items-center">
          <h6
            @click.left="goToProductPage(product)"
            class="cursor-pointer text-center"
          >
            {{ product.name }}
          </h6>
          <h4>${{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
