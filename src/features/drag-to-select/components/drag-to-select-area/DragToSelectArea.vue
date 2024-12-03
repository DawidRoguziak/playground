<script setup lang="ts">
import {ref, useId} from "vue";
import type {AreaItem} from "@/features/drag-to-select/components/drag-to-select-area/types.ts";
import {useDragToSelectAreaSelect} from "@/features/drag-to-select/components/composables/useDragToSelectAreaSelect.ts";

const items = ref<AreaItem[]>(Array.from({length: 30}, (_, i) => ({text: (i + 1) + '', id: useId()})));

const {
  selectedItems,
  selectedItemsCounter,
  selectorAreaRect,
  stylesForSelectingField,
  updateSelectedItems,
  onPointerDown,
  onPointerUp,
  onPointerMove
} = useDragToSelectAreaSelect();

</script>

<template>
  <div class="px-2 mt-2 border-2 border-black flex flex-row justify-between">
    selectable area
    <div class="px-2">
      count: {{ selectedItemsCounter }}
    </div>
  </div>
  <div
    ref="dragToSelectAreaRef"
    class="relative z-0 grid grid-cols-8 sm:grid-cols-10 gap-4 p-4 border-2 border-black -translate-y-0.5"
    @pointerdown="onPointerDown"
    @pointermove="($event: PointerEvent) => {
      onPointerMove($event);
      updateSelectedItems();
    }"
    @pointerup="onPointerUp"
  >
    <div v-for="item in items"
         :key="item.id"
         :data-id="item.id"
         ref="areaRef"
         class="border-2 size-10 select-none border-black flex justify-center"
         :class="{
           'bg-black text-white': selectedItems[item.id],
            'bg-white text-black': !selectedItems[item.id]
         }"
    >
      {{ item.text }}
    </div>
    <div v-if="selectorAreaRect" class="absolute border-black border-2 bg-black/30" :style="[stylesForSelectingField]"/>
  </div>
</template>

<style scoped>

</style>
