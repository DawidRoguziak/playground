<script setup>

import ModalComponent from "@/components/Modal/ModalComponent.vue";
import {useModal} from "@/components/Modal/useModal";
import ModalA from "@/components/Modal/ModalA.vue";

const {} = useModal();

</script>

<template>
  <div>
    <button  class="bg-green-500" @click="openModal">BBB</button>
  </div>
  <ModalComponent >
    <div>Modal B</div>
  </ModalComponent>

  <ModalA >
    <div>Modal A in Modal B</div>
  </ModalA>
</template>

<style scoped>

</style>