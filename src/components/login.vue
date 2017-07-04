<template>
<div>
	<div class="top"></div>
	<div class="demo-infinite-container">
		<h3>登录</h3>
		<input type="text" name="username" class="username" placeholder="请输入用户名" v-model="username">
		<input type="text" name="password" class="password" placeholder="请输入密码" v-model="password">
		<!--<p class="produce">个人介绍</p>
		<textarea rows="3" placeholder="请输入少于30字" maxlength="30" class="txtarea"></textarea>-->
		<button class="register" v-on:click="submit">登录</button>
    </div>
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
      num: 10,
      loading: false,
      scroller: null,
	  username:'',
	  password:'',
	  isSeen:false,
      loginText:'',
	  info:[]
    }
  },
  components: {
      foot
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