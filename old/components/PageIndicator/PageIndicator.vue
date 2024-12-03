<script setup>
import {onMounted, ref} from "vue";

const currentWith = ref(0);

const calcWidth = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;

  currentWith.value = (scrollTop / (documentHeight - windowHeight)) * 100;
}

onMounted(() => {
  calcWidth();
  window.addEventListener('scroll', calcWidth)
})

</script>

<template>
  <div class="page-indicator">
    <div class="page-indicator__process" :style="{width: currentWith + '%'}"></div>
  </div>
</template>

<style>
.page-indicator {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 15px;
}

.page-indicator__process {
  background-image: var(--linear-gradient-1);
  height: 10px;
  border-radius: 10px;
  transition: .2s width cubic-bezier(.17,.36,.81,.66);
}
</style>