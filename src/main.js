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
Vue.use({
    install(Vue) {
        Vue.prototype.$Axios = axios;
        Vue.prototype.$ls = ls;
    }
})
Vue.use(MuseUI);
Vue.use(myplus);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})