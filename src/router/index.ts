import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/drag-to-select',
      name: 'drag-to-select',
      component: () => import('../features/drag-to-select/DragToSelectView.vue'),
    },
  ],
})

export default router
