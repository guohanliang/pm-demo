<template>
  <div class="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正文" name="first" class="jiben">基本信息
        <my-msgbiao></my-msgbiao>
        <my-biaoti></my-biaoti>
        <my-zhaiyao></my-zhaiyao>
      </el-tab-pane>
      <el-tab-pane label="附件" name="second" class="jiben">事项内容
        <my-bianji></my-bianji>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jiben{
  font-size:18px;
}

</style>
