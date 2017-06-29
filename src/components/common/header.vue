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
                    $this.user = item.username+ ",欢迎您来到水果乐园" 
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
<style scoped>
.header{
    padding:0.1rem .3rem 0.1rem 0.1rem;
    background:#8cb91e;
    color:#fff;
    display:flex;
    display:-webkit-flex;
    align-items:center; 
}
.header img{
    width:0.8rem;
    height:0.8rem;
}
.header .welcome{
    flex-grow:1;
    text-align:center;
    font-size:16px;
}
.header .extend:after,.extend:before,.extend i{
    content:'';
    display:inline-block;
    width:4px;
    height:4px;
    border-radius:2px;
    background:#fff;
    margin-left:3px;
}
.login{
    position:absolute;
    top:1rem;
    right:0;
    background: #F0EEF0;
}
.login p{
    padding:0.2rem 0.5rem;
    color: #8cb91e;
}
</style>