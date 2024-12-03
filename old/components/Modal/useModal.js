import {computed, nextTick, provide, ref, watch} from "vue";

export const useModalInjectionKey = Symbol();

export function useModalState() {
    const isOpen = ref(false);
    const modalRef = ref(false);
    const modalWrapper = ref(false);

    return {
        isOpen,
        modalWrapper,
        modalRef
    }
}

export function useModal() {


}