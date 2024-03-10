<script setup>
import {animate, stagger, glide} from "motion";
import {onMounted} from "vue";


onMounted(() => {
  animate('.box',
      { x: 100 },
      { easing: glide({ velocity: -500 }), repeat: Infinity }
  );
});

</script>

<template>
  <div class="w-full h-full p-20 flex gap-2">
    <div class="w-[100px] h-[100px] box bg-red-700"></div>
    <div class="w-[100px] h-[100px] box bg-red-700"></div>
    <div class="w-[100px] h-[100px] box bg-red-700"></div>
    <div class="w-[100px] h-[100px] box bg-red-700"></div>
    <div class="w-[100px] h-[100px] box bg-red-700"></div>
  </div>
</template>

<style scoped>

</style>