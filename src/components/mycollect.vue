<template>
<div class="collect_wrap">
    <div class="title"><goback></goback>我的收藏</div>
    <ul class="tab-content">
        <router-link tag="li" :to="{ path:'/detail',query:{id:item.id} }" v-for="(item,index) in listData" v-bind:key="index">
            <a>
                <img v-bind:src="item.url">
                <div class="introduce">
                    <p>{{item.name}}</P>
                    <span>¥{{item.current_price}}</span>
                </div>
                <i v-bind:class="[item.islike?'i_likes':'i_like']" @click="collect(item)"></i>
            </a>
        </router-link>
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

<style lang="less">
 @import '../assets/less/commonlist.less';
 .collect_wrap .title{
    height:1rem;
    line-height: 1rem;
    color:#fff;
    font-size: 16px;
    text-align: center;
    background: #8cb91e;
    position: relative;
 }
 </style>

