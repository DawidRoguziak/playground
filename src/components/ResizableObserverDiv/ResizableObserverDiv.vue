<script setup>

import {computed, ref} from "vue";
import {throttle} from "lodash";
import useResizeObserver from "@/components/ResizableObserverDiv/useResizeObserver";
import data from "@/components/ResizableObserverDiv/elements.json"

const containerRef = ref(null);
const containerSize = ref(0);

const sizeOfElement = 50;
const sizeOfColumn = ref(sizeOfElement * .6);
const columnsCount = ref(10);
const showCounterElement = ref(true);
const maxElements = ref(300);
const counterAll = ref(200);

useResizeObserver(containerRef, throttle((entries) => {
  try {
    const entry = entries[0];
    const {width} = entry.contentRect;
    containerSize.value = width;

    if (containerSize.value <= 0) {
      columnsCount.value = 0;
      return;
    }

    const counted = Math.floor((containerSize.value - sizeOfColumn.value) / sizeOfColumn.value);
    console.log(counted)
    if (maxElements.value < counted) {
      columnsCount.value = maxElements.value;
    } else if (data.length < counted) {
      columnsCount.value = data.length;
    } else {
      columnsCount.value = counted;
    }

  } catch (e) {
    console.error(e);
  }
}, 1000));


const trimArray = computed(() => {
  if (data.length <= 0) {
    return [];
  }

  if (columnsCount.value <= 0) {
    return []
  }

  return data.slice(0, (columnsCount.value + (showCounterElement.value ? -1 : 0)));
});

const restOfElements = computed(() => {
  if (columnsCount.value <= 1 && showCounterElement.value) {
    return counterAll.value
  }

  return counterAll.value - columnsCount.value + (showCounterElement.value ? 1 : 0);
});

const calculatedStyles = computed(() => {
  return {
    'grid-template-columns': `repeat(${columnsCount.value ?? 1}, ${sizeOfColumn.value}px)`
  }
})

</script>

<template>
  <div ref="containerRef" class="w-full bg-red-700 h-[400px] ">
    <div class="grid grid-rows-1 "
         :style="calculatedStyles">
      <div v-for="(d, index) in trimArray" :key="d.id"
           class="bg-blue-500 border-2 border-black rounded-full w-[50px] h-[50px]">
        {{ index }}
      </div>
      <div v-if="showCounterElement"
           class="bg-blue-500 border-2 border-black rounded-full w-[50px] h-[50px]">
        +{{ restOfElements }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>