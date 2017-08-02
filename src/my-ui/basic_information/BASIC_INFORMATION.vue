<template>
  <div class="basic">
    <h3 class="header-title">基础信息</h3>
    <div class="one">
      <div class="box_one">
        <span class="num">编号</span>
        <el-input
          placeholder="请输入内容"
          v-model="input1"
          :disabled="true">
        </el-input>
      </div>
    <div class="box_two">
      <span class="code">
        这里放一维码
      </span>
    </div>
      <div class="box_three">
        <span class="time">
        申请时间
      </span>
        <el-input
          placeholder="请输入内容"
          v-model="input2"
          :disabled="true">
        </el-input>
      </div>
    </div>


    <div class="one">
      <div class="box_one">
        <span class="num">申请人</span>
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          :disabled="true">
        </el-input>
      </div>
      <div class="box_two">
      <span class="department">
      </span>
      </div>
      <div class="box_three special">
        <span class="department">
        申请人部门
      </span>
        <el-input
          placeholder="请输入内容"
          v-model="input4"
          :disabled="true">
        </el-input>
      </div>
    </div>


    <div class="one for-center">
      <span class="title">
        标题
      </span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>


    <div class="one for-center">
      <span class="label">
        标签
      </span>
      <div class="label-con">
        <el-select
          v-model="value10"
          multiple
          filterable
          allow-create
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button>选择</el-button>
      </div>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        input1: 'P990-170725102421345',
        input2: '',
        input3: '张三',
        input4: '产品管理部',
        input:'标题',
        options5: [{
          value: 'AAA',
          label: 'AAA'
        }, {
          value: 'BBB',
          label: 'BBB'
        }, {
          value: 'CCC',
          label: 'CCC'
        }],
        value10: []
      }
    },
    methods: {
      getNowTime(){                                   //获取年月日
        var date = new Date();
        var seperator1 = "/";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if(month >=1 && month <= 9) {
          month = "0" + month;
        }
        if(strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getUTCFullYear() + seperator1 + month + seperator1 + strDate
        console.log(currentdate)
        return currentdate;
      }
    },
    created(){
      this.input2 = this.getNowTime();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .basic {
    width: 90%;
    margin: 10px;
    height: 300px;
    border: 1px solid black;
    margin-top: 20px;
    .header-title {
      font-size: 20px;
      color: red;
      border-bottom: 1px solid red;
      padding-top: 5px;
      padding-bottom: 10px;
      margin: 0;
      padding-left: 5px;
    }
    .one {
      height: 40px;
      margin-top: 20px;
      .title{
        float: left;
        font-size: 16px;
        line-height: 36px;
        width: 6%;
        padding-left: 10px;
        display: inline-block;
      }
      .label{
        float: left;
        font-size: 16px;
        line-height: 36px;
        width: 6%;
        padding-left: 10px;
        display: inline-block;
      }
      .label-con{
        width: 80%;
        height: 36px;
        float: left;
        position: relative;
        .el-select{
          width:100%;
        }
        .el-input{
          position: relative;
        }
      }
      .el-input{
        width: 80%;
      }
      .el-select .el-input__inner{
        width: 60%;
      }
      .box_one {
        width: 30%;
        float: left;
        .num {
          font-size: 16px;
          line-height: 36px;
          width: 19%;
          display: inline-block;
          padding-left: 10px;
        }
        .el-input, .el-input__inner {
          width: 70%;
        }
      }
      .department{
        width:20%;
      }
      .box_two {
        width: 33%;
        float: left;
        .code {
          display: inline-block;
          height: 36px;
          width:95%;
          background: red;
        }
      }
      .box_three {
        width: 33%;
        float: left;
        .time {
          font-size: 16px;
          line-height: 36px;
        }
        .el-input, .el-input__inner {
          width: 70%;
        }
      }
    }
  }


</style>
