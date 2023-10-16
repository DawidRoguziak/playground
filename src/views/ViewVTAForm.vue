<script setup>

import {reactive} from "vue";

const data = reactive({
    id: 1,
    title: 'dsadasdasd',
    content: 'dasdasdsadasd'
  })

</script>

<template>

  <div class=" text-white border-2 border-green-200 vta-form" :style="{'--vta-block': 'vta-block-'+ data.id}">
    <div>{{ data.title }}</div>
    <div>{{ data.content }}</div>
  </div>

</template>

<style >
.vta-form {
  view-transition-name: var(--vta-block);
}
</style>