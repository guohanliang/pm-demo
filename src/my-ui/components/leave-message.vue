<template>
    <div class="message fl" >
        <dl>
            <dt>留言</dt>
            <dd class="default-message" v-for="(item,index) in data">
                <h4>{{item.userDept}}-{{item.userName}}</h4>
                <p class="content">{{item.content}}</p>
                <p class="time">{{item.commentTime}}</p>
            </dd>
            <dd class="second-message">
                <el-input type="textarea" :rows="5" placeholder="请输入内容"
                          v-model="textarea"></el-input>
            </dd>
            <dd>
                <el-button @click="message_Delivered">发表留言</el-button>
            </dd>
        </dl>
    </div>
</template>

<script>
    import axios from "axios"
    import {mapState} from "vuex"
    import {mapMutations} from "vuex"
    export default {
        name:"leave-message",
        data(){
            return {
                textarea:'',
                data: [
                    {
                        userAccount: "zhangsan",
                        userName: "张三",
                        userDept: "技术开发二组",
                        content: "干的不错",
                        commentTime: "2017-07-28 18：00：00"
                    },
                    {
                        userAccount: "lisi",
                        userName: "李四",
                        userDept: "财务部",
                        content: "多给你点钱",
                        commentTime: "2017-07-29 18：00：00"
                    },
                    {
                        userAccount: "wangwu",
                        userName: "王五",
                        userDept: "稽核部",
                        content: "好好查查他们",
                        commentTime: "2017-07-30 18：00：00"
                    }
                ],
                data1:{}
            }
        },
        methods:{
            //发表留言
            message_Delivered(){
                // 加0函数
                function ad0(n){
                    if(n<10){
                        return('0'+n);
                    }else{
                        return n
                    }
                };

                // 获取时间戳
                var oDate=new Date();
                var y=oDate.getFullYear();
                var m=oDate.getMonth();
                var d=oDate.getDate();
                var h=oDate.getHours();
                var min=oDate.getMinutes();
                var s=oDate.getSeconds();
                var time=y+'-'+ad0(m+1)+'-'+ad0(d)+' '+ad0(h)+': '+ad0(min)+': '+ad0(s);
                //将新增留言展示在前端
                this.data.push({
                    userAccount: localStorage.getItem("account"),
                    userName: localStorage.getItem("chName"),
                    userDept: localStorage.getItem("orgChName"),
                    content: this.textarea,
                    commentTime: time
                })

                //向后台发送请求
                axios.post("http://localhost/api/v1/system/bpm/bpmcontroller/addcomment",
                    {
                        data:{
                            dataCode:localStorage.getItem("dataCode1"),
                            content:this.textarea
                        }
                    },
                    {
                        transformRequest:function(data){
                            return data;
                        }
                    }
                )
                .then((res)=>{
                  console.log("发表留言成功")
                })
                .catch((error)=>{
                })

            }
        },
        computed:{
            chName(){
              return this.$store.state.approvalRecord.chName;
            },
            orgChName(){
              return this.$store.state.approvalRecord.orgChName;
            }
        },
        created(){
          var _this=this;
          this.$store.commit("CHNAME", "冯光");
          this.$store.commit("ORGCHNAME","技术开发二部");
           // 默认加载审批留言 /system/bpm/comment/query
           axios.get("http://localhost/api/v1/system/bpm/bpmcontroller/querycomment",{params:{
                dataCode:localStorage.getItem("dataCode1")
           }})
           .then((res)=>{
                this.data=res.data.data;
           })
           .catch((error)=>{})

           //查询当前登录用户信息 /system/user/loginuser/info
           axios.get("http://localhost/api/v1/system/user/usercontroller/query-loginuser")
           .then((res)=>{
                _this.data1=res.data.data;
                localStorage.setItem("orgChName",_this.data1.orgChName);
                localStorage.setItem("chName",_this.data1.chName);
                localStorage.setItem("account",_this.data1.account);
                _this.$store.commit("CHNAME", _this.data1.chName);
                _this.$store.commit("ORGCHNAME", _this.data1.orgChName);

           })
           .catch((error)=>{})
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .message{
        width:33%;
        margin-left: 5px;
        height:500px;
        overflow: scroll;
        border: 1px solid rgb(51,51,51);
        dl{
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
                margin-bottom:10px;
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
                    text-indent: 2rem;
                }
                .time{
                    margin:10px;
                    margin-left: 40%;
                    margin-bottom: 0;
                }

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
