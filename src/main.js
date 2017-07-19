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
            isLogin: 0
        },
        mutations: {
            inLogin(state, params) {
                let info = sessionStorage.getItem("info") ? JSON.parse(sessionStorage.getItem("info")) : '';
                Array.from(info).forEach(item => {
                    if (params.username == item.username && params.password == item.password) {
                        item.islogin = 1;
                        state.username = item.username;
                        state.isLogin = 1;
                        sessionStorage.setItem('username', state.username);
                    }
                })
                sessionStorage.setItem("info", JSON.stringify(info));
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