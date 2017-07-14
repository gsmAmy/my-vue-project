 <template>
    <div class="reg_dialog">
		<div>
			<p class="regsuccess">{{message}}</p>
			<p class="sure" @click = "sureFn">{{actionName}}</p>
		</div>
	</div>
 </template>
 <script>
 export default {
	 props: ['message','actionName'],
	 methods: {
		sureFn(){
			this.$emit('sureButtonFn');
		}
	 }
 }
 </script>
<style lang="less">
@import "../../assets/less/login.less";
</style>
 