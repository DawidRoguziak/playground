import {onUnmounted} from "vue";

export default function useEventBusHandler(eventBus, addFunction, deleteFunction ) {
    eventBus.subscribe('add', addFunction)
    eventBus.subscribe('delete', deleteFunction)


    onUnmounted(() => {
        eventBus.unsubscribe('add', addFunction);
        eventBus.unsubscribe('delete', deleteFunction);
    })

    return {
    }
}