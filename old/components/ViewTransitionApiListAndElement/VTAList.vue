<script setup>

import {reactive} from "vue";
import VTABlock from "@old/components/ViewTransitionApiListAndElement/VTABlock.vue";
import vtaForms from "@old/data-sources/vta-forms";

const list = reactive(vtaForms)

</script>

<template>
  <div>
    <div class="text-white">List</div>
    <div class="vta-list grid md:grid-cols-3 auto-rows-auto gap-3.5">
      <template v-for="item in list" :key="item.id">
        <RouterLink :to="'/vta-form/' + item.id">
          <VTABlock :title="item.title" :id="item.id" :content="item.content"/>
        </RouterLink>
      </template>
    </div>
  </div>
</template>

<style >

</style>
