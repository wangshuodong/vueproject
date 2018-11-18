import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from './config/httpConfig'
import ElementUI from 'element-ui';
import {LoadingBar} from 'iview';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

import './components/install'
import './plugins/install'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.component('LoadingBar', LoadingBar)
LoadingBar.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 4
})

router.beforeEach((to, from, next) => {
    LoadingBar.start();
    if (store.state.token) { //已登录
        // 如果当前处于登录状态，并且跳转地址为login，则自动跳回系统首页
        // 这种情况出现在手动修改地址栏地址时
        if (to.path === '/login') {
            next({path: "/home", replace: true})
        } else if (to.path.indexOf("/error") >= 0) {
            // 防止因重定向到error页面造成beforeEach死循环
            next()
        } else {
            store.dispatch('getNavList').then((res) => {
                //用于页面按钮权限判断，把权限加到路由的meta里面
                res.forEach(function(v){
                    let routeItem = router.match(v.path)
                    if(routeItem){
                        routeItem.meta.permission = v.permission ? v.permission : []
                        routeItem.meta.name = v.name
                    }
                })
                //菜单权限判断开始
                let isPermission = false
                console.log("进入权限判断")
                res.forEach(function (v) {
                    // 判断跳转的页面是否在权限列表中
                    if (v.path == to.fullPath) {
                        isPermission = true
                    }
                })
                // 没有权限时跳转到401页面
                if (!isPermission) {
                    next({path: "/error/403"})
                } else {
                    next()
                }
            })
        }
    } else { //没有登录
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
            console.log('该页面无需登录即可访问')
            next()
        } else {
            console.warn('当前未处于登录状态，请登录')
            next({path: '/login'})
        }

    }
})

router.afterEach(route => {
    LoadingBar.finish();
});

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
