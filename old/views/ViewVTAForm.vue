<script setup>

import {toRef} from "vue";
import vtaForms from "@old/data-sources/vta-forms";
import {useRoute} from "vue-router";

const route = useRoute()
const data = toRef(vtaForms.find(vtaForm => vtaForm.id === parseInt(route.params.id)))

</script>

<template>

  <div v-if="data" class=" text-white border-2 border-green-200 vta-form"
       :style="{'--vta-block': 'vta-block-'+ data.id}">
    <div>{{ data.title }}</div>
    <div>{{ data.content }}</div>
  </div>

</template>

<style>
.vta-form {
  view-transition-name: var(--vta-block);
}
</style>
