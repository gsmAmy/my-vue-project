<template>
    <div class="header">
        <img src="http://pic2.womai.com/upload/601/603/606/64306/280374/82800/570028/623690_1_pic500_2211.JPG">
        <span class="welcome">{{ user }}</span>
        <span class="extend"@click="showLogin">
            <i></i>
            <div class="login" v-if="isShow">
                <p @click='dealLogin'>{{loginState}}</p>
                <router-link to="/register">
                    <p>注册</p>
                </router-link>
            </div>
        </span>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
    data(){
        return{
            isShow:false,
        }
    },
    created(){
    },
    methods: {
        showLogin(){
            this.isShow = !this.isShow;
        },
        dealLogin(){
            if(this.$store.state.username){
                this.$store.commit('outLogin')
            }else{
                this.$router.push({path:'/login'})
            }
        }
    },
    computed:{
        /* user(){
            return  this.username ? this.username  + ',欢迎您来到乐园':'右边点击登录哦';
        }, */
        loginState(){
            return this.username ? '退出登录':'登录'
        },
        //
        /**mapState将store中的属性映射到组件中，可以直接this.username 代替 this.$store.state.
         * 写法② ...mapState({username:state=>state.username})
         */
        ...mapState(['username']),
        /* 可以直接如上user()写法，本写法纯属练习下写法② */
        ...mapState({
            user:state=>{
                return state.username ? state.username  + ',欢迎您来到乐园':'右边点击登录哦';
            }
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/header.less";
</style>