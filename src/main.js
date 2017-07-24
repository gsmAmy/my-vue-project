// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
import MuseUI from 'muse-ui'
import ls from 'store'
import myplus from './components'
import Vuex from 'vuex'
Vue.use({
    install(Vue) {
        Vue.prototype.$Axios = axios;
        Vue.prototype.$ls = ls;
    }
})
Vue.use(MuseUI);
Vue.use(myplus);
Vue.use(Vuex);
const store = new Vuex.Store({
        state: {
            username: '',
            password: '',
            registerInfo: []
        },
        mutations: {
            inLogin(state, params) {
                let info = state.registerInfo ? state.registerInfo : '';
                Array.from(info).forEach(item => {
                    if (params.username == item.username && params.password == item.password) {
                        //保存信息到store中,便于其他组件取用
                        state.username = item.username;
                        state.password = item.password;
                    }
                })
            },
            registerFn(state, params) {
                //保存注册用户信息
                state.registerInfo.push({ username: params.username, password: params.password });
            }
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})