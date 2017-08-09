<template>
    <div class="record fl" >
      <dl>
        <dt :data-resource="resource">审批记录</dt>
        <dd v-for="(item,index) in activity" v-on:click="onclick(index)" >
          <ul class="localDepartment">
            <li class="local">{{item.activityName}}</li>
            <li class="jsfund" >嘉实基金-{{item.approverDept}}-{{item.approverName}}
              <span class="agree " ref="agree1"
                    >{{item.approverResult}}</span>
            </li>
            <li class="send">送达:{{item.approverStartTime}}</li>
          </ul>

          <div class="approval clear-fix">
            <span class="no-suggest fl">{{item.approverContent}}</span>
            <span class="approval1 fr">审批:{{item.approverFinishTime}}</span>
          </div>

          <ul class="localDepartment" >
            <li class="jsfund jsfund1">
              嘉实基金-{{item.approverDept}}-{{item.approverName}}
              <!-- 弹出催办窗 -->
              <el-button class="reminder" @click="dialogVisible = true,reminder_do($event)"
                         v-bind:index="index">催办</el-button>
              <el-dialog title="短信催办" class="msg-emerge"
                         :visible.sync="dialogVisible"  size="tiny"
                :before-close="handleClose">
                <span class="reminderName" ></span>
                <p class="msg1">签报:关于 {{loginUsr}} 的申请等待您审批,{{loginUsr}}给您的留言:</p>
                <el-input type="textarea" :rows="5" placeholder="请输入内容"
                          v-model="textarea" style="margin-left: 0"></el-input>
                <p class="msg3">同意,请回复{{reminder.num}}加上您的意见,
                  不同意请回复{{reminder.num}} 加上您的意见.</p>
                <p class="msg4">说明:发送短信给想审批人,审批人以回复短信的方式审批流程</p>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = false,sending() ">发送
                  </el-button>
                  <el-button @click="dialogVisible = false">取 消</el-button>
                </span>
              </el-dialog>
            </li>
            <li class="send">{{data1.send3}}</li>
          </ul>
        </dd>

      </dl>
    </div>
</template>

<script>
  import axios from "axios"
  export default {
    name:"approval-record",
    data() {
      return {
        dialogVisible: false,
        textarea:"",
        isActive:true,
        loginUsr:localStorage.getItem("chName"),
        str:"",
        data1:{
            sales:"嘉实基金-销售部-张三",
            comments1:"同意",
            comments2:"已阅",
            send1:"送达:2017-07-23 12:09:23",
            send2:"送达:2017-07-23 12:09:23",
            send3:"送达:2017-07-23 12:09:23",
            send4:"送达:2017-07-23 12:09:23",
            send5:"送达:2017-07-23 12:09:23",
            commits1:"同意,没有意见",
            commits2:"同意,没有意见",
            approval1:"审批:2017-07-23 12:09:23",
            approval2:"审批:2017-07-23 12:09:23",
            product1:"嘉实基金-产品部-李四",
            product2:"嘉实基金-产品部-王五",
            product3:"嘉实基金-投资部-赵六",
            product4:"嘉实基金-稽核部-王五",
            product5:"嘉实基金-IT部-王五"
        },
        activity: [],
        activity:    [
          {
            activityCode: "countersign",
            activityName: "部门会签",
            approverDept: "技术研发二组",
            approverAccount:"zhangsan",
            approverName: "张三",
            approverType:"user",
            approverResult: "同意",
            approverContent: "表现不错，同意",
            approverStartTime: "2017-07-28 18：00：00",
            approverFinishTime: "2017-07-28 18：00：00",
            reminder:1
          },
          {
            activityCode: "countersign",
            activityName: "部门签批",
            approverDept: "技术研发二组",
            approverAccount:"lisi",
            approverName: "李四",
            approverType:"user",
            approverResult: "不同意",
            approverContent: "表现不好，不同意",
            approverStartTime: "2017-07-28 18：00：00",
            approverFinishTime: "2017-07-29 18：00：00"
          }
        ],
        data3: {
            empNo : "P1648",
            account : "liheng01",
            chName : "李恒",
            gender : "男",
            email : "liheng01@jsfund.cn",
            phone : "（010）56892514",
            mobile : "15612345678",
            jobCode:"8TTR0001",
            jobName:"基础开发部负责人",
            supervisorId:"P1603",
            orgChName : "营销策划部",
            dcOrgCode : "O_00116",
            bizunitId : "HBQ00",
            bizunitName : "嘉实远见科技"
        },
        reminder:{
            num:"8321123N"
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      //  /system/bpm/sms/send  点击发送,短信发送催办内容给后台
      sending(){
        var _this=this;
        axios.get("http://localhost/api/v1/system/bpm/sms/send",
          {params:{
            dataCode:localStorage.getItem("input1"),
            activityCode:this.activity.activityCode,
            approverAccount:this.data3.account,
            approverMobile:this.data3.mobile,
            message:this.textarea
          }}
        )
        .then((res)=>{
          console.log("短信发送成功")
        })
        .catch(function(error){})
      },
      onclick(index){
      },
      //点击催办,弹出催办框,并向后台请求数据
      reminder_do(event){
        // 将催办人赋值给弹窗
        var oReminder=event.currentTarget;
        var rIndex=oReminder.getAttribute("index");
        var approverAccount=this.activity[rIndex].approverAccount;

        this.$nextTick(function () {
          var reminderName=this.$el.querySelectorAll('.reminderName');
          var index=reminderName.length-1;
          reminderName[index].innerHTML=this.activity[rIndex].approverName;
        })

        //请求后台数据 /system/user/user/query
        axios.get("http://localhost/api/v1/system/user/user/query",
          {
            params:{account:approverAccount}
          })
        .then((res)=>{
          // 换成80端口需要取消注释
          this.data3=res.data.data;
        })
        .catch((error)=>{})
      }
    },
    computed:{
      chName(){
        return this.$store.state.approvalRecord.chName;
      },
      orgChName(){
        return this.$store.state.approvalRecord.orgChName;
      },
      time(){
        return this.$store.state.approvalRecord.time
      },
      resource(){

//        if(this.desc==1){return}
//        // 将点击填写审批意见的新数据,赋值给 activity
//        this.activity.push({
//            activityCode: localStorage.getItem("activityCode"),
//            activityName: "部门签批",
//            approverDept: this.orgChName,
//            approverAccount:"lisi",
//            approverName: this.chName,
//            approverType:"user",
//            approverResult: localStorage.getItem("resource"),
//            approverContent: this.desc,
//            approverStartTime: this.time,
//            approverFinishTime: this.time
//        })


        // DOM 还没有更新
        this.$nextTick(function () {
          // DOM 现在更新了
          // this 绑定到当前实例,获取到 span 标签
           var agree= this.$el.querySelectorAll('.agree');
           var DD=this.$el.querySelectorAll('dd');

            var str="";
            // 根据同意不同意变换不同的颜色
            for (var i=0;i<agree.length;i++){
               str =agree[i].innerHTML;

               switch (str){
                case "同意":break;
                case "不同意":agree[i].classList.add("disagree");
                       break;
                 default:agree[i].classList.add("haveRead");
               }
            }

          })

        var _this=this;
        //  审批页查询审批留言接口 /system/bpm/comment/query
        axios.get("http://10.0.192.40:8081/system/bpm/approveinfo/list",
          {params:{
            dataCode:localStorage.getItem("dataCode1")
          }}
        )
          .then(function(res){
            var activity=res.data.data.activity;//数组
            _this.activity=activity;
          })
          .catch(function(error){
            console.log(error)
          })

        return this.$store.state.approvalRecord.resource;
      },
      desc(){
        return this.$store.state.approvalRecord.desc;
      }
    },
    created(){

      // 存储流程环节编号
        localStorage.setItem("activityCode",this.activity[0].activityCode);

        var _this=this;
      //  审批页查询审批留言接口 /system/bpm/comment/query
       axios.get("http://10.0.192.40:8081/system/bpm/approveinfo/list",
         {params:{
             dataCode:localStorage.getItem("input1")
         }}
       )
       .then(function(res){
           var activity=res.data.data.activity;//数组
           _this.activity=activity;
       })
       .catch(function(error){
         console.log(error)
       })

    },
    mounted(){

        // DOM 还没有更新
        this.$nextTick(function () {
        // DOM 现在更新了
        // this 绑定到当前实例,获取到 span 标签
         var agree= this.$el.querySelectorAll('.agree');
         var DD=this.$el.querySelectorAll('dd');

          var str="";
          // 根据同意不同意变换不同的颜色
          for (var i=0;i<agree.length;i++){
             str =agree[i].innerHTML;

             switch (str){
              case "同意":break;
              case "不同意":agree[i].classList.add("disagree");
                     break;
               default:agree[i].classList.add("haveRead");
             }
          }

        })
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $rgb51:rgb(51,51,51);
  .record{
    width:66%;
    border: 1px solid rgb(51,51,51);
    height: 500px;
    overflow: scroll;
    dl{
      dt{
        width:98%;
        height:30px;
        line-height: 30px;
        color:rgb(196,0,0);
        margin:0 auto;
        border-bottom: 1px solid rgb(196,0,0) ;
        margin-bottom: 10px;
      }
      dd{
        width:95%;
        margin:0 auto;
        margin-bottom:10px;
        .localDepartment{
          display:flex;
          .local{
            flex:2;
            line-height: 42px;
          }
          .jsfund{
            flex: 6;
            .agree{
              margin-left: 20px;
              color:#008000;
              font-size:25px;
            }
            .disagree{
              color:red;
            }
            .haveRead{
              color:#F90;
            }
          }
          .jsfund1{
            margin-left: 18%;
            .reminder{
              margin-left: 30px;
              padding: 5px;
              margin-top: 10px;
            }
            .msg-emerge{
              .msg1{
                text-indent: 2em;
                color: $rgb51;
              }
              span{
                color:$rgb51;
              }
              .msg2{
                height: 100px;
                border:1px solid;
              }
              .msg3{
                color: $rgb51;
              }
              .msg4{
                color:#00f;
              }
            }

          }
          .jsfund2{
            padding-top: 10px;
          }
          .jsfund3{
            flex:9;
          }
          .send{
            flex:3.5;
            line-height: 42px;
          }
        }
        .approval{
            margin-left:18%;
            width: 80%;
            height: 40px;
            overflow: hidden;
            border:1px solid rgb(51,51,51);
            .no-suggest{
              line-height: 40px;
            }
            .approval1{
              height: 20px;
              margin-top:20px;
            }
        }
      }
    }
  }
  @media(max-width: 1320px){
    .record dl dd .localDepartment .jsfund{
      flex:6;
    }
    .record dl dd .localDepartment .local1{
      flex:1;
    }
  }
  @media(max-width: 1132px){
      .record{
          width: 95%;
      }
  }
  @media(max-width: 849px){
      .record{
        width:600px;
      }
  }
</style>
