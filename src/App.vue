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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
	font-size:14px;
	margin:0;
	padding:0;
}
h1, h2 {
  font-weight: normal;
}
ul,p{
  list-style-type: none;
  padding: 0;
  margin:0;
}
a{
    text-decoration:none;
}
em,i,a{
  font-style: normal;
}
</style>
