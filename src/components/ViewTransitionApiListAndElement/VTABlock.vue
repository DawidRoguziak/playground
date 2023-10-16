<script setup>

defineProps({
  title: {
    type: String,
    default: ''
  },
  id: {
    type: Number,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
})

</script>

<template>

  <div class="text-white border-2 border-amber-200 vta-block " :style="{'--vta-block': 'vta-block-' + id}">
    <div>{{ title }}</div>
    <div>{{ content }}</div>
  </div>

</template>

<style scoped>
.vta-block {
  //view-transition-name: vtablock;
}
</style>