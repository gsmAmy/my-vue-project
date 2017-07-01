<template>
	<div class="foot">
		<router-link to="/home">
			<span>主页</span>
		</router-link>
		<router-link to="/collect">
			<span>记录</span>
		</router-link>
		<router-link to="/my">
			<span>我</span>
		</router-link>
	</div>
</template>

<script>
export default {
	created(){

	},
	methods: {

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
