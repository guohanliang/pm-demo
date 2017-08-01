<template>
    <div class="message fl" >
        <dl>
            <dt>留言</dt>
            <dd class="default-message">
                <h4>产品管理部-张三</h4>
                <p class="content">呈签事项涉及潜在税务影响的（如合同涉税条款、新业务形式、企业税务登记信息调整等），需进行税务会签</p>
                <p class="time">2017-07-26 12:12:08</p>
            </dd>
            <dd class="second-message">
                <el-input type="textarea" :rows="5" placeholder="请输入内容"  v-model="textarea"></el-input>
            </dd>
            <dd>
                <el-button>发表留言</el-button>
            </dd>
        </dl>

    </div>
</template>

<script>
    export default {
        name:"leave-message",
        data(){
            return {
                textarea:''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message{
    width:33%;
    margin-left: 5px;
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
            .el-textarea{
                width: 94%;
            }
        }
        .default-message{
            width:90%;
            border:1px solid;
            margin-left: 10px;
            padding: 5px;
            h4{
                font-weight: normal;
            }
            .content{
                margin-top: 10px;
            }
            .time{
                margin:10px;
                margin-left: 54%;
                margin-bottom: 0;
            }

        }
        .second-message{
            margin-top: 120px;
        }
        dd{
            overflow: hidden;
            .el-button{
                margin:8px 74%;
            }
        }
    }
}
@media(max-width: 1132px){
    .message{
        width: 95%;
        margin-left: 0;
        margin-top: 10px;
    }
}
</style>
