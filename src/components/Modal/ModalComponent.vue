<template>
  <Transition name="modal-outer">
    <component
        v-show="isOpen"
        ref="modalRef"
        :is="renderAsDialog ? 'dialog' : 'div'"
        :class="{'fixed top-0 left-0 bg-black bg-opacity-30': !renderAsDialog, 'bg-transparent': renderAsDialog}"
        class="w-full h-[100svh] flex justify-center"
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

                  <div class="" @click="closeModal">
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
    </component>
  </Transition>
</template>

<script setup>
import {inject, nextTick, watch} from "vue";
import {useModalInjectionKey, useModalState} from "@/components/Modal/useModal";
import {useModalListeners} from "@/components/Modal/useModalListenners";

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  renderAsDialog: {
    type: Boolean,
    default: true
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

const {modalRef, isOpen, lockClose} = useModalState();

const {isProviderSet} = inject(useModalInjectionKey, () => ({
  isProviderSet: false,
}), true);

const {registerEvent, removeEvent} = useModalListeners(isOpen, isProviderSet, emit);

const openModal = async () => {
  isOpen.value = true;
  await nextTick();
  if (props.renderAsDialog) {
    modalRef.value.showModal();
  }

}

const closeModal = async () => {
  lockClose.value = true
  isOpen.value = false;

  await nextTick();

  if (props.renderAsDialog) {
    modalRef.value.close();
  }

  emit('update:modelValue', false);
  lockClose.value = false;

}

// esc events
watch(() => isOpen.value,
    async (newValue) => {
      await nextTick()
      if (newValue) {
        registerEvent();
      } else {
        removeEvent();
      }
    });

watch(
    () => props.modelValue,
    (newVal) => {
      if (lockClose.value) {
        return
      }
      if (newVal) {
        openModal();
      } else {
        closeModal()
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

dialog[open] {
  //margin: 0 !important;
}

dialog::backdrop {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
}


</style>