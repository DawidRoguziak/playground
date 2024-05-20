<script setup>

import BroadcastChannel from "@/components/BroadcastChannel/BroadcastChannel.vue";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox.vue";
import PageIndicator from "@/components/PageIndicator/PageIndicator.vue";
import Box3D from "@/components/Box3D/Box3D.vue";
import VTAList from "@/components/ViewTransitionApiListAndElement/VTAList.vue";
import AnimatedBoxLoop from "@/components/AnimatedButton/AnimatedBoxLoop.vue";
import ModalC from "@/components/Modal/ModalC.vue";
import {useElementFitFromAnchor} from "@/composables/useElementFitFromAnchor";
import {ref} from "vue";

const element = ref();
const {fitsInViewport} = useElementFitFromAnchor(element,500);

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
        <AnimatedBoxLoop />
      </div>

      <div class="mb-9">
        <Box3D />
        <Box3D />
      </div>

      <div class="mb-9">
        <VTAList />
      </div>

      <div>


        <ModalC></ModalC>
      </div>

      <div class="mb-2 text-red-500">
        {{ fitsInViewport }}
      </div>
      <div class="mb-9 flex justify-end">
          <div ref="element" class="text-amber-300 w-[100px]">test</div>
      </div>

    </div>

  </div>
</template>

<style scoped>


</style>