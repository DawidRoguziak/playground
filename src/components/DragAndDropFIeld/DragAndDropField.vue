<script setup>

import BaseDraggableItem from "@/components/DragAndDropFIeld/BaseDraggableItem.vue";
import {inject, ref} from "vue";
import {SYMBOL__DAD_EVENT_BUS} from "@/symbols";

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  listId: {
    type: String,
    default: 'any'
  }
})

const eventBus = inject(SYMBOL__DAD_EVENT_BUS)
const onDelete = (id) => {
  eventBus.trigger('delete', {id})
}

const listRef = ref();
const allowDrop = ($event) => {
  $event.preventDefault();
}

const onDrop = ($event) => {
  $event.preventDefault();
  const data = $event.dataTransfer.getData("text/plain");
  eventBus.trigger('add', data);
}

const onDragStart = ($event, item) => {
  $event.dataTransfer.setData("text/plain", JSON.stringify(item));
}

</script>

<template>
  <div class="drag-and-drop-field">

    <div  ref="listRef" class="w-full min-h-[100px] border-amber-100 border border-dashed flex gap-3 p-3"
         @dragover="allowDrop"
         @drop="onDrop"
    >
      <template v-for="item in items">
        <slot :item="item" :index="item.id">
          <BaseDraggableItem
              draggable="true"
              :background="item.background" :key="item.id"
              :id="item.id"
              @delete="onDelete"
              @dragstart="onDragStart($event, item)"
          ></BaseDraggableItem>
        </slot>
      </template>
    </div>

  </div>
</template>

<style scoped>

</style>