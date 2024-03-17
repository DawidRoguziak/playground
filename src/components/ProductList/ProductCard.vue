<script setup>
import {formatCurrency} from "@/composables/formatCurrency";
import {ref} from "vue";

defineProps({
  product: {
    type: Object,
    default: () => ({})
  }
});

const {format} = formatCurrency();
const selfRef = ref(null);

defineExpose({
  selfRef
})
</script>

<template>
  <div ref="selfRef" class="product-shadow bg-white grid grid-rows-subgrid row-span-3 gap-1" :data-product-id="product.id">
    <img class="object-cover w-full h-full" :src="product.image">
    <h3 class="p-2 text-sm   clip-text-size" >
      {{ product.title }}
    </h3>
    <div class="p-2 flex justify-between center">
      {{ format(product.price) }}
      <button type="button" class="border bg-amber-400 rounded p-1" >
        Buy
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.product-shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>