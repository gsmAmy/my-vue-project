<template>
    <div class='warp'>
        <isheader></isheader>
        <div class="layout" v-for="(item,index) in imgList" v-bind:key="index">
            <div class="img-titile">{{ item.titlt }}</div>
            <div class="flex">
                <p><img :src="item.src0"></p>
                <p>
                    <img :src="item.src1">
                    <img :src="item.src2">
                </p>
                <p>
                    <img :src="item.src3">
                    <img :src="item.src4">
                </p>
            </div>
        </div>
        <isfoot></isfoot>
    </div>
</template>

<script>
import isheader from './common/header.vue'
import isfoot from './common/foot.vue'
export default {
    data(){
        return {
            imgList:[
                 {
                    titlt:"属于两个人的浪漫",
                    src0:"//p1.meituan.net/codeman/ce03994408f4e0d427a3fb76b32252ce23018.jpg",
                    src1:"//p1.meituan.net/codeman/152d9a124cfedac329bd12aa998f54b226058.jpg",
                    src2:"//p1.meituan.net/codeman/687cdce5d29223816cbc7b5ad51420ad18720.jpg",
                    src3:"//p1.meituan.net/codeman/d9234bf06768e556d1eb279c01bbe21825094.jpg",
                    src4:"//p0.meituan.net/codeman/9ef0ad300b77b44ab78408a18be00eba13154.jpg"
                },
                {
                    titlt:"最甜蜜的负担",
                    src0:"//p1.meituan.net/codeman/985ee0d9469f59685cde3436252e30da26595.jpg",
                    src1:"//p1.meituan.net/codeman/b9499c5462d34b325fe42700023f283620169.jpg",
                    src2:"//p1.meituan.net/codeman/9a47e8a5739caf8732b82c13045657f019406.jpg",
                    src3:"//p1.meituan.net/codeman/e2b607655b102f4c99c0c49b91b81a7a9669.jpg",
                    src4:"//p0.meituan.net/codeman/26626a0a68ea266bf54cd2a322f443f220879.jpg"
                },
                {
                    titlt:"亲密无间的闺蜜",
                    src0:"//p0.meituan.net/codeman/dd949ee7a896b928560af95d0f61c33824349.jpg",
                    src1:"//p1.meituan.net/codeman/687cdce5d29223816cbc7b5ad51420ad18720.jpg",
                    src2:"//p1.meituan.net/codeman/b8039e5fc2a98633e715e129fd9cd6a513262.jpg",
                    src3:"//p0.meituan.net/codeman/b662affbed230c6434145c7d5ccfe54115882.jpg",
                    src4:"//p1.meituan.net/codeman/6ea87d755ee0e6ad480b972b0c09d3f419054.jpg"
                }
            ]
        }
    },
    components: {
        isheader,
        isfoot
    },
    created(){
    }
}
</script>

<style>
.img-titile{
    color:#666;
    font-size:16px;
    padding:0.3rem .2rem
}
.flex{
    display:flex;
    height:4.8rem;
    padding:0 0.2rem;
}
.flex p{
    flex-grow:1;
    max-width:2.5rem;
}
.flex p img{
    width:100%;
}
</style>
