<template>
  <div class="application">
    <h3 class="header-title">申请信息</h3>
    <div class="one">
      <span class="name">产品名称</span>
      <el-select v-model="value8" filterable placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="abbreviation">产品简称</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <span class="type">产品类型</span>
      <el-select v-model="value" placeholder="公募">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="two">
      <span class="manager">产品经理</span>
      <el-select v-model="value9" filterable placeholder="请选择">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="three">

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        input: '111',




        options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value8: '',




        options2: [{
          value: '选项1',
          label: '公募'
        }, {
          value: '选项2',
          label: '专户'
        }, {
          value: '选项3',
          label: '养老金产品'
        }, {
          value: '选项4',
          label: '社保'
        }],
        value: '',




        options3: [{
          value: '选项1',
          label: '王经理'
        }, {
          value: '选项2',
          label: '刘经理'
        }, {
          value: '选项3',
          label: '孙经理'
        }, {
          value: '选项4',
          label: '刘经理'
        }, {
          value: '选项5',
          label: '谭经理'
        }],
        value9: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.application{
  width: 90%;
  margin: 10px;
  height: 400px;
  border: 1px solid black;
  .header-title {
    font-size: 20px;
    color: red;
    border-bottom: 1px solid red;
    padding-top: 5px;
    padding-bottom: 10px;
    margin: 0;
    padding-left: 5px;
  }
  .one{
    width:100%;
    height: 40px;
    background: green;
    margin-top: 20px;
    .name{
      float: left;
      line-height: 40px;
      margin:0 10px;
      width:8%;
    }
    .abbreviation{
      float: left;
      line-height: 40px;
      margin:0 10px;
      width:8%;
    }
    .type{
      float: left;
      line-height: 40px;
      margin:0 10px;
      width:8%;
    }
  }
  .two{
    width:100%;
    height: 40px;
    background: deepskyblue;
    margin-top: 20px;
    .manager{
      float: left;
      line-height: 40px;
      margin:0 10px;
      width:8%;
    }
  }
  .three{
    width:100%;
    height: 70px;
    background: red;
    margin-top: 20px;
  }
  .el-input, .el-input__inner{
    width: 194px;
  }
  .el-input{
    float: left;
  }
  .el-select{
    width:17%;
  }
}


</style>
