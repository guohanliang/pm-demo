<template>
  <div class="sub">
    <el-button class="btn" @click="aaa">提交</el-button>
    <el-button class="draft" @click="bbb">存为草稿</el-button>
    <el-button class="cancel">取消</el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {}
    },
    methods: {
      aaa(){

        axios.get('http://localhost/api/v1/demo/workflow/approve/save', {    //保存申请信息
          params: {
            sysId: '',
            dataCode: localStorage.getItem("dataCode"),
            prodId: localStorage.getItem("prodId"),
            prodName: localStorage.getItem("prodName"),
            prodShortName: localStorage.getItem("prodShortName"),
            prodType: localStorage.getItem("prodType"),
            prodMgrName: localStorage.getItem("prodMgrName"),
            prodMgrAccount: localStorage.getItem("prodMgrAccount"),
            content: localStorage.getItem("content")
          }
        })
          .then(function (res) {
//            console.log(res);
//            console.log(1)
            localStorage.setItem("sysId", res.data.data.sysId);                    //把主键存入localStroage
            axios.get('http://localhost/api/v1/system/bpm/workflow/apply', {    //提交流程
              params: {
                dataCode: localStorage.getItem("dataCode"),
                businessCode: localStorage.getItem("sysId"),
                businessTitle: localStorage.getItem("businessTitle"),
              }
            })
              .then(function (res) {
//                console.log(2)
//                console.log(localStorage.getItem("sysId"));
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });


      },
      bbb(){
        axios.get('http://localhost/api/v1/demo/workflow/approve/save', {    //保存申请信息
          params: {
            sysId: '',
            dataCode: localStorage.getItem("dataCode"),
            prodId: localStorage.getItem("prodId"),
            prodName: localStorage.getItem("prodName"),
            prodShortName: localStorage.getItem("prodShortName"),
            prodType: localStorage.getItem("prodType"),
            prodMgrName: localStorage.getItem("prodMgrName"),
            prodMgrAccount: localStorage.getItem("prodMgrAccount"),
            content: localStorage.getItem("content")
          }
        })
          .then(function (res) {
//            console.log(res);
//            console.log(1)
            localStorage.setItem("sysId", res.data.data.sysId);                    //把主键存入localStroage
            axios.get('http://localhost/api/v1/system/bpm/workflow/draft/save', {    //保存草稿
              params: {
                dataCode: localStorage.getItem("dataCode"),
                businessCode: localStorage.getItem("sysId"),
                businessTitle: localStorage.getItem("businessTitle"),
              }
            })
              .then(function (res) {
//                console.log(2)
//                console.log(localStorage.getItem("sysId"));
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });


      }
    },
    created(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .sub {
    width: 90%;
    margin: 10px;
    border: 1px solid black;
    height: 60px;
    .el-button {
      margin-left: 9%;
      width: 20%;
      margin-top: 1%;
    }
  }
</style>
