import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import collect from '@/components/collect'
import register from '@/components/register'
import login from '@/components/login'
import my from '@/components/my'
import mycollect from '@/components/mycollect'
import detail from '@/components/detail'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/collect',
            name: 'collect',
            component: collect
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/my',
            name: 'my',
            component: my
        },
        {
            path: '/mycollect',
            name: 'mycollect',
            component: mycollect
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        }
    ]
})