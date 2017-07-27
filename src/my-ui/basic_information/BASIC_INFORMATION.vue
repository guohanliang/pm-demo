<template>
  <div class="basic">
    <h3 class="title">基础信息</h3>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: 'P990-170725102421345',
        input2: '',
        input3: '张三'
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
      this.input2 = this.getNowTime()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .basic {
    width: 100%;
    height: 300px;
    background: white;
    border: 1px solid black;
    margin-top: 150px;
    .title {
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
      margin-top: 10px;
      .box_one {
        width: 30%;
        float: left;
        .num {
          font-size: 16px;
          line-height: 36px;
          width: 50px;
          display: inline-block;
        }
        .el-input, .el-input__inner {
          width: 70%;
        }
      }
      .box_two {
        width: 40%;
        float: left;
        .code {
          display: inline-block;
          height: 36px;
          width:80%;
          margin-left: 40px;
          background: red;
        }
      }
      .box_three {
        width: 30%;
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
    .two {
      height: 40px;
      margin-top: 10px;
      .box_one {
        width: 30%;
        float: left;
        .num {
          font-size: 16px;
          line-height: 36px;
          width: 50px;
          display: inline-block;
        }
        .el-input, .el-input__inner {
          width: 70%;
        }
      }
      .box_two {
        width: 40%;
        float: left;
        .code {
          display: inline-block;
          height: 36px;
          width:80%;
          margin-left: 40px;
          background: red;
        }
      }
      .box_three {
        width: 30%;
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
