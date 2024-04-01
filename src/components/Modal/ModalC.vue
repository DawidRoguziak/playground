<script setup>

import ModalComponent from "@/components/Modal/ModalComponent.vue";
import {ref} from "vue";

const modalActive = ref(false);

const openModal = () =>  {
  console.log('click')
  modalActive.value = true;
  console.log(modalActive.value)
}

</script>

<template>
  <div>
    <button  class="bg-green-500" @click="openModal">CCC</button>
  </div>
  <ModalComponent  v-model="modalActive">
    <slot>
    <div>Modal C</div>
    </slot>
  </ModalComponent>
</template>

<style scoped>

</style>