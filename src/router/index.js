import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/layout/main'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: ()=> import('../components/login/login')
        },
        {
            path: '/',
            name: 'home',
            //redirect: '/home',
            component: Main,
            children: [
                {
                    path: 'menu1',
                    name: 'menu1',
                    component: ()=> import('../pages/item1')
                },
                {
                    path: 'menu2',
                    name: 'menu2',
                    component: ()=> import('../pages/item2')
                },
            ]
        }
    ]
})


/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '',
        component: Main,
        name: 'container',
        redirect: 'home',
        meta: {
            requiresAuth: true,
            name: '首页'
        },
        children: [
            {
                path: 'home',
                component: Main,
                name: 'home',
                meta: {
                    name: '首页',
                    icon: 'icon-home'
                }
            }
        ]
    },
    {
        path: '/403',
        component: Main
    },
    {
        path: '*',
        component: Main
    }
]
