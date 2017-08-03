<template>
  <div class="basic">
    <h3 class="header-title">基础信息</h3>
    <div class="one">
      <div class="box_one">
        <span class="num">编号</span>
        <el-input
          placeholder="请输入内容"
          v-model="data.dataCode"
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
          v-model="data.sysCreatorTime"
          :disabled="true">
        </el-input>
      </div>
    </div>

    <div class="one">
      <div class="box_one">
        <span class="num">申请人</span>
        <el-input
          placeholder="请输入内容"
          v-model="data.sysCreatorName"
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
          v-model="data.orgChName"
          :disabled="true">
        </el-input>
      </div>
    </div>


    <div class="one">
      <span class="title">
        标题
      </span>
      <el-input v-model="data.title" placeholder="请输入内容" disabled>
      </el-input>
    </div>


    <div class="one">
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
        data:{
          dataCode:"",
          sysCreatorTime: "",
          sysCreatorAccount: "",
          sysCreatorName: "",
          dcOrgCode: "",
          orgChName: "",
          title: "" ,
          label:""
        },

        options5: [],
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
        var currentdate = date.getUTCFullYear() + seperator1
          + month + seperator1 + strDate
        return currentdate;
      }
    },
    created(){
      this.input2 = this.getNowTime();
      var _this=this;
      // /system/bpm/workflow/query/查询基础信息 api
      axios.get('http://10.0.192.40:8081/system/bpm/workflow/query')
        .then(function (res) {
            //            将 res.data.data的 label 赋值给 options5
          var label=res.data.data.label;
          label=label.split(",");
          for (var i=0;i<label.length;i++){
              _this.options5.push({value:"",label:""});
              _this.options5[i].value=label[i];
              _this.options5[i].label=label[i];
          }
           _this.data=res.data.data;
          //      将编号存到 localStorage
          localStorage.setItem("dataCode1",_this.data.dataCode)
        })
        .catch(function (error) {
          console.log(error)
        })


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .basic {
    width: 99.5%;
    margin: 10px auto;
    height: 300px;
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
    .one {
      height: 40px;
      margin-top: 20px;
      .title{
        float: left;
        font-size: 16px;
        line-height: 36px;
        width: 6.5%;
        display: inline-block;
      }
      .label{
        float: left;
        font-size: 16px;
        line-height: 36px;
        width: 6.5%;
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
          width: 20%;
          display: inline-block;
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
