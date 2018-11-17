import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/layout/main'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: ()=> import('../components/login/login')
        },
        {
            path: '/error',
            component: Main,
            children: [
                {
                    path: '403',
                    component: () => import('../components/error/403')
                },
                {
                    path: '404',
                    component: () => import('../components/error/404')
                }
            ]
        },
        {
            path: '/home',
            component: Main,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '',
                    component: ()=> import('../components/home/home')
                }
            ]
        },
        {
            path: '/example',
            component: Main,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'item1',
                    component: () => import('../pages/item1')
                },
                {
                    path: 'item2',
                    component: () => import('../pages/item2')
                },
                {
                    path: 'item3',
                    component: () => import('../pages/item2')
                }
            ]
        },
        {
            path: '*',
            redirect: '/error/404'
        }
    ]
})

