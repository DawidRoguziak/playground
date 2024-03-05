import {createRouter, createWebHistory, onBeforeRouteLeave} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/views/ViewHome.vue')
    },
    {
        path: '/product-list',
        component: () => import('@/views/ProductList.vue')
    },
    {
        path: '/vta-form/:id',
        component: () => import('@/views/ViewVTAForm.vue')
    },
    {
        path: '/simple-paint',
        component: () => import('@/views/ViewPaint.vue')
    },
    {
        path: '/search-sr',
        component: () => import('@/views/SpeechRecognition.vue')
    },
]

const router = createRouter({
    history: createWebHistory('/playground'),
    routes,
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    if (!document.startViewTransition) {
        return next()
    }

    console.log('startViewTransition')
    document.startViewTransition(async  () => {
        return next()
    })

})
export default router;