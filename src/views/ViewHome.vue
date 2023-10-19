<script setup>

import BroadcastChannel from "@/components/BroadcastChannel/BroadcastChannel.vue";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox.vue";
import PageIndicator from "@/components/PageIndicator/PageIndicator.vue";
import Box3D from "@/components/Box3D/Box3D.vue";
import VTAList from "@/components/ViewTransitionApiListAndElement/VTAList.vue";
</script>

<template>

  <div>
    <div class="mb-9">
      <PageIndicator></PageIndicator>
    </div>
    <div class="p-3">
      <div class="mb-9">
        <BroadcastChannel/>
      </div>
      <div class="mb-9 flex gap-4">
        <AnimatedBox style="width: 30%; height: 200px;">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </AnimatedBox>
        <AnimatedBox style="width: 30%; height: 200px;">
          Ad adipisci, aliquam animi architecto aut deserunt dolorem enim fugiat incidunt itaque
        </AnimatedBox>
        <AnimatedBox style="width: 30%; height: 200px;">
          laudantium libero mollitia porro quae quam quidem suscipit, temporibus vero.
        </AnimatedBox>
      </div>

      <div class="mb-9">
<!--        <AnimatedBoxLoop />-->
      </div>

      <div class="mb-9">
        <Box3D />
        <Box3D />
      </div>

      <div class="mb-9">
        <VTAList />
      </div>
    </div>

  </div>
</template>

<style scoped>


</style>