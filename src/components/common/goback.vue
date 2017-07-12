<template>
  <i class="previous-page" @click="goPrevious"></i>
</template>
<script>
export default {
    data(){
        return {
            num:"22"
        }
    },
    methods:{
        goPrevious(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less">
    .previous-page{
        display: inline-block;
        width:0.49rem;
        height:0.49rem;
        background:url("../../assets/images/icon-return.png");
        background-size: contain;
        position: absolute;
        left:0.1rem;;
        top:0.26rem;
    }
</style>
