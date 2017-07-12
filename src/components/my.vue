<template>
    <div class="my_wrap">
        <router-link to="/login">
            <div class="top"><i></i>点击登录</div>
        </router-link>
        <router-link to="/register">
            <div class="my_info my_collect"><i></i><span>注册</span><em></em></div>
        </router-link>
        <router-link to="/mycollect">
            <div class="my_info my_collect"><i></i><span>我的收藏</span><em></em></div>
        </router-link>
        <div class="my_info my_message"><i></i><span>我的消息</span><em></em></div>
        <foot></foot>
    </div>
    
</template>
<script>
import foot from './common/foot.vue'
export default {
     components: {
      foot
  },
}
</script>

<style scoped>
.top{
    width:100%;
    height:3.3rem;
    text-align: center;
    background: url("../assets/images/my_bg.jpg") no-repeat;
    /*background: #388EFF;*/
    background: linear-gradient(to right, #0af, #0085ff); /* 标准的语法 */
    background-size: cover;
    border-bottom:1px solid #dcdcdc;
    color:#fff;
    position: relative;
    padding-top:1.8rem;
    box-sizing: border-box;
    font-size: 16px;
}
.top i{
    background: url("../assets/images/yl.png");
    background-size:contain;
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


