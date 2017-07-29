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
            <li class="jsfund jsfund1">嘉实基金-产品部-李四 <span class="agree have-read">已阅</span></li>
            <li class="send">送达:2017-07-23 12:09:23</li>
          </ul>
        </dd>
        
      </dl>

    </div>
</template>

<script>
    export default {
        name:"approval-record",
        data(){
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
          }
          .send{
            flex:3;
            line-height: 42px;
          }
        }
        .approval{
            margin-left:140px;
            width: 600px;
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
