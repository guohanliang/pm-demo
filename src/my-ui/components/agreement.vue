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
            <el-button  @click="onSubmit" :disabled="authority.approve">填写审批意见</el-button>
            <el-button  @click="dialogVisible = true" :disabled="authority.modify">调整流程</el-button>
            <el-dialog title=""
                       class="msg-emerge" :visible.sync="dialogVisible"
                       size="large" :before-close="handleClose">
              <v-approver></v-approver>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">
                  确 定</el-button>
                <el-button @click.native="dialogVisible = false">
                  取 消</el-button>
              </span>
            </el-dialog>
            <el-button @click="Carbon_Copy" :disabled="authority.terminate">抄送</el-button>
            <el-button @click="cancellation">作废</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import axios from "axios"
  import vApprover from "./approver.vue"
  import {mapState} from "vuex"
  import {mapMutations} from "vuex"
  export default {
    data() {
      return {
        dialogVisible: false,
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
          axios.post("http://localhost/api/v1/system/bpm/task/approve",
            {data:{
              dataCode:localStorage.getItem("dataCode1"),
              activityCode:localStorage.getItem("activityCode"),
              approverResult:_this.form.resource,
              approverContent:_this.form.desc,
              taskId:3
            }},
            {
              transformRequest:function(data){
                return data
              }
            }
          )
          .then((res)=>{
          })
          .catch((error)=>{})
        },

        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },

        //   点击作废
        cancellation(){
          axios.get('http://localhost/api/v1/system/bpm/workflow/abolish',{
            params:{dataCode:localStorage.getItem("dataCode1")}
          })
          .then((res)=>{
          })
          .catch((error)=>{
              console.log(error)
          })
        },

        //   点击抄送
        Carbon_Copy(){
          axios.get('http://localhost/api/v1/system/bpm/copyto/add',{
            params:{
              dataCode:localStorage.getItem("dataCode1"),
              appprover:""
            }
          })
          .then((res)=>{
          })
          .catch((error)=>{
            console.log(error)
          })
        }
    },
    created(){
      //1.获取当前登录人的taskId和 activityCode
      //  /system/bpm/task/getid
      axios.get('http://localhost/api/v1/system/bpm/task/getid',
        {params:{dataCode:"P900-1708091101643"}})
        .then((res)=>{
          // console.log(res.data)
        })
        .catch((res)=>{})

      // 2.审批页面下部按钮显示权限
      // /system/bpm/button/query
      axios.get('http://localhost/api/v1/system/bpm/button/query',
        {params:{dataCode:"P900-1708091101643"}})
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
