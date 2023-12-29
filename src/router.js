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
]

const router = createRouter({
    history: createWebHistory(),
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