<template>
  <div class="righttop">
    <img src="../../assets/touxiang.jpg"/>
    <span class="name">name</span>
    <i class="el-icon-edit one"></i>
    <i class="el-icon-share two"></i>
    <span class="time">2017/06/21</span>
    <a href="#">退出</a>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .righttop{
    width:calc(100vw - 280px);
    background: #324157;
    height:100px;
    position: absolute;
    top:0;
    right:0;
  }
  img{
    width:50px;
    height: 50px;
    position: absolute;
    top:20px;
    left:20px;
    border-radius:50%;
  }
  .name{
    color: #fff;
    position: absolute;
    top:40px;
    left:100px;
  }
  .one{
    position: absolute;
    top: 40px;
    left:180px;
    color: #fff;
  }
  .two{
    position: absolute;
    top: 40px;
    left:220px;
    color: #fff;
  }
  .time{
    position: absolute;
    right: 80px;
    top:40px;
    color: #fff;
  }
  a{
    position: absolute;
    right:20px;
    top:40px;
    text-decoration: none;
    color: deepskyblue;
  }
</style>
