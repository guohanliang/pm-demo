<template>
  <div class="sub">
    <el-button class="btn">提交</el-button>
    <el-button class="draft">存为草稿</el-button>
    <el-button class="cancel">取消</el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    created(){

//      axios.post('http://10.0.192.40:8081/system/bpm/workflow/apply', {       //提交流程
//        sysId: 'P990',
//        dataCode: '1234567890',
//        businessTitle:'aaa'
//      })
//        .then(function (res) {
//          console.log(res);
//        })
//        .catch(function (error) {
//          console.log(error);
//        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sub {
  width:90%;
  margin: 10px;
  border:1px solid black;
  height: 60px;
  .el-button {
    margin-left: 9%;
    width:20%;
    margin-top:1%;
  }
}
</style>
