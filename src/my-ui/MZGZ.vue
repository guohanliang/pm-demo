<template>
  <div class="mzgz">
    <basic-msg></basic-msg>
    <application-msg></application-msg>
    <div class="attachment">
        <div class="clear-fix header">
            <h2 class="fl">附件</h2>
            <el-upload
              class="upload-demo fl"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList">
              <i class="el-icon-plus">添加文件</i>
            </el-upload>
        </div>
        <span class="line1"></span>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
          return {
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
          };
        },
        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mzgz{
    width: calc(100vw - 200px);
    height:626px;
    margin-left:200px;
    margin-top:100px;
    overflow: hidden;
    .attachment{
        width:90%;
        margin:10px;
        height: 300px;
        border:1px solid grey;
        .header{
            display: table-cell;
            overflow: hidden;
            h2{
                color:#C40000;
                margin-left:10px;
            }
            .upload-demo{
                margin-top: 10px;
                margin-left:20px;
                i{
                    color:#C40000;
                }
            }
        }
        .line1{
            width: 100%;
            border-top: 1px solid #C40000;
            display: block;
        }
    }

  }



</style>
