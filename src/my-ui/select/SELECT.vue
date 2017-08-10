<template>
  <div class="select">
    <el-select v-model="value" placeholder="普通">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '普通'
      }, {
        value: '选项2',
        label: '中等'
      }, {
        value: '选项3',
        label: '高级'
      }],
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select{
  width:200px;
  height:20px;
  float: left;
  margin-top:13px;
  margin-left:20px;
}
</style>
