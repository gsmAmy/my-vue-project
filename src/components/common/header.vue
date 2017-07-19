<template>
    <div class="header">
        <img src="http://pic2.womai.com/upload/601/603/606/64306/280374/82800/570028/623690_1_pic500_2211.JPG">
        <span class="welcome">{{ user }}</span>
        <span class="extend" v-on:click="showLogin"><i></i></span>
        <div class="login" v-show="isShow">
            <router-link to='/login'>
                <p>登录</p>
            </router-link>
            <router-link to="/register">
			    <p>注册</p>
		    </router-link>
        </div>
    </div>
</template>

<script>
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
        }
    },
    computed:{
        user(){
            var username = sessionStorage.getItem('username');
            return username ? username  + ',欢迎您来到乐园':'右边点击登录哦';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/header.less";
</style>