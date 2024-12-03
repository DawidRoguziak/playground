import { ref, onMounted, onUnmounted } from 'vue';

/**
 *
 * @param {Ref<HTMLElement>} elementRef
 * @param {Number} offset
 * @return {{fitsInViewport: Ref<{top: Boolean, right:  Boolean, bottom: Boolean, left: Boolean}>}}
 */
export function useElementFitFromAnchor(elementRef, offset) {
    const fitsInViewport = ref({ top: true, right: true, bottom: true, left: true });

    const updateOffsetAndFit = () => {
        if (elementRef.value) {
            const rect = elementRef.value.getBoundingClientRect();
            const { innerWidth, innerHeight } = window;

            fitsInViewport.value = {
                top: rect.top >= offset,
                right: rect.right + offset <= innerWidth,
                bottom: rect.bottom + offset <= innerHeight,
                left: rect.left >= offset,
            };
        }
    };

    onMounted(() => {
        window.addEventListener('resize', updateOffsetAndFit);
        updateOffsetAndFit(); // Initial calculation
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateOffsetAndFit);
    });

    return {
        fitsInViewport,
    };
}