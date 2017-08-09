<template>
  <div class="enclosure">
    <div class="adjunct">
      <div class="attachment">
        <div class="header">
          <h4>附件</h4>
          <el-upload
            class="upload-demo"
            name="fileContent"
            action="http://localhost/api/v1/system/attachment/add"
            :data="one"
            :on-success="onSuccess"
            :file-list="tableData1">
            <span><i class="el-icon-plus">点击添加</i></span>
          </el-upload>
        </div>
        <span class="line1"></span>
        <footer>
          <el-table
            :data="tableData1"
            border
            style="width: 100%">
            <el-table-column
              prop="fileName"
              label="文件名"
              min-width="150">
            </el-table-column>
            <el-table-column
              prop="fileVersion"
              label="历史版本"
              min-width="60">
            </el-table-column>
            <el-table-column
              prop="sysCreateTime"
              label="上传时间"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="sysCreateName"
              label="上传人"
              min-width="100">
            </el-table-column>
            <el-table-column
              v-if="flag"
              label="操作"
              min-width="100">
              <template scope="scope">
                <el-upload
                  class="upload-demo"
                  name="fileContent"
                  action="http://localhost/api/v1/system/attachment/update"
                  :on-success="onUpdata"
                  :data="two"
                  :file-list="tableData1">
                  <el-button
                    type="text"
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </el-upload>
                <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
//        http://localhost/api/v1/system/attachment/add?businessId=P256-1706261015780
        one:{
            businessId:localStorage.getItem('input1')
        },
        two:{
          businessId:localStorage.getItem('input1'),
          sysId:''
        },
        flag: true,
        tableData1: []
      };
    },
    methods: {
      onSuccess(response, file, fileList){
        console.log(typeof(response.data));
        this.tableData1.push(response.data);
        console.log(this.tableData1)
      },
      onUpdata(response){
        console.log(response);
      },
      handleEdit(index, row){
        this.two.sysId=this.tableData1[index].sysId;
        console.log(this.two.sysId);

      },
      handleDelete(index, row){
        console.log(index);
        console.log(this.tableData1[index].sysId);
        axios.get('http://localhost/api/v1/system/attachment/delete', {
          params: {
            sysId: this.tableData1[index].sysId
          }
        }).then((res) => {
          this.tableData1.splice(index,1)
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    created(){
      axios.get('http://localhost/api/v1/system/user/loginuser/info').then((res) => {
        let oneName = res.data.data.chName;
        axios.get("http://localhost/api/v1/system/attachment/query",{
          params:{
              businessId:localStorage.getItem('input1')
          }
        }).then((res) => {
          this.tableData1 = res.data.data;
          if (oneName !== this.tableData1[0].sysCreateName) {
            this.flag = false
          }
        })
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gryw {
    .enclosure {
      width: 100%;
      margin-left: 0;
    }
  }

  .enclosure {
    width: calc(100vw - 200px);
    width: 90%;
    margin: 10px;
    .adjunct {
      width: calc(100vw - 200px);
      width: 100%;
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
          .upload-demo {
            width: 50%;
            float: left;
            font-size: 10px;
            color: red;
          }
        }
      }
    }
  }
</style>
