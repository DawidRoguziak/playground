<script setup>
import {animate, stagger, glide} from "motion";
import {onMounted, onUnmounted, reactive, ref} from "vue";
import ProductCard from "@/components/ProductList/ProductCard.vue";
import CardWithCursor from "@/components/MotionJs/CardWithCursor.vue";
import ResizableObserverDiv from "@/components/ResizableObserverDiv/ResizableObserverDiv.vue";

onMounted(() => {
  animate('.box',
      {x: [0, -200, 0]},
      {easing: glide({velocity: -500}), repeat: Infinity}
  );

  animate('.t1',
      {y: [100, 0], opacity: [0, 1]},
      {
        easing: 'ease'
      })

});

onUnmounted(() => {

})

</script>

<template>
  <div class="w-full h-full p-10">
    <div class="bg-blue-500 w-[500px] h-[200px] t1">

    </div>
    <div class="w-full">
      <ResizableObserverDiv ></ResizableObserverDiv>
    </div>
     <CardWithCursor/>


    <div class="flex gap-2">
      <div class="w-[100px] h-[100px] box bg-red-700"></div>
      <div class="w-[100px] h-[100px] box bg-red-700"></div>
      <div class="w-[100px] h-[100px] box bg-red-700"></div>
      <div class="w-[100px] h-[100px] box bg-red-700"></div>
      <div class="w-[100px] h-[100px] box bg-red-700"></div>
    </div>

    <div>

    </div>
  </div>
</template>

<style scoped>
.custom-cursor {
  cursor: url('/curor.svg'), auto;
  background-size: 10px;
}
</style>