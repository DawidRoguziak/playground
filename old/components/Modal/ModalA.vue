<script setup>

import ModalComponent from "@old/components/Modal/ModalComponent.vue";
import {useModal} from "@old/components/Modal/useModal";

const {} = useModal();

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
