import {computed, type ComputedRef, type Ref, ref, useTemplateRef} from "vue";
import {DOMVector} from "@/features/drag-to-select/components/classes/DOMVector.ts";
import {
  type UseDragToSelectSelectedItems,
  useDragToSelectSelectedItems
} from "@/features/drag-to-select/components/composables/useDragToSelectSelectedItems.ts";

type UseDragToSelectAreaSelect = {
  selectorAreaRect: Ref<DOMVector | null>,
  isDragging: Ref<boolean>,
  stylesForSelectingField: ComputedRef<Record<string, string> | null>,
  onPointerDown: (event: PointerEvent) => void,
  onPointerMove: (event: PointerEvent) => void,
  onPointerUp: () => void,
} & UseDragToSelectSelectedItems

export function useDragToSelectAreaSelect(): UseDragToSelectAreaSelect {
  const selectorAreaRect = ref<DOMVector | null>(null);
  const isDragging = ref<boolean>(false);
  const containerRef = useTemplateRef<HTMLElement>("dragToSelectAreaRef");

  const {selectedItemsCounter, selectedItems, updateSelectedItems} = useDragToSelectSelectedItems({
    selectorAreaRect,
    isDragging,
    containerRef
  });


  const stylesForSelectingField = computed<Record<string, string> | null>(() => {
    if (!selectorAreaRect.value) {
      return null;
    }

    const rect = selectorAreaRect.value.toDOMRect();

    return {
      top: `${rect.y}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    }
  })

  function onPointerDown(event: PointerEvent) {
    if (event.button !== 0) {
      return;
    }

    const containerRect = (event.currentTarget as Element)?.getBoundingClientRect();

    selectorAreaRect.value =
      new DOMVector(
        event.clientX - containerRect.x,
        event.clientY - containerRect.y,
        0,
        0,
      );

    (event.currentTarget as Element)?.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: PointerEvent) {
    if (selectorAreaRect.value == null) {
      return
    }

    const containerRect = (event.currentTarget as Element)?.getBoundingClientRect?.()

    containerRef.value?.focus();

    const nextDragVector = new DOMVector(
      selectorAreaRect.value.x,
      selectorAreaRect.value.y,
      event.clientX - containerRect.x - selectorAreaRect.value.x,
      event.clientY - containerRect.y - selectorAreaRect.value.y,
    )

    if (!isDragging.value && nextDragVector.getDiagonalLength() < 10) {
      return
    }

    isDragging.value = true
    selectorAreaRect.value = nextDragVector;
  }

  async function onPointerUp() {
    if (!isDragging.value) {
      selectedItems.value = {};
      selectorAreaRect.value = null;
    } else {
      selectorAreaRect.value = null;
      isDragging.value = false;
    }
  }

  return {
    selectedItemsCounter, selectedItems,
    isDragging,
    selectorAreaRect,
    stylesForSelectingField,
    updateSelectedItems,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  }
}
