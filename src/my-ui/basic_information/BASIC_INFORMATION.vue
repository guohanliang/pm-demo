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
        <img id="barCodeImg" :src="src">
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
      <el-input v-model="input" placeholder="请输入内容" @blur="lose"></el-input>
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
        src: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input: '标题',
        options5: [],
        value10: []
      }
    },
    methods: {
        lose(){     //标题失去焦点
          localStorage.setItem("businessTitle", this.input);                    //把标题存入localStroage
        }
    },
    created(){
      var that = this;

      axios.get('http://localhost/api/v1/system/bpm/datacode/add', {  //生成流程编号和时间
        params: {
          procTypeCode: 'P900',
        }
      })
        .then(function (res) {
//          console.log(res.data.data.dataCode);
//          console.log(res.data.data.date);
          that.input1 = res.data.data.dataCode;                   //编号
          localStorage.setItem("dataCode", that.input1);                    //把编号存入localStroage
//          console.log(localStorage.getItem("dataCode"))
          that.src = 'http://localhost/api/v1/system/bpm/barcode/create?strBarCode=' + that.input1 + '';  //拼接图片路径
          that.input2 = res.data.data.date;                       //时间
        })
        .catch(function (error) {
          console.log(error);
        });

      axios.get('http://localhost/api/v1/system/user/loginuser/info')//查询当前登录用户
        .then(function (res) {
//            console.log(res)
//          console.log(res.data.data);
          that.input3 = res.data.data.chName;                   //申请人
          that.input4 = res.data.data.orgChName;                //申请人部门
        })
        .catch(function (error) {
          console.log(error);
        });


      axios.get('http://localhost/api/v1/system/label/query', {           //查询标签信息
        params: {
          searchword: '',
        }
      })
        .then(function (res) {
//            console.log(res.data.data.labels);
          var label = res.data.data.labels;
          for (var i = 0; i < label.length; i++) {
            that.options5.push({value: "", label: ""});
            that.options5[i].value = label[i];
            that.options5[i].label = label[i];
          }
          that.data = res.data.data;
          that.data = res.data.data;
//          console.log(that.value10)
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
      .title {
        float: left;
        font-size: 16px;
        line-height: 36px;
        width: 6%;
        padding-left: 10px;
        display: inline-block;
      }
      .label {
        float: left;
        font-size: 16px;
        line-height: 36px;
        width: 6%;
        padding-left: 10px;
        display: inline-block;
      }
      .label-con {
        width: 80%;
        height: 36px;
        float: left;
        position: relative;
        .el-select {
          width: 100%;
        }
        .el-input {
          position: relative;
        }
      }
      .el-input {
        width: 80%;
      }
      .el-select .el-input__inner {
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
      .department {
        width: 20%;
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




