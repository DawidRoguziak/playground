import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "lodash";

export default function useResizeObserver(el, entryFun) {
    const resizeObserver = ref();

    const initObserver = () => {
        resizeObserver.value = new ResizeObserver(entryFun);
        resizeObserver.value.observe(el.value);
    }

    const disconnectObserver = () => {
        resizeObserver.value.disconnect();
    }

    onMounted(() => {
        initObserver();
    });

    onUnmounted(() => {
        disconnectObserver();
    })
}