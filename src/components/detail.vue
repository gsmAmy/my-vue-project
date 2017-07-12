<template>
    <div class="detail-wrap">
        <div>{{fruitId}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            fruitId:''
        }
    },
    created(){
        let id = this.$route.query.id;
        this.fruitId = id;
    }
}
</script>
<style>

</style>


