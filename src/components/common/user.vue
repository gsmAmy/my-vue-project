<template>
	<div class="demo-infinite-container">
		<h3>{{title}}</h3>
		<input type="text" name="username" class="username" placeholder="请输入用户名">
		<input type="text" name="password" class="password" placeholder="请输入密码">
		<button class="register"v-on:click="submit">{{title}}</button>
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