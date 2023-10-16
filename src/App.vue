<script setup>
import PageIndicator from "@/components/PageIndicator/PageIndicator.vue";
import BroadcastChannel from "@/components/BroadcastChannel/BroadcastChannel.vue";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox.vue";
import Box3D from "@/components/Box3D/Box3D.vue";
import VTAList from "@/components/ViewTransitionApiListAndElement/VTAList.vue";
</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
@import "@/assets/index.css";

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  background: var(--dark, #000);
}

:root {
  --dark: #110133;
  --mint: #00918E;
  --green: #4DD599;
  --yellow: #FFDC34;

  --linear-gradient-1: linear-gradient(to right top, #00918e, #009e93, #05ab97, #1cb799, #31c49a, #49cc92, #60d489, #78db7f, #98de6a, #b9e055, #dbdf42, #ffdc34);
}
</style>