import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/common/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            //redirect: '/home',
            component: Home,
            children: [
                {
                    path: 'menu1',
                    name: 'menu1',
                    component: ()=> import('../pages/menu1_item1')
                }
            ]
        }
    ]
})
