<template>
  <div class="application">
    <h3 class="header-title">申请信息</h3>
    <div class="one">
      <span class="name">产品名称</span>
      <el-select v-model="data1.projName" filterable placeholder="请选择" disabled>
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="abbreviation" disabled="">产品简称</span>
      <el-input v-model="data1.projShortName" placeholder="请输入内容" disabled>

      </el-input>
      <span class="type">产品类型</span>
      <el-select v-model="data1.projType" placeholder="公募" disabled>
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
      <el-select v-model="data1.projMgrName" filterable placeholder="请选择" disabled>
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="three">
      <span class="explain">说明</span>
      <el-form ref="ruleForm" label-width="70px" class="demo-ruleForm">
        <el-form-item  prop="desc" >
          <el-input type="textarea" style="width:90%" v-model="data1.content"
                    :disabled="true"></el-input>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        desc:"",
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
        value9: '',
        data1: {
          prodId:"",
          projName: "",
          projShortName: "",
          projType: "",
          projMgrAccount: "",
          projMgrName: "",
          content:""
        }
      }
    },
    created(){
      // 获取申请信息的一栏的数据
        var _this=this;
        axios.get('http://localhost/api/v1/demo/workflow/approve/query',{
            params:{dataCode:localStorage.getItem("input1")}
        })
        .then(function (res) {
          _this.data1=res.data.data;
        })
        .catch(function (error) {
        })
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.application{
  width: 99.5%;
  margin: 10px auto;
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
  }
  .el-input{
    float: left;
  }
  .el-select{
    width:17%;
  }
}
.content{
  width: 80%;
  height: 50px;
  margin-bottom: 10px;
  background-color: #eef1f6;
}


</style>
