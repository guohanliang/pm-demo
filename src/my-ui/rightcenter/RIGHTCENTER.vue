<template>
  <div class="rightcenter">
    <span class="xian"></span>
    <span class="neirong">系统参数</span>
    <div class="yanzheng">
      <el-button class="btn1" type="primary" size="small">新建</el-button>
      <el-button class="btn2" type="primary" size="small">编辑</el-button>
      <el-button class="btn3" type="primary" size="small">查看</el-button>
      <el-button class="btn4" type="primary" size="small">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rightcenter{
    background: #fff;
    width:90%;
    height:50px;
    margin-top: 120px;
    margin-left:40px;
    border-bottom:2px solid gray;
  }
  .xian{
    border-left:3px solid deepskyblue;
    float: left;
    height:20px;
    margin-top: 15px;

  }
  .neirong{
    font-size:18px;
    float: left;
    margin-left:15px;
    margin-top:10px;
  }
  .yanzheng{
    float: right;
    margin-right: 20px;
    height:50px;
  }
  .btn1{
    float: left;
    margin-top:10px;
  }
  .btn2{
    float: left;
    margin-left: 15px;
    margin-top:10px;
  }
  .btn3{
    float: left;
    margin-left: 15px;
    margin-top:10px;
  }
  .btn4 {
    float: left;
    margin-left: 15px;
    margin-top:10px;
  }
</style>
