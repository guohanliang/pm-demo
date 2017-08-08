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
            <el-button  @click="onSubmit">填写审批意见</el-button>
            <el-button  @click="dialogVisible = true">调整流程</el-button>
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
            <el-button @click="Carbon_Copy">抄送</el-button>
            <el-button @click="cancellation">作废</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import axios from "axios"
  import vApprover from "./approver.vue"
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
        }
      }
    },
    methods: {
      onSubmit() {
        // 点击填写审批意见
        var _this=this;
        axios.post("http://localhost/api/v1/system/bpm/task/approve",
          {data:{
            dataCode:localStorage.getItem("dataCode1"),
            activityCode:localStorage.getItem("activityCode"),
            approverResult:_this.form.resource,
            approverContent:_this.form.desc,
            taskId:5
          }},
          {
            transformRequest:function(data){
              return data
            }
          }
        )
        .then((res)=>{
          // console.log(res.log)
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

//      点击作废
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

//      点击抄送
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
    components:{
        vApprover
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
