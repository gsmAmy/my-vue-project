<template>
<div>
	<div class="top"></div>
	<div class="demo-infinite-container">
		<h3>注册</h3>
		<input type="text" name="username" class="username" placeholder="请输入用户名" v-model="username">
		<input type="text" name="password" class="password" placeholder="请输入密码" v-model="password">
		<!--<p class="produce">个人介绍</p>
		<textarea rows="3" placeholder="请输入少于30字" maxlength="30" class="txtarea"></textarea>-->
		<button class="register" v-on:click="submit">注册</button>
    </div>
	<foot></foot>
	<div class="reg_dialog" v-if="isSeen">
		<div>
			<p class="regsuccess">注册成功</p>
			<router-link to="/login">
				<p class="sure">去登录</p>
			</router-link>
		</div>
	</div>
</div>
</template>
<script>
import foot from './common/foot.vue'
export default {
  data () {
    return {
      num: 10,
      loading: false,
      scroller: null,
	  username:'',
	  password:'',
	  isSeen:false,
	  info:[]
    }
  },
  components: {
      foot
  },
  methods:{
	  submit(){
		this.isSeen = true;
		this.info.push({"username":this.username,"password":this.password,"islogin":0});
		sessionStorage.setItem("info",JSON.stringify(this.info));
	  }
  }
}
</script>

<style scoped>
input,textarea{
	margin:0;
	padding:0;
}
.top{
	width:100%;
	height: 2.8rem;
	background: url("../assets/top_bg.jpg") no-repeat;
	background-size: cover;
}
.demo-infinite-container{
	width:6rem;
	margin:0 auto;
	padding-top: 8%;
	text-align: center;
}
.username,.password,.register{
	width:100%;
	height:0.8rem;
	margin:0.1rem 0;
	padding:0 0.2rem;
	box-sizing: border-box;
	border:1px solid #e9e9e9;
}
.txtarea{
	width:100%;
	margin-top:0.2rem;
	border:1px solid #e9e9e9;
}
.produce{
	padding-top:0.5rem;
	font-size: 14px;
}
.register{
	background: #73c5ec;
	color:#fff;
	font-size:16px;
}
.reg_dialog{
	width: 100%;
	height:100%;
	background: rgba(0,0,0,0.5);
	position:fixed;
	top:0;
	left: 0;
	font-size:16px;
	text-align: center;
}
.reg_dialog div{
	width:6rem;
	background: #fff;
	margin:0 auto;
	margin-top:60%;
	padding: 0.2rem 0 0.5rem 0;
	border-radius: 3px
}
.regsuccess{
	padding:0.35rem 0;
	margin-bottom: 0.24rem;
	font-size:16px;
}
.sure{
	background: #73c5ec;
	width:2.5rem;
	height:0.75rem;
	line-height:0.75rem;
	border-radius: 5px;
	margin:0 auto;
	color:#fff;
}
</style>