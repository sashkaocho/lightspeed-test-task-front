<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const storeId = "101560752";
const token = "public_eaBDuVmrse1hKZun4qaPF3LewugrnEgq";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `https://app.ecwid.com/api/v3/${storeId}/products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    products.value = response.data.items;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

onMounted(async () => {
  await fetchProducts();
  console.log("hello");
});
</script>

<template>
  <div>
    <h1>Products</h1>
  </div>
</template>
