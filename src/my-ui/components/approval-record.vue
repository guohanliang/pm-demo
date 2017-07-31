<template>
    <div class="record fl" >
      <dl>
        <dt>审批记录</dt>
        <dd>
          <ul class="localDepartment">
            <li class="local">本部门审批</li>
            <li class="jsfund">嘉实基金-销售部-张三 <span class="agree">同意</span></li>
            <li class="send">送达:2017-07-23 12:09:23</li>
          </ul>
          <div class="approval clear-fix">
            <span class="no-suggest fl">同意,没有意见</span>
            <span class="approval1 fr">审批:2017-07-23 12:09:23</span>
          </div>
        </dd>
        <dd>
          <ul class="localDepartment">
            <li class="local">本部门审批</li>
            <li class="jsfund">嘉实基金-产品部-李四 <span class="agree have-read">已阅</span></li>
            <li class="send">送达:2017-07-23 12:09:23</li>
          </ul>
          <div class="approval clear-fix">
            <span class="no-suggest fl">同意,没有意见</span>
            <span class="approval1 fr">审批:2017-07-23 12:09:23</span>
          </div>
          <ul class="localDepartment">
            <li class="jsfund jsfund1">嘉实基金-产品部-王五 
              <!-- 弹出催办窗 -->
              <el-button class="reminder" @click="dialogVisible = true">催办
              </el-button>
              <el-dialog title="短信催办" class="msg-emerge" :visible.sync="dialogVisible"  size="tiny"
                :before-close="handleClose">
                <span>张三:18811109999</span>
                <p class="msg1">签报:关于 XXX 的申请等待您审批.张三给您的留言:</p>
                <p class="msg2"></p>
                <p class="msg3">同意,请回复8321123Y 加上您的意见,不同意请回复8321123N 加上您的意见.</p>
                <p class="msg4">说明:发送短信给想审批人,审批人以回复短信的方式审批流程</p>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = false">发送
                  </el-button>
                  <el-button @click="dialogVisible = false">取 消</el-button>  
                </span>
              </el-dialog>
            </li>
            <li class="send">送达:2017-07-23 12:09:23</li>
          </ul>
        </dd>
        <dd>
          <ul class="countersign localDepartment">
            <li class="local">部门会签</li>
            <li class="jsfund jsfund2">嘉实基金-投资部-赵六</li>
            <li class="send">送达:2017-07-23 12:09:23</li>
          </ul>
          <ul class="countersign localDepartment">
            <li class="local"></li>
            <li class="jsfund jsfund2">嘉实基金-稽核部-王五</li>
            <li class="send">送达:2017-07-23 12:09:23</li>
          </ul>       
        </dd>
        <dd>
          <ul class="carbon-copy countersign localDepartment">
            <li class="local">抄送</li>
            <li class="jsfund jsfund2 jsfund3">嘉实基金-IT部-王五</li>
          </ul>       
        </dd>     
      </dl>
    </div>
</template>

<script>
  export default {
    name:"approval-record",
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $rgb51:rgb(51,51,51);
  .record{
    width:800px;
    height:500px;
    border: 1px solid rgb(51,51,51);
    dl{
      overflow:hidden;
      dt{
        width:98%;
        height:30px;
        line-height: 30px;
        color:rgb(196,0,0);
        margin:0 auto;
        border-bottom: 1px solid rgb(196,0,0) ;
        margin-bottom: 10px;
      }
      dd{
        width:95%;
        margin:0 auto;
        margin-bottom:10px;
        .localDepartment{
          display:flex;
          .local{
            flex:2;
            line-height: 42px;
          }
          .jsfund{
            flex: 6;
            .agree{
              margin-left: 20px;
              color:#008000;
              font-size:25px;
            }
            .have-read{
              color:#F90;
            }
          }
          .jsfund1{
            margin-left: 136px;
            .reminder{
              margin-left: 30px;
              padding: 5px;
              margin-top: 10px;
            }
            .msg-emerge{
              .msg1{
                text-indent: 2em;
                color: $rgb51;
              }
              span{
                color:$rgb51;
              }
              .msg2{
                height: 100px;
                border:1px solid;
              }
              .msg3{
                color: $rgb51;
              }
              .msg4{
                color:#00f;
              }              
            }
            
          }
          .jsfund2{
            padding-top: 10px;
          }
          .jsfund3{
            flex:9;
          }
          .send{
            flex:3;
            line-height: 42px;
          }
        }
        .approval{
            margin-left:140px;
            width: 595px;
            height: 40px;
            overflow: hidden;
            border:1px solid rgb(51,51,51);
            .no-suggest{
              line-height: 40px;
            }
            .approval1{
              height: 20px;
              margin-top:20px;
            }
        }
      }
    }
  }
</style>
