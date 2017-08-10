<template>
    <div class="agreement" >
        <el-form ref="form" :model="form" label-width="80px">
            <el-radio-group v-model="form.resource">
              <el-radio label="同意"></el-radio>
              <el-radio label="不同意"></el-radio>
              <el-radio label="已阅"></el-radio>
            </el-radio-group>

            <el-input type="textarea" v-model="form.desc"></el-input>

          <el-form-item class="submit">
            <el-button  @click="onSubmit" :disabled="authority.approve">填写审批意见
            </el-button>
            <el-button  @click="dialogVisible = true"
                        :disabled="authority.modify">调整流程</el-button>
            <el-dialog title=""
                       class="msg-emerge" :visible.sync="dialogVisible"
                       size="large" :before-close="handleClose">
              <v-approver></v-approver>

            </el-dialog>
            <el-button  @click="dialogVisible1 = true">抄送
            </el-button>
            <el-dialog
              title="抄送"
              :visible.sync="dialogVisible1"
              size="large"
              :before-close="handleClose" class="copy-send">
              <v-approver></v-approver>
            </el-dialog>
            <el-button @click="cancellation" :disabled="authority.terminate">作废
            </el-button>
            <el-button @click="quit">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import axios from "axios"
  import vApprover from "../Aggregation-query.vue"
  import {mapState} from "vuex"
  import {mapMutations} from "vuex"
  export default {
    data() {
      return {
        dialogVisible: false,
        dialogVisible1:false,
        taskId:"",
        activityCode:"",
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        authority:{
          approve:false,
          modify:false,
          terminate:true
        }
      }
    },
    methods: {
         // 点击填写审批意见
        onSubmit() {
          // 加0函数
          function ad0(n){
              if(n<10){
                  return('0'+n);
              }else{
                  return n
              }
          };

          // 获取时间戳
          var oDate=new Date();
          var y=oDate.getFullYear();
          var m=oDate.getMonth();
          var d=oDate.getDate();
          var h=oDate.getHours();
          var min=oDate.getMinutes();
          var s=oDate.getSeconds();
          var time=y+'-'+ad0(m+1)+'-'+ad0(d)+' '+ad0(h)+': '+ad0(min)+': '+ad0(s);
          this.$store.commit("RESOURCE",this.form.resource);
          localStorage.setItem("resource",this.form.resource);
          this.$store.commit("DESC",this.form.desc);
          this.$store.commit("TIME",time);
          var _this=this;
          axios.get("http://localhost/api/v1/system/bpm/task/approve",
            {params:{
              dataCode:localStorage.getItem("input1"),
              activityCode:_this.activityCode,
              approverResult:_this.form.resource,
              approverContent:_this.form.desc,
              taskId:_this.taskId
            }}
          )
          .then((res)=>{
          })
          .catch((error)=>{})
        },

        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
              //确定之后,向后台发送人
              axios.get("http://localhost/api/v1/system/bpm/approver/save",
                {params:{
                  dataCode:localStorage.getItem("input1"),
                  approverInfo: '事前抄送_'+localStorage.getItem("事前抄送").substr(0,localStorage.getItem("事前抄送").length-1)+';' +'部门审批_'+localStorage.getItem("部门审批").substr(0,localStorage.getItem("部门审批").length-1)+';' +'公司签批_'+localStorage.getItem("公司签批").substr(0,localStorage.getItem("公司签批").length-1)+';' +'承办_'+localStorage.getItem("承办").substr(0,localStorage.getItem("承办").length-1)+';' +'事后抄送_'+localStorage.getItem("事后抄送").substr(0,localStorage.getItem("事后抄送").length-1)
                }}
              )
                .then((res)=>{
                  this.$store.commit("RESOURCE",Math.random());
                  console.log("调整审批人成功")
                })
                .catch((error)=>{})
            })
            .catch(_ => {});


        },

        //   点击作废
        cancellation(){
          axios.get('http://localhost/api/v1/system/bpm/workflow/abolish',{
            params:{dataCode:localStorage.getItem("input1")}
          })
          .then((res)=>{
          })
          .catch((error)=>{
              console.log(error)
          })
        },
        post_tag(){//将标签信息发送给后台
          axios.get("http://localhost/api/v1/system/label/save",
            {params:{
              businessId:localStorage.getItem("input1"),
              labelName:localStorage.getItem("tag")
            }}
          )
            .then((res)=>{
              console.log("标签信息发送给后台")
            })
            .catch((error)=>{
              console.log(error)
            })
        },

        //   点击抄送
        Carbon_Copy(){
          axios.get('http://localhost/api/v1/system/bpm/copyto/add',{
            params:{
              dataCode:localStorage.getItem("input1"),
              approverAccount:"1"
            }
          })
          .then((res)=>{
            this.$store.commit("RESOURCE",Math.random());
            this.post_tag();
            console.log("抄送成功");
          })
          .catch((error)=>{
            console.log(error)
          })

        },

      // 点击取消,跳转到列表页
        quit(){
          this.$router.push({path:"/zylx"})
        }
    },
    created(){
      //1.获取当前登录人的taskId和 activityCode
      //  /system/bpm/task/getid
      axios.get('http://localhost/api/v1/system/bpm/task/getid',
        {params:{dataCode:localStorage.getItem("input1")}})
        .then((res)=>{
          this.taskId=res.data.data.taskId;
          this.activityCode=res.data.data.activityCode;
        })
        .catch((res)=>{})

      // 2.审批页面下部按钮显示权限
      // /system/bpm/button/query
      axios.get('http://localhost/api/v1/system/bpm/button/query',
        {params:{dataCode:localStorage.getItem("input1")}})
        .then((res)=>{
          var data1=res.data.data;
          this.authority.approve=Boolean(data1.approve);
          this.authority.modify=Boolean(data1.modify);
          this.authority.terminate=Boolean(data1.terminate);
        })
        .catch((res)=>{})
    },
    computed:{
        time(){
          return this.$store.state.approvalRecord.time;
        },
        resource(){
          return this.$store.state.approvalRecord.resource;
        },
        desc(){
          return this.$store.state.approvalRecord.desc;
        }
    },
    components:{
        vApprover
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
