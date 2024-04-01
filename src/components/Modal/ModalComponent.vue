<template>
  <Transition name="modal-outer">
    <div
        v-show="isOpen"
        ref="modalRef"
        class="w-full h-[100svh] flex justify-center items-center overflow-hidden"
        :class="{'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30': !renderAsDialog, 'bg-transparent': renderAsDialog}"
        @click="closeByOverlay"
    >
      <Transition appear name="modal-inner">
        <component
            v-if="isOpen"
            ref="modalWrapper"
            class="flex flex-col justify-center items-center w-[clamp(300px,100%,600px)]"
            :is="renderAsDialog ? 'dialog' : 'div'"
            :class="{'animation-hidden': renderAsDialog}"
            @click.prevent.stop="() => {}"
        >
          <div class="w-full max-h-[calc(100svh_-_30px)] rounded bg-white">
            <template v-if="showHeader">
              <div class="bg-neutral-100 flex justify-between rounded-t-md w-full py-1 px-2"
                   :class="[...headerClasses]">
                <slot name="header">
                  <div>
                    {{ modalTitle }}
                  </div>

                  <div class="" @click="closeModal">
                    X
                  </div>
                </slot>
              </div>
            </template>

            <template v-if="showBody">
              <div class="bg-white py-1 px-2 overflow-auto h-full max-h-[calc(100svh-120px)] max-md:max-h-[100svh-10px]"
                   :class="[...bodyClasses]">
                <slot name="default">
                  body
                </slot>
              </div>
            </template>

            <template v-if="showFooter">
              <div class="bg-neutral-100 rounded-b-md w-full py-1 px-2" :class="[...footerClasses]">
                <slot name="footer">
                  footer
                </slot>
              </div>
            </template>
          </div>
        </component>
      </Transition>
    </div>
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
  modalTitle: {
    type: String,
    default: ''
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
  registerEscEvent: {
    type: Boolean,
    default: true
  },
  closableByOverLay: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  headerClasses: {
    type: [Object, Array],
    default: () => [],
  },
  bodyClasses: {
    type: [Object, Array],
    default: () => [],
  },
  footerClasses: {
    type: [Object, Array],
    default: () => [],
  },
});

const {modalRef, isOpen, modalWrapper} = useModalState();
const {registerEscEvent, removeEscEvent} = useModalListeners(isOpen, modalRef, emit);

const openModal = async (emitEvent = false) => {
  isOpen.value = true;
  if (emitEvent) {
    emit('update:modelValue', true)
  }

  await nextTick();

  if (props.renderAsDialog) {
    modalWrapper.value.showModal();
  }

  await nextTick();

  if (props.registerEscEvent) {
    registerEscEvent();
  }
}

const closeModal = async (emitEvent = false) => {
  isOpen.value = false;

  await nextTick();

  if (props.renderAsDialog) {
    // dialog is already destroyed by isOpen so this is only for safety, so user won't be stuck on dialog
    modalWrapper.value?.close();
  }

  if (emitEvent) {
    emit('update:modelValue', false)
  }

  if (props.registerEscEvent) {
    removeEscEvent();
  }
}

const closeByOverlay = () => {
  if (props.closableByOverLay) {
    closeModal(true);
  }
}

watch(
    () => props.modelValue,
    (newVal) => {
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

.modal-inner-enter-to {
  opacity: 01;
  transform: scale(1);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}


dialog {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

dialog[open] {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

dialog::backdrop {
  background: rgba(0, 0, 0, .3);
}


@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(.8);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
  }

  100% {
    opacity: 0;
    transform: scaleY(.8);
  }
}


</style>