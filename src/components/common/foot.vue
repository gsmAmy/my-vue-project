<template>
	<div class="foot">
		<router-link to="/home">
			<span>主页</span>
		</router-link>
		<router-link to="/collect">
			<span>记录</span>
		</router-link>
		<a @click="linkTo"><span>我</span></a>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	created(){

	},
	methods: {
		linkTo(){
			if(this.username){
				this.$router.push({path:'/my',query:{username:this.username}})
			}else{
				this.$router.push({path:'/login'})
			}
		}
	},
	computed:{
		...mapState({
			username:state=>state.username
		})
	}
}
</script>

<style>
.foot{
  display:flex;
  display:-webkit-flex;
  align-items:stretch;
  height:0.8rem;
  width:100%;
  background:#65A031;
  position:fixed;
  bottom:0;
}
.foot a{
  flex-grow:1;
  text-align:center;
  color:#fff;
  font-size:16px;
  line-height:0.8rem;
}
.foot a + a{
  border-left:1px solid #dcdcdc;
}
</style>
