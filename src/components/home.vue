<template>
	<div class="wrap">
		<isheader></isheader>
		<tab>主页</tab>
		<isfoot></isfoot>
	</div>
</template>

<script>
import isheader from './common/header.vue'
import isfoot from './common/foot.vue'
import tab from './tab.vue'
export default {
	components:{
		isheader,
		isfoot,
		tab
	}
}
</script>

<style>

</style>