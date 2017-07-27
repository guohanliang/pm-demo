<template>
  <div class="rightbiao">
    <el-table
      ref="multipleTable"
      :data="tableData3"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="leibie"
        label="参数类别"
        width="120">

      </el-table-column>
      <el-table-column
        prop="name"
        label="参数的KEY"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="参数的值"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="shuhui"
        label="业务类型"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="miaoshu"
        label="描述"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="cunzai"
        label="删除标记"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="ren"
        label="最后修改账号"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="date"
        label="最后修改时间"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  data() {
    return {
      tableData3: [],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    var _this=this;
    axios.get('./static/list.json')
      .then(function (res) {
        var data1=eval('('+res.data+')');
        data1=data1.xitongcanshu;
        _this.tableData3=data1;
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rightbiao{

    width:90%;
    background: #fff;
    margin-left: 40px;
  }
  .el-table-column--selection .cell{
    padding-left: 19px;
    padding-right: 40px;
  }

</style>
