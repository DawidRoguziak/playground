import {onMounted, onUnmounted, ref} from "vue";

export function useModalListeners(state, isProviderSet, emit) {
    const isEventRegistered = ref(false);

    const closeModalCallback = (event) => {
        if (event.key === "Escape") {
            state.value = false;

            if (!isProviderSet) {
                emit('update:modelValue', false)
            }
        }
    }

    const registerEvent = () => {
        if (!isEventRegistered.value) {
            isEventRegistered.value = true
            document.addEventListener('keydown', closeModalCallback);
        }
    }

    const removeEvent = () => {
        if (isEventRegistered.value) {
            isEventRegistered.value = false
            document.removeEventListener('keydown', closeModalCallback);
        }
    }

    onUnmounted(() => {
        removeEvent();
    });

    return {
        removeEvent,
        registerEvent
    }
}