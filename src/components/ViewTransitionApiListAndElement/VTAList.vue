<script setup>

import {reactive} from "vue";
import VTABlock from "@/components/ViewTransitionApiListAndElement/VTABlock.vue";
import vtaForms from "@/data-sources/vta-forms";

const list = reactive(vtaForms)

</script>

<template>
  <div>
    <div>list</div>
    <div class="vta-list">
      <template v-for="item in list" :key="item.id">
        <RouterLink :to="'/vta-form/' + item.id">
          <VTABlock :title="item.title" :id="item.id" :content="item.content"/>
        </RouterLink>
      </template>
    </div>
  </div>
</template>

<style >
.vta-list {
  view-transition-name: var(--vta-block);
}
</style>