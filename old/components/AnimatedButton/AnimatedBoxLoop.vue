<script setup>

import AnimatedButton from "@old/components/AnimatedButton/AnimatedButton.vue";
import {onMounted, onUnmounted, ref} from "vue";


const messages = [
  {message: 'Click me'},
  {message: 'Loading'},
  {message: 'Reservation ready! Lets go.'}
];

const transition = (callback = () => {
}) => {
  if (!document.startViewTransition) {
    return;
  }

  document.startViewTransition(callback);
}

const currentMessageIndex = ref(0)
let interval = null;

onMounted(() => {
  // const messageLastIndex = messages.length - 1;
  // interval = setInterval(() => {
  //   transition(() => {
  //     currentMessageIndex.value = currentMessageIndex.value < messageLastIndex ?
  //         (currentMessageIndex.value + 1) : 0
  //   })
  // }, 1000)

});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
});

</script>

<template>
  <div class="text-white">
    <AnimatedButton class="btn"> {{ messages[currentMessageIndex].message }}</AnimatedButton>
  </div>
</template>

<style>
:global(html)::view-transition-old(a-btn),
:global(html)::view-transition-new(a-btn) {
  width: 100%;
  height: 100%;
}

.btn {
  view-transition-name: a-btn
}
</style>
