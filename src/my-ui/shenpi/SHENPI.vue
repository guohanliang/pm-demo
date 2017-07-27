<template>
  <div class="shenpi">
    <p class="shen_til">
      <span class="shen_peo">审批人员</span>
      <span class="tiaozheng">（顺序可调整）</span>
    </p>
    <ul class="shen_ul">
      <li class="ul_li">
        <span class="shen_one">审核</span>
        <span class="shen_two">请输入要查询用户的账号／姓名／拼音／岗位</span>
        <el-button  @click="dialogVisible = true" class="tijiao" size="small">选择</el-button>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          size="tiny"
          :before-close="handleClose">



          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>

          <el-tree
            class="filter-tree"
            :data="data2"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree2">
          </el-tree>




          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>


      </li>
      <li class="ul_li">
        <span class="shen_one">会签</span>
        <span class="shen_two">请输入要查询用户的账号／姓名／拼音／岗位</span>
        <el-button  @click="dialogVisible = true" class="tijiao" size="small">选择</el-button>
      </li>
      <li class="ul_li">
        <span class="shen_one">审批</span>
        <span class="shen_two">请输入要查询用户的账号／姓名／拼音／岗位</span>
        <el-button  @click="dialogVisible = true" class="tijiao" size="small">选择</el-button>
      </li>
      <li class="ul_li chao_li">
        <span class="shen_one chao">抄送</span>
        <div class="shen_box">
            <span class="anniu">
              <el-radio class="radio" v-model="radio" label="1">事前抄送</el-radio>
              <el-radio class="radio" v-model="radio" label="2">事后抄送</el-radio>
            </span>
            <span>
              <span class="shen_two shen_te">请输入要查询用户的账号／姓名／拼音／岗位</span>
            </span>
        </div>
        <el-button  @click="dialogVisible = true" class="tijiao tijiao1" size="small">选择</el-button>
      </li>
      <li class="ul_li">
        <span class="shen_one">承办</span>
        <span class="shen_two">请输入要查询用户的账号／姓名／拼音／岗位</span>
        <el-button  @click="dialogVisible = true" class="tijiao" size="small">选择</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      dialogVisible: false,
      filterText: '',
      data2: [{
        id: 1,
        label: '嘉实集团',
        children: [{
          id: 4,
          label: 'HAI',
          children: [{
            id: 9,
            label: 'HAI-1'
          }, {
            id: 10,
            label: 'HAI-2'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shenpi{
    width: 900px;
    margin-left: 20px;
    margin-top: 120px;
  }
  .shen_til{
    width: 900px;
    height: 30px;
  }
  .shen_peo{
    font-size: 20px;
    color: red;
    font-weight:900;
  }
  .tiaozheng{
    font-size: 18px;
    color: red;
    font-weight:900;
  }
  .shen_ul{
    width: 900px;
    background: white;
    border-top:1px solid red;
  }
  .ul_li{
    height: 50px;
    list-style: none;
    border-bottom:1px solid #999;
  }
  .shen_one{
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    margin-left: 20px;
    color: #838383;
    float: left;
  }
  .chao_li{
    height: 80px;
  }
  .chao{
    line-height: 80px;
  }
  .shen_two{
    color: #838383;
    margin-left: 20px;
    line-height: 50px;
  }
  .shen_box{
    float: left;
    height: 80px;
    margin-left: 20px;
  }
  .anniu{
    height: 40px;
    display: block;
  }
  .shen_te{
    line-height: 40px;
    margin-left:0;
    height: 39px;
    width: 700px;
    display: block;
  }
  .tijiao{
    float: right;
    margin-right: 25px;
    margin-top: 10px;
  }
  .tijiao1{
    float: right;
    margin-right: 25px;
    margin-top: 20px;
  }
</style>
