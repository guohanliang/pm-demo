<template>
  <div class="enclosure">
    <div class="adjunct">
      <div class="attachment">
        <div class="header">
          <h4>附件</h4>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList">
            <i class="el-icon-plus"><span>添加文件</span></i>
          </el-upload>
        </div>
        <span class="line1"></span>
        <footer>
          <el-table
            :data="tableData1"
            border
            style="width: 100%">
            <el-table-column
              prop="filename"
              label="文件名"
              min-width="150">
            </el-table-column>
            <el-table-column
              prop="history"
              label="历史版本"
              min-width="60">
            </el-table-column>
            <el-table-column
              prop="uploadtime"
              label="上传时间"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="taddy"
              label="上传人"
              min-width="100">
            </el-table-column>
            <el-table-column
              label="操作"
              min-width="100">
              <template scope="scope">
                <el-button @click="handleClick" type="text" size="small">更新</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        fileList: [],
        tableData1: [{
          filename: 'XXX产品申请说明.docx',
          history: '2',
          uploadtime: '2017-10-11',
          taddy: '张三'
        }, {
          filename: 'XXX产品申请说明.docx',
          history: '2',
          uploadtime: '2017-10-11',
          taddy: '李四'
        }]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },

      handleClick() {
        console.log(1);
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .enclosure {
    width: calc(100vw - 200px);
    width: 90%;
    margin: 10px;
    .adjunct {
      width: calc(100vw - 200px);
      width:100%;
      .attachment {
        min-height: 100px;
        border: 1px solid black;
        .header {
          height: 30px;
          h4 {
            float: left;
            color: red;
            margin-left: 10px;
            line-height: 30px;
          }
          .upload-demo {
            float: left;
            margin-left: 20px;
            font-size: 14px;
            line-height: 30px;
            .el-icon-plus {
              font-size: 10px;
              color: red;
              span {
                font-size: 14px;
              }
            }
          }
        }
        .line1 {
          width: 100%;
          border-top: 1px solid red;
          display: block;
        }
        footer {
          margin: 10px;
        }
      }
    }
  }
</style>
