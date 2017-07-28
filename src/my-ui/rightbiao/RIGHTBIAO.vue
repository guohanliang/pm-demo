<template>
  <div>  
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
          prop="t1"
          label="参数类别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="t2"
          label="参数的KEY"
          width="120">
        </el-table-column>
        <el-table-column
          prop="t3"
          label="参数的值"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="t4"
          label="业务类型"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="t5"
          label="描述"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="t6"
          label="删除标记"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="t7"
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
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[3, 4, 5, 6]"
        :page-size="n"
        layout="total, sizes, prev, pager, next, jumper"
        :total="t">
      </el-pagination>
    </div>
    <div class="test">
      {{newData}}
    </div>  
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  data() {
    return {
      tableData3: [],
      multipleSelection: [],
      a:'',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5 ,
      currentPage4: 1,
      p:1,
      n:3,
      t:0
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
    },
    // 更改每页显示条数
    handleSizeChange(val) {
       this.n=val;
       var d=this.n;
       var c=this.p;
        var _this=this;

        axios.get('./static/list.json')
          .then(function (res) {
            var data1=eval('('+res.data+')');
            data1=data1.xitongcanshu;
            _this.tableData3=[];

            // 判断一下是否为最后一页
            var totalCount=Math.ceil(_this.t/d);
            if (c>=totalCount) {
                for(var i=(totalCount-1)*d;i<_this.t;i++){
                  _this.tableData3.push(data1[i]);
                  _this.$store.state.pagecon.tableData4=_this.tableData3;
                }
            } else {
              for(var i=(c-1)*d;i<c*d;i++){
                _this.tableData3.push(data1[i]);
                _this.$store.state.pagecon.tableData4=_this.tableData3;
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    // 更改页码
    handleCurrentChange(val) {
        this.p=val;
        var b=val;
        var m=this.n;
        this.$store.state.page.count=val;
        var _this=this;
        axios.get('./static/list.json')
          .then(function (res) {
            var data1=eval('('+res.data+')');
            data1=data1.xitongcanshu;
            _this.tableData3=[];
            // 判断一下是否为最后一页
            var totalCount=Math.ceil(_this.t/m);
            if (b==totalCount) {
                for(var i=(b-1)*m;i<_this.t;i++){
                  _this.tableData3.push(data1[i]);
                  _this.$store.state.pagecon.tableData4=_this.tableData3;
                }
            } else {
              for(var i=(b-1)*m;i<b*m;i++){
                _this.tableData3.push(data1[i]);
                _this.$store.state.pagecon.tableData4=_this.tableData3;
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })       
    }
  },
  computed:{
    count(){
      return this.$store.state.page.count
    },
    tableData4(){
      // this.tableData3.push(this.#store.state.pageccon.tableData4);
      return this.$store.state.pagecon.tableData4
    },
    b(){
      return this.a
    },
    newData(){
      // 将新建的数据放在计算属性里面，如果数据有变化，将新建的数据添加到当前页 
      if(this.$store.state.dzcx.newData1.t0==0){   
      }
      else{
        // 为什么当新建第二条数据的时候，第一条的数据也变成第二条得了？
        this.tableData3.unshift(this.$store.state.dzcx.newData1);       
      }
      return this.$store.state.dzcx.newData1.t0;
    }
  },
  watch:{
      a:function(val){
        var _this=this;
         axios.get('./static/list.json')
          .then(function (res) {
            var data1=eval('('+res.data+')');
            data1=data1.xitongcanshu;
            _this.t=data1.length;
            _this.tableData3=[];
            for(var i=(_this.a-1)*3;i<_this.a*3;i++){
              _this.tableData3.push(data1[i]);
            }
          })
          .catch(function (error) {
            console.log(error)
          })      
      }
  },
  mounted() {
    this.a=this.$store.state.page.count;
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
  .block{
    width:90%;
    background: #fff;
    margin-left:40px;
    height:40px;
    padding-top: 10px;
  }
  .test{
    display: none;
  }

</style>
