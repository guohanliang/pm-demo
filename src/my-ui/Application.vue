<template>
  <div class="mzgz">
    <basic-msg></basic-msg>
    <application-msg></application-msg>
    <adjunct></adjunct>
    <aggregation></aggregation>
    <submit-btn></submit-btn>
  </div>
</template>

<script>
    import axios from 'axios';
    import adjunct from './adjunct/Adjunct.vue';
    import approver from "./approver/Approver.vue"
    import aggregation from "./Aggregation-query.vue"
    export default {
      components:{
          adjunct,
          approver,
          aggregation
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mzgz{
    width: calc(100vw - 200px);
    margin-left:200px;
    margin-top:100px;
    overflow: hidden;
  }
</style>
