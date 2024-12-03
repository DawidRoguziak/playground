<script setup>
import {animate, stagger, glide} from "motion";
import {onMounted, onUnmounted, reactive, ref} from "vue";
import ProductCard from "@old/components/ProductList/ProductCard.vue";

const product = {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

const mousePosition = reactive({
  x: 0,
  y: 0,
});

const readMousePosition = (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
}

const followCursor = ref(null);
const productBox = ref(null);
const handleMouseMove = () => {
  followCursor.value.style.left = `${mousePosition.x + 7}px`;
  followCursor.value.style.top = `${mousePosition.y + 13}px`;
};

const handleMouseEnter = () => {
  followCursor.value.classList.remove('hidden')
}

const handleMouseLeave = () => {
  followCursor.value.classList.add('hidden')
}

onMounted(() => {
  window.addEventListener('mousemove', readMousePosition)
});

onUnmounted(() => {
  window.removeEventListener('mousemove', readMousePosition)
})

</script>

<template>
  <div class="w-full h-full p-10">
    <div class="p-5 w-full mt-52">
      <ProductCard
          ref="productBox"
          class="w-[200px] custom-cursor"
          :product="product"
          @mousemove="handleMouseMove"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
      >
        <div ref="followCursor"
             class="follow-cursor fixed hidden bg-blue-500 py-1 px-2 rounded-2xl text-white border-black border-2">
          dasdasd
        </div>
      </ProductCard>
    </div>
  </div>
</template>

<style scoped>
.custom-cursor {
  cursor: url('/curor.svg'), auto;
  background-size: 10px;
}
</style>
