<template>
<div>
	<div class="top"><goback></goback></div>
    <div class="demo-infinite-container">
		<h3>登录</h3>
		<input type="text" name="username" class="username" placeholder="请输入用户名" v-model="username">
		<input type="text" name="password" class="password" placeholder="请输入密码"  v-model="password  ">
		<button class="register"v-on:click="submit">登录</button>
    </div>
	<foot></foot>
    <mydialog v-bind:message="loginText" action-name="确定" v-if="isSeen" v-on:sureButtonFn = 'toPage'></mydialog>
</div>
</template>
<script>
import foot from './common/foot.vue'
export default {
  data () {
    return {
	  username:'',
	  password:'',
	  isSeen:false,
	  info:[],
    }
  },
  created(){
    //   bus.$on('chuan',function(id){
    //     console.log(id);
    //   })
  },
  components: {
      foot,
  },
  computed:{
      loginText(){
          return (this.$store.state.isLogin == 1 && this.$store.state.username == this.username)? '登录成功':'登录失败，用户名或密码错误'
      }
  },
  methods:{
	  submit(){
        this.isSeen = true;
        this.$store.commit('inLogin',{username:this.username,password:this.password});
      },
      toPage(){
          if(this.loginText == '登录成功'){
              this.$router.push({path:'/home'});
          }else{
              this.isSeen = false;
          }
      }
  },
}
</script>

<style lang="less">
@import "../assets/less/login.less";
</style>