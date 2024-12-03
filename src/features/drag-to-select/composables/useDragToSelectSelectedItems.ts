import type {ComputedRef, Ref} from "vue";
import {computed, ref, useTemplateRef} from "vue";
import {useElementBounding} from "@vueuse/core";
import {DOMVector} from "@/features/drag-to-select/classes/DOMVector.ts";

type UseDragToSelectAreaSelectParams = {
  selectorAreaRect: Ref<DOMVector | null>
  isDragging: Ref<boolean>
  containerRef: ReturnType<typeof useTemplateRef<HTMLElement>>
}

export type UseDragToSelectSelectedItems = {
  selectedItemsCounter: ComputedRef<number>;
  selectedItems: Ref<Record<string, boolean>>;
  updateSelectedItems: () => void;
}

export function useDragToSelectSelectedItems({
                                               selectorAreaRect,
                                               isDragging,
                                               containerRef,
                                             }: UseDragToSelectAreaSelectParams): UseDragToSelectSelectedItems {

  const itemRefs = useTemplateRef<HTMLElement[]>('areaRef')

  const selectedItems = ref<Record<string, boolean>>({});
  const selectedItemsCounter = computed<number>(() => {
    return Object.keys(selectedItems.value).length;
  });

  const {x: containerX, y: containerY} = useElementBounding(containerRef);


  function updateSelectedItems() {
    if (!itemRefs.value || !containerRef.value || !isDragging.value) {
      return
    }

    const next: Record<string, boolean> = {}
    for (const el of itemRefs.value) {
      const itemRect = el.getBoundingClientRect()
      const x = itemRect.x - containerX.value;
      const y = itemRect.y - containerY.value;
      const translatedItemRect = new DOMRect(x, y, itemRect.width, itemRect.height)

      if (!selectorAreaRect.value) {
        break;
      }

      if (!intersect(selectorAreaRect.value.toDOMRect(), translatedItemRect)) {
        continue;
      }

      const id = el.getAttribute('data-id');
      if (id) {
        next[id] = true
      }
    }

    selectedItems.value = next;
  }

  function intersect(rect1: DOMRect, rect2: DOMRect) {
    if (rect1.right < rect2.left || rect2.right < rect1.left) {
      return false
    }

    if (rect1.bottom < rect2.top || rect2.bottom < rect1.top) {
      return false
    }

    return true
  }

  return {
    selectedItems,
    selectedItemsCounter,
    updateSelectedItems
  }
}
