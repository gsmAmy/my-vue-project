<template>
<div>
	<div class="top"><goback></goback></div>
	<user title="注册" @submitEvent="submit"></user>
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
			this.info.push({"username":this.username,"password":this.password,"islogin":0});
			sessionStorage.setItem("info",JSON.stringify(this.info));
	  }
  }
}
</script>

<style lang="less">
@import "../assets/less/login.less";

</style>