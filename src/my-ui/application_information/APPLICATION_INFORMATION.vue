<template>
  <div class="application">
    <h3 class="header-title">申请信息</h3>
    <div class="one">
      <span class="name">产品名称</span>
      <el-select v-model="value8" filterable placeholder="请选择" @change="nihao($event)">
        <el-option
          v-for="(item,index) in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-bind:index="index"
        >
        </el-option>
      </el-select>
      <span class="abbreviation">产品简称</span>
      <el-select v-model="value7" filterable placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="type">产品类型</span>
      <el-select v-model="value6" filterable placeholder="请选择">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="two">
      <span class="manager">产品经理</span>
      <el-select v-model="value5" placeholder="请选择">
        <el-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
        input: '',

        options1: [],
        value8: '',

        options2: [],
        value7: '',

        options3: [],
        value6: '',

        options4: [],
        value5: '',

        prodId:'',
        prodMgrAccount:'',

        arr: [],

      }
    },
    methods: {
      nihao(m){
//        console.log(m)
        var arr = this.arr;
        for (var i = 0; i < arr.length; i++) {
          if (m == arr[i].prodName) {
            this.value7 = arr[i].prodShortName;
            this.value6 = arr[i].prodType;
            this.value5 = arr[i].prodMgrName;

            this.prodId = arr[i].prodId;
            this.prodMgrAccount = arr[i].prodMgrAccount;

            localStorage.setItem("prodName", this.value8);                  //把产品名称存入localStroage
            localStorage.setItem("prodShortName", this.value7);            //把产品简称存入localStroage
            localStorage.setItem("prodType", this.value6);                 //把产品类型存入localStroage
            localStorage.setItem("prodMgrName", this.value5);             //把产品经理存入localStroage

            localStorage.setItem("prodId", this.prodId);                  //把产品编码存入localStroage
            localStorage.setItem("prodMgrAccount", this.prodMgrAccount);                  //把产品编码存入localStroage
            break;

          }
        }
      }
    },

    created(){
      var that = this;

      axios.get('http://localhost/api/v1/demo/workflow/product/query', {    //查询产品信息

        params: {
          searchword: ''
        }
      })
        .then(function (res) {
//          console.log(res)
//          console.log(res.data.data.projects[0]);


          var label = res.data.data.projects;
          that.arr = label;
          for (var i = 0; i < label.length; i++) {
            that.options1.push({value: "", label: ""});
            that.options2.push({value: "", label: ""});
            that.options3.push({value: "", label: ""});
            that.options4.push({value: "", label: ""});

            that.options1[i].value = label[i].prodName;
            that.options1[i].label = label[i].prodName;

            that.options2[i].value = label[i].prodShortName;
            that.options2[i].label = label[i].prodShortName;

            that.options3[i].value = label[i].prodType;
            that.options3[i].label = label[i].prodType;

            that.options4[i].value = label[i].prodMgrName;
            that.options4[i].label = label[i].prodMgrName;

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

  .application {
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
    .one {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      .name {
        float: left;
        line-height: 40px;
        margin: 0 10px;
        width: 8%;
      }
      .abbreviation {
        float: left;
        line-height: 40px;
        margin: 0 10px;
        width: 8%;
      }
      .type {
        float: left;
        line-height: 40px;
        margin: 0 10px;
        width: 8%;
      }
    }
    .two {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      .manager {
        float: left;
        line-height: 40px;
        margin: 0 10px;
        width: 8%;

        .el-input {
          float: left;
        }
      }
    }
    .three {
      width: 100%;
      margin-top: 20px;
      .explain {
        float: left;
        margin: 0 10px;
        width: 8%;
        .el-select {
          width: 17%;
        }
      }
    }
    .el-input, .el-input__inner {
      width: 17%;
    }
    .el-input {
      float: left;
    }
    .el-select {
      width: 17%;
    }
  }


</style>
