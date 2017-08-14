<template>
  <div class="sub">
    <el-button class="btn" @click="aaa">提交</el-button>
    <el-button class="draft" @click="bbb">存为草稿</el-button>
    <el-button class="cancel" @click="ccc">取消</el-button>
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
        axios.get('http://localhost/api/v1/system/label/labelcontroller/save-label', {    //保存标签信息
          params: {
            dataCode: localStorage.getItem("input1"),
            labelName: localStorage.getItem("biaoqian")
          }
        })
          .then(function (res) {
//          console.log(localStorage.getItem("biaoqian"));
            axios.get('http://localhost/api/v1/demo/workflow/approve/save', {    //保存申请信息
              params: {
                sysId: '',
                dataCode: localStorage.getItem("input1"),
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
                axios.get('http://localhost/api/v1/system/bpm/bpmcontroller/saveapprover', {    //保存审批人
                  params: {
                    dataCode: localStorage.getItem("input1"),
                    approverInfo: '事前抄送_'+localStorage.getItem("事前抄送").substr(0,localStorage.getItem("事前抄送").length-1)+';' +'部门审批_'+localStorage.getItem("部门审批").substr(0,localStorage.getItem("部门审批").length-1)+';' +'公司签批_'+localStorage.getItem("公司签批").substr(0,localStorage.getItem("公司签批").length-1)+';' +'承办_'+localStorage.getItem("承办").substr(0,localStorage.getItem("承办").length-1)+';' +'事后抄送_'+localStorage.getItem("事后抄送").substr(0,localStorage.getItem("事后抄送").length-1)
                  }
                })
                  .then(function (res) {
                    axios.get('http://localhost/api/v1/system/bpm/bpmcontroller/applyworkflow', {    //提交流程
                      params: {
                        dataCode: localStorage.getItem("input1"),
                        businessCode: localStorage.getItem("sysId"),
                        businessTitle: localStorage.getItem("businessTitle"),
                      }
                    })
                      .then(function (res) {
//                console.log(2)
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
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
        axios.get('http://localhost/api/v1/system/label/labelcontroller/save-label', {    //保存标签信息
          params: {
            dataCode: localStorage.getItem("input1"),
            labelName: localStorage.getItem("biaoqian")
          }
        })
          .then(function (res) {
          console.log(localStorage.getItem("biaoqian"));
            axios.get('http://localhost/api/v1/demo/workflow/approve/save', {    //保存申请信息
              params: {
                sysId: '',
                dataCode: localStorage.getItem("input1"),
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
                axios.get('http://localhost/api/v1/system/bpm/bpmcontroller/saveapprover', {    //保存审批人
                  params: {
                    dataCode: localStorage.getItem("input1"),
                    approverInfo: '事前抄送_'+localStorage.getItem("事前抄送").substr(0,localStorage.getItem("事前抄送").length-1)+';' +'部门审批_'+localStorage.getItem("部门审批").substr(0,localStorage.getItem("部门审批").length-1)+';' +'公司签批_'+localStorage.getItem("公司签批").substr(0,localStorage.getItem("公司签批").length-1)+';' +'承办_'+localStorage.getItem("承办").substr(0,localStorage.getItem("承办").length-1)+';' +'事后抄送_'+localStorage.getItem("事后抄送").substr(0,localStorage.getItem("事后抄送").length-1)
                  }
                })
                  .then(function (res) {
                    axios.get('http://localhost/api/v1/system/bpm/bpmcontroller/savedraft', {    //保存草稿
                      params: {
                        dataCode: localStorage.getItem("input1"),
                        businessCode: localStorage.getItem("sysId"),
                        businessTitle: localStorage.getItem("businessTitle"),
                      }
                    })
                      .then(function (res) {
//                console.log(2)
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      ccc(){
        this.$router.push({path: "/zylx"})        //跳回列表页
      }
    },

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

