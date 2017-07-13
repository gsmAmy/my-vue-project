 <template>
    <div class="reg_dialog">
		<div>
			<p class="regsuccess">{{message}}</p>
			<router-link to="/home">
				<p class="sure">{{actionName}}</p>
			</router-link>
		</div>
	</div>
 </template>
 <script>
 export default {
     props:['message','actionName']
 }
 </script>
<style lang="less">
@import "../../assets/less/login.less";
</style>
 