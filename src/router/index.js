import { createRouter, createWebHistory } from 'vue-router';

// 指定路由规则

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/front',
        name: 'front',
        component: () => import('@/views/Front.vue'),
        redirect: '/front/home',
        children: [
            {
                path: '/front/home',
                name: 'home',
                // alias:'/home',
                component: () => import('@/views/front/Home.vue'),
            },
            {
                path: '/front/event',
                name: 'event',
                component: () => import('@/views/front/Event.vue'),
            },
            {
                path: '/front/eventDetail',
                name: 'eventDetail',
                component: () => import('@/views/front/EventDetail.vue'),
            },
            {
                path: '/front/news',
                name: 'news',
                component: () => import('@/views/front/News.vue'),
            },
            {
                path: '/front/newsDetail',
                name: 'newsDetail',
                component: () => import('@/views/front/NewsDetail.vue'),
            },
            {
                path: '/front/userSign',
                name: 'userSign',
                component: () => import('@/views/front/UserSign.vue'),
            },
            {
                path: '/front/userEventResult',
                name: 'userEventResult',
                component: () => import('@/views/front/UserEventResult.vue'),
            },
            {
                path: '/front/notice',
                name: 'notice',
                component: () => import('@/views/front/Notice.vue'),
            },
            {
                path: '/front/userCollect',
                name: 'userCollect',
                component: () => import('@/views/front/UserCollect.vue'),
            },
            {
                path: '/front/userDrawCash',
                name: 'userDrawCash',
                component: () => import('@/views/front/UserDrawCash.vue'),
            },
            {
                path: '/front/person',
                name: 'person',
                component: () => import('@/views/front/Person.vue'),
            },
        ],
    },
    {
        path: '/manager',
        name: 'manager',
        component: () => import('@/views/Manager.vue'),
        redirect: '/manager/home',
        children: [
            {
                path: '/manager/home',
                component: () => import('@/views/manager/Home.vue'),
            },
            {
                path: '/manager/sign',
                component: () => import('@/views/manager/Sign.vue'),
            },
            {
                path: '/manager/eventResult',
                component: () => import('@/views/manager/EventResult.vue'),
            },
        ],
    },
];

const router = createRouter({
    // 设置路由模式
    history: createWebHistory(),
    routes,
});

export default router;