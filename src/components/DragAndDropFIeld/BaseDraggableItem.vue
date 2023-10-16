<script setup>

const props = defineProps({
  background: {
    type: String,
    default: '#000',
  },
  id: {
    type: Number,
    default: -1,
    required: true
  }
})

const emit = defineEmits(['delete'])

const onDelete = () => {
  emit('delete', props.id)
}
</script>

<template>
  <div class="w-[50px] h-[50px] flex flex-col justify-between p-1 cursor-grab" :style="{background: background}">
    <button class="w-fit rounded text-white text-sm h-fit bg-red-700"
            type="button"
            @click="onDelete">Delete
    </button>
    <div class="text-white flex text-xs">
      ID: {{ id }}
    </div>
  </div>
</template>

<style scoped>

</style>