<script setup>

import {onMounted, ref} from "vue";

const emit = defineEmits([
  'search'
]);

const SpeechRecognition = ref(
    window.SpeechRecognition || window.webkitSpeechRecognition);
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
  } else {
    recognition.value.start();
    isRecording.value = true;
  }

}

const triggerSearch = () => {
  emit('search', searchValue.value);
}

onMounted(() => {
  if (!SpeechRecognition.value) {
    return;
  }

  recognition.value = new SpeechRecognition.value();
  recognition.value.lang = 'pl-PL'

  recognition.value.onresult = (event) => {
    const result = event.results[0][0].transcript;
    if (!result || (result && result.length === 0)) {
      return;
    }

    searchValue.value = result;
    isRecording.value = false;
    triggerSearch();
  };

  recognition.value.onend = () => {
    isRecording.value = false;
  }

  recognition.value.onerror = (event) => {
    console.log(`Speech recognition error detected: ${event.error}`);
    console.log(`Additional information: ${event.message}`);
    isRecording.value = false;
  }

});

</script>

<template>
  <div class="flex">
    <div class="relative w-full min-h-[50px]">
      <span v-if="SpeechRecognition" class="absolute right-3 top-1/2 -translate-y-1/2 ">
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