<template>
<div>
    <div class="demo-infinite-container">
		<h3>{{title}}</h3>
		<input type="text" name="username" class="username" placeholder="请输入用户名">
		<input type="text" name="password" class="password" placeholder="请输入密码">
		<button class="register"v-on:click="submit">{{title}}</button>
    </div>
    <div class="reg_dialog" v-if="isSeen">
		<div>
			<p class="regsuccess">注册成功</p>
			<router-link to="/login">
				<p class="sure">去登录</p>
			</router-link>
		</div>
	</div>
    <!-- <div class="reg_dialog" v-if="isSeen">
		<div>
			<p class="regsuccess">{{ loginText }}</p>
			<router-link to="/home">
				<p class="sure">确定</p>
			</router-link>
		</div>
	</div> -->
</div>
</template>
<script>
export default {
    props:['title','username','password'],
    methods:{
        submit(){
            this.$emit("submitEvent",{})
        }
    }
}
</script>

<style lang="less">
@import "../../assets/less/login.less";
</style>