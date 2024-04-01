<script setup>

import ModalComponent from "@/components/Modal/ModalComponent.vue";
import {useModal} from "@/components/Modal/useModal";

const {closeModal,isOpen,openModal} = useModal();

</script>

<template>
  <div>
    <button  class="bg-green-500" @click="openModal">AAA</button>
  </div>
  <ModalComponent >
    <slot>
    <div>Modal A</div>
    </slot>
  </ModalComponent>
</template>

<style scoped>

</style>