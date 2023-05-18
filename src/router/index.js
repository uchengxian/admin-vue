import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {     path: '/h',
        component: ()=>import("../components/EleTemplate.vue"),
        beforeEnter: (to, from, next) => {
            // 判断用户是否已经登录
            const isLogin = localStorage.getItem('isLogin') === 'true';
            if (isLogin) {
                // 如果已经登录，则放行
                next();
            } else {
                // 如果没有登录，则重定向到登录页面
                next('/login');
            }
        },},
    { path: '/login', component: ()=>import("../view/Login.vue") },
    { path: '/regis',component: ()=>import("../view/Register.vue") },
    // 在这里定义你的路由配置
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;