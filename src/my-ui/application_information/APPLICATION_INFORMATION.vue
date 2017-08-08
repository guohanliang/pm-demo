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
      <el-input v-model="input1" placeholder="请输入内容"></el-input>
    </div>
    <div class="three">
      <span class="explain">说明</span>
      <my-bianji></my-bianji>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        input: '111',
        input1:'222',




        options1: [
          {
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
          },
          {
            value: '选项5',
            label: '医疗'
          },
        ],
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




      }
    },
    methods:{

    },
    created(){
      var that = this;
//      axios.get('http://10.0.192.40:8081/demo/workflow/product/query')       //查询产品信息
//        .then(function (res) {
//            console.log(res)
//          console.log(res.data.data.projects[0]);
//          var list = res.data.data.projects;
//          var arr = []
//            for (var i = 0 ; i < list.length ; i++) {
////              console.log(list[i].prodName);
//                 arr.push(list[i])
//              console.log(arr);
//            }
////          var label=res.data.data.projects.prodName;
////          for (var i=0;i<label.length;i++){
////            that.options1.push({value:"",label:""});
////            that.options1[i].value=label[i];
////            that.options1[i].label=label[i];
////          }
////          that.data=res.data.data;
////          console.log(that.value10)
//        })
//        .catch(function (error) {
//          console.log(error);
//        });

      axios.get('http://10.0.192.40:8081/demo/workflow/product/query', {    //查询产品信息
        params: {
          searchword:''
        }
      })
        .then(function (res) {
          console.log(res)
<<<<<<< HEAD
////          console.log(res.data.data.projects[0]);
//          var list = res.data.data.projects;
//
//          for (var i = 0 ; i < list.length ; i++) {
//            that.options1.push(list[i].prodName)
////              console.log(that.options1);
//          }
=======
//          console.log(res.data.data.projects[0]);
          var list = res.data.data.projects;
            for (var i = 0 ; i < list.length ; i++) {
                 that.options1.push(list[i].prodName)
//              console.log(that.options1);
            }
>>>>>>> 8e5fb98427f59fbc7f14b6180432636113f3d061
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
<<<<<<< HEAD
  .application{
    width: 90%;
    margin: 10px;
    padding-bottom: 20px;
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
      margin-top: 20px;
      .manager{
        float: left;
        line-height: 40px;
        margin:0 10px;
        width:8%;

        .el-input{
          float: left;
        }
      }
    }
    .three{
      width:100%;
      margin-top: 20px;
      .explain{
        float: left;
        margin:0 10px;
        width:8%;
        .el-select{
          width:17%;
        }
      }
    }
    .el-input, .el-input__inner{
      width: 18%;
    }
    .el-input{
      float: left;
    }
    .el-select{
      width:17%;
    }
  }
  .el-input, .el-input__inner{
    width: 17%;
=======
.application{
  width: 90%;
  margin: 10px;
  padding-bottom: 20px;
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
    margin-top: 20px;
    .manager{
      float: left;
      line-height: 40px;
      margin:0 10px;
      width:8%;
    }
    .el-input{
      width: 165px;
      .el-input__inner{
        width:100%;
      }
    }
  }
  .three{
    width:100%;
    margin-top: 20px;
    .explain{
      float: left;
      margin:0 10px;
      width:8%;
    }
  }
  .el-input, .el-input__inner{
    width: 18%;
>>>>>>> 8e5fb98427f59fbc7f14b6180432636113f3d061
  }
  .el-input{
    float: left;
  }
  .el-select{
    width:17%;
  }
<<<<<<< HEAD


=======
}
>>>>>>> 8e5fb98427f59fbc7f14b6180432636113f3d061


</style>
