<template>
  <Transition name="modal-outer">
    <div
        v-show="isOpen"
        class="fixed w-full bg-black bg-opacity-30 h-[100svh] top-0 left-0 flex justify-center"
    >
      <Transition name="modal-inner">
        <div
            v-if="isOpen"
            class="flex flex-col  justify-center items-center h-full w-[clamp(300px,100%,600px)]"
        >
          <div class="w-full rounded bg-white">
            <template v-if="showHeader">
              <slot name="header">
                <div class="bg-neutral-100 flex justify-between rounded-t-md w-full py-1 px-2">
                  <div>
                    Tytył modala
                  </div>

                  <div class="" @click="innerCloseModal">
                    X
                  </div>
                </div>
              </slot>
            </template>

            <template v-if="showBody">
              <slot name="default">
                <div class="bg-white py-1 px-2">
                  body
                </div>
              </slot>
            </template>

            <template v-if="showFooter">
              <slot name="footer">
                <div class="bg-neutral-100 rounded-b-md w-full py-1 px-2">
                  footer
                </div>
              </slot>
            </template>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import {inject, watch} from "vue";
import {useModalInjectionKey, useModalState} from "@/components/Modal/useModal";
import {useModalListeners} from "@/components/Modal/useModalListenners";

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  showBody: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  }
});

const {isOpen, isProviderSet} = inject(useModalInjectionKey, () => ({
  isProviderSet: false,
  ...useModalState()
}), true);

const {registerEvent, removeEvent} = useModalListeners(isOpen, isProviderSet, emit);


const innerCloseModal = () => {
  if (isProviderSet) {
    isOpen.value = false;
  } else {
    emit('update:modelValue', false);
  }
}

// esc events
watch(() => isOpen.value,
    (newValue) => {
      if (newValue) {
        registerEvent();
      } else {
        removeEvent();
      }
    });

watch(
    () => props.modelValue,
    (newVal) => {
      if (!isProviderSet) {
        isOpen.value = newVal;
      }
    }
);
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>