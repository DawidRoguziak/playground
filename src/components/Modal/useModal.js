import {computed, nextTick, provide, ref, watch} from "vue";

export const useModalInjectionKey = Symbol();

export function useModalState() {
    const isOpen = ref(false);
    const modalRef = ref(false);
    const lockClose = ref(false);

    return {
        isOpen,
        lockClose,
        modalRef
    }
}

export function useModal() {


}