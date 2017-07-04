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
            user:'右边点击登录哦',
            isShow:false,
        }
    },
    created(){
         this.isLogin();
    },
    methods: {
        isLogin(){
            let info = sessionStorage.getItem("info") ? JSON.parse(sessionStorage.getItem("info")):'';
            let $this = this;
            Array.from(info).forEach(item => {
                if(item.islogin == 1){
                    $this.user = item.username+ ",欢迎您来到乐园" 
                }
            })            
        },
        showLogin(){
            this.isShow = !this.isShow;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/header.less";
</style>