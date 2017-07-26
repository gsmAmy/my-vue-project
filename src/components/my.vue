<template>
    <div class="my_wrap">
        <myheader></myheader>
        <canvas id="canvas" wigth="200" height="200"></canvas>
        <div class="top"></div>
        <router-link to="/register">
            <div class="my_info my_collect"><i></i><span>注册</span><em></em></div>
        </router-link>
        <router-link to="/mycollect">
            <div class="my_info my_collect"><i></i><span>我的收藏</span><em></em></div>
        </router-link>
        <div class="my_info my_message"><i></i><span>我(id:{{$route.query.userid}})的消息</span><em></em></div>
        <foot></foot>
    </div>
    
</template>
<script>
import foot from './common/foot.vue';
import myheader from './common/header.vue';
export default {
    components: {
        foot,
        myheader
    },
    mounted(){
        this.init();
    },
    methods:{
    }
    
}
</script>

<style scoped>
.top{
    width:100%;
    height:3.3rem;
    text-align: center;
    background-size: cover;
    border-bottom:1px solid #dcdcdc;
    position: relative;
    padding-top:1.8rem;
    box-sizing: border-box;
    font-size: 16px;
}
.top i{
    background: url("../assets/images/yl.png") no-repeat center;
    background-size:60% 60%;
    position: absolute;
    top:1rem;
    left:50%;
    margin-left:-0.375rem;
}
.my_info{
    height:1rem;
    line-height:1rem;
    border-bottom:1px solid #dcdcdc;
    padding-left:0.2rem;
    position: relative;
    background: linear-gradient(to right,#E9E2E3,#F0EFEC);
}
.my_info i,.top i{
    display: inline-block;
    width:0.65rem;
    height:0.65rem;
    vertical-align: middle;
}
.my_info span{
    vertical-align: middle;
    padding-left:0.2rem;
}
.my_collect i{
    background: url("../assets/images/qz.png");
    background-size:contain;
}
.my_message i{
    background: url("../assets/images/cj.png");
    background-size:contain;
}
.my_info em{
    display: inline-block;
    width:12px;
    height: 12px;
    border-left:1px solid #999;
    border-top:1px solid #999;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    position: absolute;
    right:0.5rem;;
    top:0.35rem;
}
</style>


