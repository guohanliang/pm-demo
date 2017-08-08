<template>
  <div class="gryw">
    <div class="base-information">
      <!--基础信息-->
      <v-base></v-base>
    </div>
    <div class="application-information">
      <!--申请信息-->
      <v-application></v-application>
    </div>
    <div class="attachment">
      <!--附件-->
      <v-adjunct></v-adjunct>
    </div>
    <div class="approval-record clear-fix">
      <!--审批记录一栏-->
      <v-record></v-record>
      <v-message></v-message>
    </div>
    <div class="last">
      <!-- 最后提交留言栏 -->
      <v-agreement></v-agreement>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import vRecord from "./components/approval-record.vue"
  import vMessage from "./components/leave-message.vue"
  import vAgreement from "./components/agreement.vue"
  import vBase from "./components/basic-information.vue"
  import vApplication from "./components/application-information.vue"
  import vAdjunct from  "./adjunct/Adjunct.vue"

  export default {
    data() {
        return {}
      },
    components:{
        vRecord,
        vMessage,
        vAgreement,
        vBase,
        vApplication,
        vAdjunct
    },
    created(){
        axios.get('http://10.0.192.40:8081/system/bpm/workflow/query',{
            params:{
                dataCode:localStorage.getItem("input1")
            }
        }).then((res)=>{
          console.log(localStorage.getItem("input1"));
        })
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gryw{
    width: calc(100vw - 235px);
    height:626px;
    margin-left:220px;
    margin-top: 120px;
    .approval-record {
      overflow: hidden;
    }
    .attachment{
      margin-bottom: 10px;
      v-adjunct{
        width: 100%;
      }
    }
    .last{
      margin-top: 10px;
      border: 1px solid;
    }
  }
 @media(max-width:700px){
      .last{
          width:460px;
      }
  }

</style>
