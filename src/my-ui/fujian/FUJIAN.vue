<template>
  <div class="fujian">
    <p class="fujian_top">
      <span class="zi">附件</span>
      <span class="one">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList3">
          <i class="el-icon-circle-check"></i>
          合同文件
        </el-upload>
      </span>
      <span class="two">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList3">
          <i class="el-icon-circle-check"></i>
          盖章文件(非合同)
        </el-upload>
      </span>
      <span class="three">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList3">
          <i class="el-icon-circle-check"></i>
          公告文件
        </el-upload>
      </span>
      <span class="four">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList3">
          <i class="el-icon-circle-check"></i>
          关联流程
        </el-upload>
      </span>
      <span class="five">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList3">
          <i class="el-icon-circle-check"></i>
          其它附件
        </el-upload>
      </span>
      <span class="six">
        <i class="el-icon-information"></i>
        请特别注意不同类型附件的使用方法
      </span>
    </p>







    <el-table
      :data="tableData"
      style="width: 900px; margin-left: 20px;">
      <el-table-column
        prop="date"
        label="文件名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="版本"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="上传人">
      </el-table-column>
      <el-table-column
        prop="address"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="上传时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        fileList3: [],
        tableData: []
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
        this.tableData=this.fileList3;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fujian_top{
    width: 980px;
    height: 50px;
    padding-left: 20px;
    padding-top: 30px;
  }
  .zi{
    color: red;
    font-weight: 900;
    font-size: 20px;
  }
  .one{
    font-size: 14px;
    color: red;
    display: inline-block;
    width: 75px;
    margin-left: 20px;
  }
  .two{
    font-size: 14px;
    color: red;
    display: inline-block;
    width: 125px;
    margin-left: 20px;

  }
  .three{
    font-size: 14px;
    color: red;
    display: inline-block;
    width: 75px;
    margin-left: 20px;

  }
  .four{
    font-size: 14px;
    color: red;
    display: inline-block;
    width: 75px;
    margin-left: 20px;
  }
  .five{
    font-size: 14px;
    color: red;
    display: inline-block;
    width: 75px;
    margin-left: 20px;

  }
  .six{
    font-size: 14px;
    color: red;
    display: inline-block;
    width: 250px;
    font-weight:900;
    margin-left: 50px;
  }

</style>
