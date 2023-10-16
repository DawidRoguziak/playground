<script setup>
import DragAndDropField from "@/components/DragAndDropFIeld/DragAndDropField.vue";
import {provide} from "vue";
import {SYMBOL__DAD_EVENT_BUS} from "@/symbols";
import SimplyEventBus from "@/components/BroadcastChannel/SimplyEventBus";
import useListHandler from "@/components/BroadcastChannel/listHandler";
import useEventBusHandler from "@/components/BroadcastChannel/eventBusHandler";

const eventBus = new SimplyEventBus();
provide(SYMBOL__DAD_EVENT_BUS, eventBus);

const {items, addFunction, deleteFunction} = useListHandler();
useEventBusHandler(eventBus , addFunction, deleteFunction);

const openNewTab = () => {
 window.open(window.location.href, 'popUpWindow', 'height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')
}
</script>

<template>
  <div>
    <div class="text-white">
      Open new tab or click <button @click="openNewTab" class="bg-transparent border-0 text-cyan-700">here</button>.
      Try drag and drop items between windows.
    </div>
    <DragAndDropField :items="items"/>
  </div>
</template>

<style scoped>

</style>