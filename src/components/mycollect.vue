<template>
<div class="collect_wrap">
    <div class="title">我的收藏</div>
    <ul class="tab-content">
        <template>
            <li v-for="(item,index) in listData" v-bind:key="index">
                <img v-bind:src="item.url">
                <div class="introduce">
                    <p>{{item.name}}</P>
                    <span>¥{{item.current_price}}</span>
                </div>
                <i v-bind:class="[item.islike?'i_likes':'i_like']" @click="collect(item)"></i>
            </li>
        </template>
    </ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            listData:[]
        }
    },
    created(){
        this.getCollectData()
    },
    methods:{
        getCollectData(){
           this.listData = this.$ls.get("collectObj");
        }
    }
}
</script>

<style>
 /*@import './assets/less/commonlist.less';*/
 .collect_wrap .title{
    height:1rem;
    line-height: 1rem;
    color:#fff;
    font-size: 16px;
    text-align: center;
    background: #8cb91e;
 }
 .tab-content {
    padding: 0 0.1rem;
}

.tab-content li {
    display: flex;
    display: -webkit-flex;
    border-bottom: 1px solid #dcdcdc;
    padding: 0.1rem 0;
    position: relative;
}

.tab-content li img {
    width: 1.5rem;
    height: 1.5rem;
}
.tab-content li i{
    display: inline-block;
    width:0.3rem;
    height:0.3rem;
    background-size: contain;
    position: absolute;
    right:0.3rem;
    bottom:0.9rem;
}
.i_like{
    background: url("../assets/images/i_like.png");
}
.i_likes{
    background: url("../assets/images/i_like_s.png");
}
.introduce {
    flex-grow: 1;
    padding-left: 0.3rem;
}

.introduce p {
    padding: 0.1rem 0;
}

.introduce span {
    position: absolute;
    right: 0.4rem;
    bottom: 0.2rem;
    font-size: 18px;
    color: #f63;
}
</style>




