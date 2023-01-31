import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/Home/HomePage.vue"),
        redirect: '/test1',
        children: [
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
})

export default router;
