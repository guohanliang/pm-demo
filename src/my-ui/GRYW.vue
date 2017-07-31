<template>
  <div class="gryw">
    <div class="approval-record clear-fix">
      <!--审批记录一栏-->
      <v-record></v-record>
      <v-message></v-message>
    </div>
  </div>
</template>

<script>
  import vRecord from "./components/approval-record.vue"
  import vMessage from "./components/leave-message.vue"
  export default {
    data() {
        return {}
      },
    components:{
        vRecord,
        vMessage
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
    approval-record {
      width: calc(100vw - 280px);
      margin-left: 280px;
      overflow: hidden;
    }
  }

</style>
