<script setup>
import {reactive, ref} from "vue";

defineProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  buttonLabel: {
    type: String,
    default: ""
  }
});

const cardContainer = ref();
const overlay = ref();
const mousePosition = reactive({x: 0, y: 0});

function onMouseMove(event) {
  mousePosition.x = event.pageX - cardContainer.value.offsetLeft;
  mousePosition.y = event.pageY - cardContainer.value.offsetTop;
}


</script>

<template>
  <div ref="cardContainer"

       class=" p-3 rounded glowing-card text-white bg-black"
       @mousemove="onMouseMove"
  >


    <div class="w-full">
      {{ title }}
    </div>
    <div class="mt-2 w-full">
      {{ description }}
    </div>
    <button type="button" class="mt-4 w-full">
      {{ buttonLabel }}
    </button>
    <div ref="overlay" class="overlay"  :style="{'--x': mousePosition.x + 'px', '--y': mousePosition.y + 'px'}"></div>

  </div>
</template>

<style scoped>
.glowing-card {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  mask: radial-gradient(
  25rem 25rem at var(--x) var(--y),
  #000 1%,
  transparent 50%
  );
  will-change: mask;
  transition: .4s mask ease;
}


</style>