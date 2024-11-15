<script setup lang="ts">
import { IProduct } from "@/ts/product.types.ts"

defineProps<{
  product: IProduct
}>()
</script>

<template>
  <div class="list-element list-element--normal list-element--has-hover">
    <div class="list-element__toggle">
      <input
        type="checkbox"
        value="on"
        v-model="product.selected"
        :id="product.id"
        tabindex="0"
        class="list-element__toggle-checkbox"
      />
      <label :for="product.id" class="list-element__toggle-label"></label>
    </div>
    <div class="list-element__image">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>
    <div class="list-element__content">
      <div class="list-element__info">
        <div class="list-element__header">
          <div class="list-element__main-info">
            <div class="list-element__title">
              <span>{{ product.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list-element__actions">
        <div class="list-element__price">${{ product.price }}</div>
      </div>
    </div>
  </div>
</template>
