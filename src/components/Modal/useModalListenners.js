import {onMounted, onUnmounted, ref} from "vue";

export function useModalListeners(state, modalRef, emit) {
    const isEventRegistered = ref(false);

    const closeModalCallback = (event) => {
        if (event.key === "Escape") {
            state.value = false;
            emit('update:modelValue', false)
        }
    }

    const disableDialogCancel = () => {
        modalRef.value.addEventListener('cancel', (event) => {
            event.preventDefault();
        });
    }

    const registerEscEvent = () => {
        if (!isEventRegistered.value) {
            isEventRegistered.value = true
            document.addEventListener('keydown', closeModalCallback);
            disableDialogCancel();
        }
    }

    const removeEscEvent = () => {
        if (isEventRegistered.value) {
            isEventRegistered.value = false
            document.removeEventListener('keydown', closeModalCallback);
        }
    }

    onUnmounted(() => {
        removeEscEvent();
    });

    return {
        removeEscEvent,
        registerEscEvent
    }
}