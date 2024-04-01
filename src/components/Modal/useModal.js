import {computed, nextTick, provide, ref, watch} from "vue";
import {useModalListeners} from "@/components/Modal/useModalListenners";

export const useModalInjectionKey = Symbol();

export function useModalState() {
    const isOpen = ref(false);

    return {
        isOpen
    }
}

export function useModal() {
    const {isOpen} = useModalState()

    const closeModal = () => {
        isOpen.value = false
    }

    const openModal = async () => {
        isOpen.value = true;
        await nextTick();
    }

    provide(useModalInjectionKey, {
        isProviderSet: true,
        isOpen,
        closeModal,
        openModal
    });

    return {
        isOpen,
        closeModal,
        openModal
    }
}