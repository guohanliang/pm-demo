<template>
  <div class="nav">
    <el-row class="tac">
      <el-col theme="dark">
        <h5>指令干预</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i><span class="bijiao">资金对账</span></template>
            <el-menu-item-group>
              <el-menu-item index="Dzcx">对账查询</el-menu-item>
              <el-menu-item index="Dzgy">对账干预</el-menu-item>
            </el-menu-item-group>
            </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-search"></i><span class="bijiao">资金对账</span></template>
            <el-menu-item-group>
              <el-menu-item index="hzcx">汇总查询</el-menu-item>
              <el-menu-item index="mxcx">明细查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i><span class="bijiao">资金对账</span></template>
            <el-menu-item-group>
              <el-menu-item index="ywcs">业务参数</el-menu-item>
              <el-menu-item index="xtcs">系统参数</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="el-icon-search"></i><span class="bijiao">资金对账</span></template>
            <el-menu-item-group>
              <el-menu-item index="mzgz">附件页</el-menu-item>
              <el-menu-item index="zylx">列表页</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"><i class="el-icon-plus"></i><span class="bijiao">资金对账</span></template>
            <el-menu-item-group>
              <el-menu-item index="gryw">个人业务</el-menu-item>
              <el-menu-item index="qyfw">企业服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    width:200px;
    position: absolute;
    top: 100px;
    height:626px;
    left:0;
  }
  .nav .tac{
    height:100%;
    background: #324157;
  }
  .el-col el-col-8{
    width:100%;
  }
  h5{
    color: lightgray;
    height:56px;
    line-height: 56px;
    font-size:16px;
    background: #2c3e50;
  }
  .bijiao{
    margin-right:100px;
    margin-left:20px;
  }
</style>
