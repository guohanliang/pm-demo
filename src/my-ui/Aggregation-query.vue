<template>
  <div class="hzcx">
    <my-fujian></my-fujian>
    <approver></approver>
  </div>
</template>

<script>
  import approver from "./Approver.vue"

export default {
  components:{
    approver
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hzcx{
    width: calc(100vw - 200px);
    height:626px;
    margin-left:200px;
    margin-top:100px;
    background: #F8F8FA;
    overflow: hidden;
  }

</style>
