<script setup >
import products from '@/data-sources/products.json'
import ProductCard from "@/components/ProductList/ProductCard.vue";
</script>

<template>
  <div class="w-full h-full p-6">

    <div class="grid grid-flow-dense gap-7 grid-my-columns">
      <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>

  </div>
</template>

<style scoped>
.grid-my-columns {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));

  grid-auto-rows: 120px auto auto;
  container-type: inline-size;
}
</style>