<template>
<div>
		<div class="top"><goback></goback></div>
		<div class="demo-infinite-container">
				<h3 @click="test">注册</h3>
				<input type="text" name="username" class="username" placeholder="请输入用户名"v-model="username">
				<input type="text" name="password" class="password" placeholder="请输入密码"v-model="password">
				<button class="register"v-on:click="submit">注册</button>
		</div>
		<foot></foot>
		<mydialog message="注册成功" action-name="去登录" v-if="isSeen" v-on:sureButtonFn = 'toPage'></mydialog>
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
	  info:[]
    }
  },
  components: {
      foot,
  },
  methods:{
	  submit(){
			this.isSeen = true;
			this.$store.commit('registerFn',{
				username:this.username,
				password:this.password
			});
		},
		toPage(){
			this.$router.push({path:'/login'});
		},
		test(){
			bus.$emit('chuan',1);
		}
  }
}
</script>

<style lang="less" scoped>
@import "../assets/less/login.less";

</style>