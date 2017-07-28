<template>
  <div class="msgbiao">
    <!-- <span class="tiao"></span> -->
    <table border="1" cellspacing="0" cellpadding="0" width="1015" height="200" class="one_tab">
      <tr align="center">
        <td class="ted">
          <span class="bianhao">申请编号</span>
          <span class="num">P121-170704173467747</span>
        </td>
        <td class="ted">二维码</td>
        <td class="ted">
          <span class="bianhao">重要级别</span>
          <el-radio-group v-model="radio2" class="danxuan">
            <el-radio :label="3">低</el-radio>
            <el-radio :label="6">中</el-radio>
            <el-radio :label="9">高</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <td class="ted">
          <span class="bianhao">发起人</span>
          <span class="num">章楠楠</span>
        </td>
        <td class="ted">
          <span class="bianhao">保密等级</span>
          <my-select></my-select>
        </td>
        <td class="ted">
          <span class="bianhao">紧急程度</span>
          <span class="danxuan">
          <el-radio class="radio" v-model="radio" label="1">普通</el-radio>
          <el-radio class="radio" v-model="radio" label="2">高</el-radio>
          </span>
        </td>
      </tr>
      <tr>
        <td class="ted">
          <span class="bianhao">申请时间</span>
          <span class="num">2017年7月4日</span>
        </td>
        <td class="ted">
          <span class="bianhao">签报类型</span>
          <my-select></my-select>
        </td>
        <td class="ted">
        </td>
      </tr>
      <tr>
        <td colspan="3" class="ted_1">
          <span class="bianhao">标签</span>
          <span class="teshu">请输入自定义标签名称／流程分类名称／基金名称／基金编码</span>
          <el-button class="btn" size="small">选择标签</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      radio2: 3
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* .tiao{
    width:100%;
    border-top:2px solid red;
    position: absolute;
    top: 35px;
    left:0;
    margin-left:20px;
  }*/
.one_tab{
  background: #fff;
  margin-left:20px;
  border:1px solid #999;
  margin-top:10px;
  font-size:16px;
}
  .ted{
    width:300px;
    height:50px;
  }
  .ted_1{
    height:60px;
  }
  .bianhao{
    float: left;
    padding-left: 10px;
    line-height: 50px;
    color: darkgrey;
    width:65px;
  }
  .num{
    float: left;
    line-height: 50px;
    color: black;
    margin-left: 20px;
  }
  tr td{
    border:1px solid #999;
  }
  .danxuan{
    float: left;
    margin-left:30px;
  }
  .teshu{
    color: #666;
    line-height: 50px;
    float: left;
  }
  .btn{
    float: left;
    margin-left:250px;
    color: orange;
    border:1px solid orange;
    margin-top:10px;
  }
</style>
