import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {     path: '/',
        name:"home",
        component: ()=>import("../components/EleTemplate.vue"),
        redirect: '/list',
        // beforeEnter: (to, from, next) => {
        //     // 判断用户是否已经登录
        //     const isLogin = localStorage.getItem('isLogin') === 'true';
        //     if (isLogin) {
        //         // 如果已经登录，则放行
        //         next();
        //     } else {
        //         // 如果没有登录，则重定向到登录页面
        //         next('/login');
        //     }
        // },
        children:[{
        path:"list",
            name:"list",
            component:()=>import("../view/home/list.vue"),
            redirect: '/list/Recommend',
            children:[{
            path:"Follow",
                name:"Follow",
                component:()=>import("../view/home/Item/Follow.vue")
            },{
            path:"HotList",
                name:"HotList",
                component:()=>import("../view/home/Item/HotList.vue")
            },{
            path:"Recommend",
                name:"Recommend",
                component:()=>import("../view/home/Item/Recommend.vue")
            }]
        }]
    },
    { path: '/login',        name:"login",
        component: ()=>import("../components/Login.vue") },
    { path: '/:pathMatch(.*)', component: () => import('../components/404.vue') },
    { path: '/regis',        name:"regis",
        component: ()=>import("../components/Register.vue") },
    // 在这里定义你的路由配置
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;