<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
      this.initEvent();
  },
  methods: {
    initEvent(){
      var fontSize = document.body.clientWidth / 7.5 + 'px';
			document.documentElement.style.fontSize = fontSize;
    }
  }
}
</script>

<style lang="less">
@import "./assets/less/common.less";
</style>

