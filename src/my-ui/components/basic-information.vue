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
        <img id="barCodeImg" :src="src">
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
          v-model="data.applicantName"
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
      <span class="label" >
        标签
      </span>
      <div class="label-con">
        <el-select
          v-model="value10"
          @change="tag($event)"
          multiple
          filterable
          allow-create
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options6"
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
        tag1:"",
        dataCode:"",
        src: '',
        data:{
          dataCode:"",
          sysCreatorTime: "",
          sysCreatorAccount: "",
          applicantName: "",
          dcOrgCode: "",
          orgChName: "",
          title: "" ,
          label:""
        },

        options6: [],
        value10: []
      }
    },
    methods: {
      tag(m){
        this.tag1=m.join();
        localStorage.setItem("tag",this.tag1);
      }
    },
    created(){
      //获取从列表页存储的 dataCode
      this.dataCode=localStorage.getItem("input1");

      var _this=this;
      // /system/bpm/workflow/query/查询基础信息 api
      axios.get('http://localhost/api/v1/system/bpm/bpmcontroller/queryworkflowbasicsInfo',
        {
          params:{dataCode:_this.dataCode}
        })
        .then(function (res) {
            //       将 res.data.data的 label 赋值给 options6
          _this.data=res.data.data;

          //      将编号存到 localStorage
          localStorage.setItem("dataCode1","P256-1706261015780")
        })
        .catch(function (error) {
          console.log(error)
        })

        //生成流程编号和时间
      axios.get('http://localhost/api/v1/system/bpm/bpmcontroller/createdatacode', {
        params: {
          procTypeCode: 'P990',
        }
      })
        .then(function (res) {
          //  console.log(res.data.data.dataCode);
          //  console.log(res.data.data.date);
          _this.input1 = res.data.data.dataCode;
          //编号
          localStorage.setItem("dataCode", _this.input1);                 //把编号存入localStroage

          _this.src = 'http://localhost/api/v1/system/bpm/bpmcontroller/createbarcode=' + _this.input1 + '';  //拼接图片路径
          _this.input2 = res.data.data.date;          //时间
        })
        .catch(function (error) {
          console.log(error);
        });

      //查询标签信息
      axios.get('http://localhost/api/v1/system/label/labelcontroller/query-label', {
        params: {
          searchword: '',
        }
      })
        .then(function (res) {
          //   console.log(res.data.data.labels);
          var label = res.data.data.labels;
          for (var i = 0; i < label.length; i++) {
            _this.options6.push({value: "", label: ""});
            _this.options6[i].value = label[i];
            _this.options6[i].label = label[i];
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
          width: 95%;
          img {
            width: 100%;
            height: 100%;
          }
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
