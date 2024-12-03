<script setup>

import {onMounted, ref} from "vue";
import SimplePaintMenu from "@old/components/SimplePaint/SimplePaintMenu.vue";

const canvasBoard = ref();


onMounted(() => {
  const ctx = canvasBoard.value.getContext('2d');
});

</script>

<template>
  <div class="flex gap-2 w-full h-full">
    <SimplePaintMenu class="absolute top-1 left-1 bottom-1" />
    <div class="drawing-board bg-white w-full h-full">
      <canvas ref="canvasBoard" class="w-full h-full"></canvas>
    </div>
  </div>
</template>

<style scoped>

</style>
