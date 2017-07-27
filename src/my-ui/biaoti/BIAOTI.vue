<template>
  <div class="biaoti">
    <span class="tiao"></span>
    <span class="biaoti">标&nbsp&nbsp&nbsp&nbsp题</span>
    <el-form ref="form" :model="form" label-width="80px" class="biao">
        <el-input v-model="form.name"></el-input>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.biaoti{
  font-size: 18px;
  margin-top: 20px;
}
.biao{
  width: 900px;
  margin-left: 20px;
  margin-top: 10px;
}
.tiao{
  width:900px;
  border-top:2px solid red;
  position: absolute;
  top: 323px;
  left:0;
  margin-left:20px;
}
</style>
