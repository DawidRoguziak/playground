import {createRouter, createWebHistory, onBeforeRouteLeave} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@old/views/ViewHome.vue')
    },
    {
        path: '/product-list',
        component: () => import('@old/views/ProductList.vue')
    },
    {
        path: '/vta-form/:id',
        component: () => import('@old/views/ViewVTAForm.vue')
    },
    {
        path: '/simple-paint',
        component: () => import('@old/views/ViewPaint.vue')
    },
    {
        path: '/search-sr',
        component: () => import('@old/views/SpeechRecognition.vue')
    },
    {
        path: '/motion',
        component: () => import('@old/views/ViewMotion.vue')
    },
    {
        path: '/glowing-card',
        component: () => import('@old/views/ViewGlowingCards.vue')
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
