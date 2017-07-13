/**
 * 引入需要全局注册的插件
 */
import goback from './common/goback.vue';
import user from './common/user.vue';
import mydialog from './common/dialog.vue'

/**
 * 把组件同意放到一个对象里面
 */
let mycomponents = {
    goback,
    user,
    mydialog
}

/**
 * 暴露出去一个install方法，install方法的第一个参数是Vue
 */
/**
 * 遍历你组件库上面的所有组件，一个个注册
 * 全局注册组件，是采用Vue.component方法
 * 此方法第一个参数是组件的名字，第二个参数是组件
 */
export default {
    install(Vue) {
        Object.keys(mycomponents).forEach(key => {
            Vue.component(key, mycomponents[key]);
        })
    }
}