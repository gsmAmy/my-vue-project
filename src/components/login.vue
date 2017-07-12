<template>
<div>
	<div class="top"><goback></goback></div>
	<user title="登录" @submitEvent="submit"></user>
	<foot></foot>
	<div class="reg_dialog" v-if="isSeen">
		<div>
			<p class="regsuccess">{{ loginText }}</p>
			<router-link to="/home">
				<p class="sure">确定</p>
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
      loginText:'',
	  info:[],
    }
  },
  components: {
      foot,
  },
  methods:{
	  submit(){
        let info = sessionStorage.getItem("info")?JSON.parse(sessionStorage.getItem("info")) : '';
        let $this = this;
        $this.isSeen = true;
        Array.from(info).forEach(item => {
            if($this.username == item.username && $this.password == item.password ){
                item.islogin = 1;
                $this.loginText = "登录成功"
            }else{
                $this.loginText = "登录失败，用户名或密码错误"
            }
        })
        sessionStorage.setItem("info",JSON.stringify(info));
	  }
  }
}
</script>

<style lang="less">
@import "../assets/less/login.less";
</style>