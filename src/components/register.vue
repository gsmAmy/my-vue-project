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

<style lang="less">
@import "../assets/less/login.less";

</style>