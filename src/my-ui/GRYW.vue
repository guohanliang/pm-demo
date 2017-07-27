<template>
  <div class="gryw">
    <div class="gr_content">
      <h4 class="gr_title">基础信息</h4>
      <p class="line"></p>
      <p class="gr_pone">
        <span>编号</span>
        <el-input
          placeholder="请输入内容"
          v-model="input1"
          :disabled="true"
          class="zhidu">
        </el-input>
      </p>
      <p class="gr_pone">
2
      </p>
      <p class="gr_pone">
3
      </p>
      <p class="gr_pone">
4
      </p>

    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        input1: '123'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gryw{
    width:80%;
    background: green;
    height:626px;
    margin-left:20%;
    margin-top:100px;
  }
  .gr_content{
    width:97%;
    background: yellow;
    padding-left: 3%;
    margin-top:100px;
    padding-top:3%;
  }
  .gr_title{
    font-weight:400;
    font-size: 18px;
    color: red;
  }
  .line{
    border-top:1px solid red;
    margin-top: 5px;
  }
  .el-input, .el-input__inner{
    width: 180px;
  }
</style>
