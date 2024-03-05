<script setup>

import {onMounted, ref} from "vue";

const emit = defineEmits([
  'search'
]);

const recognition = ref();
const isRecording = ref(false);
const searchValue = ref('');

const resolve = () => {
  if (!recognition.value) {
    return;
  }

  if (isRecording.value) {
    // stop not work on windows????
    recognition.value.stop();
    isRecording.value = false;
  } else {
    recognition.value.start();
    isRecording.value = true;
  }

}

const triggerSearch = () => {
  emit('search', searchValue.value);
}

onMounted(() => {
  //set lang
  const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition.value = new SpeechRecognition();
  recognition.value.lang = 'pl_PL'
  //set lang

  recognition.value.onresult = (event) => {
    const result = event.results[0][0].transcript;

    if (!result || (result && result.length === 0)) {
      return;
    }

    searchValue.value = result;
    isRecording.value = false;
    triggerSearch();
  };

});

</script>

<template>
  <div class="flex">
    <div class="relative w-full min-h-[50px]">
      <span class="absolute right-3 top-1/2 -translate-y-1/2 ">
        <span v-show="!isRecording"
              class="material-symbols-outlined text-md rounded-full shadow-gray-400 shadow-md p-1 cursor-pointer"
              @click="resolve"
        >
          mic
        </span>
        <span v-show="isRecording"
              class="material-symbols-outlined text-md rounded-full text-red-600 shadow-gray-400 shadow-md p-1 cursor-pointer"
              @click="resolve">
          mic_off
        </span>
      </span>
      <input v-model="searchValue" class="rounded-l min-h-[50px] p-1 w-full">
    </div>
    <button class="bg-green-500 rounded-r p-1 w-[100px] text-white" @click="triggerSearch">Search</button>
  </div>
</template>

<style scoped>

</style>