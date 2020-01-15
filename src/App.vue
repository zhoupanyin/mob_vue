<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="头部"></mt-header>
    <!-- 主组件 -->
    <router-view></router-view>
    <!-- 底部 -->
    <mt-tabbar>
    <mt-tab-item id=""><router-link class="tabbar" to="/">首页</router-link></mt-tab-item>
    <mt-tab-item id=""><router-link class="tabbar" to="/Recommend">推荐</router-link></mt-tab-item>
    <mt-tab-item id=""><router-link class="tabbar" to="/Classify">分类</router-link></mt-tab-item>
    <mt-tab-item id=""><router-link class="tabbar" to="/Chat">客服</router-link></mt-tab-item>
    <mt-tab-item id=""><router-link class="tabbar" to="/Personal">个人中心</router-link></mt-tab-item>
    </mt-tabbar> 
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
body{
  margin:0px;
  padding: 0px;
}
.mint-header{
  background-color: #2c3e50;
}
.mint-header-title{
  font-size: 20px;
  color:aqua;
}
.tabbar{
  text-decoration:none;
  color:aqua;
}
.mint-tab-item{
  height: 20px;  
}
.mint-tab-item .mint-tab-item-label{
  line-height: 1.5;
  font-size: 16px; 
}
.mint-tabbar{
  background-color: #2c3e50;
}
</style>
