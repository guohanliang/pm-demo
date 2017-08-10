<template>
  <div class="zhaiyao">
    <!-- <span class="tiao"></span> -->
    <span class="zhai">摘&nbsp&nbsp&nbsp&nbsp要</span>
    <el-form ref="form" :model="form" label-width="80px">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          desc: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zhaiyao{
  width: 100%;
  margin-top: 30px;
}
.el-textarea{
  margin-top: 20px;
}
.tiao{
  width:100%;
  border-top:2px solid red;
  position: absolute;
  top: 420px;
  left:0;
  margin-left:20px;
}

</style>
