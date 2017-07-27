<template>
  <div id="app">
    <my-left></my-left>
    <my-nav></my-nav>
    <my-righttop></my-righttop>
    <router-view></router-view>
  </div>
</template>

<script>


export default {

}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  body{
    background: #f8f8fa;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
