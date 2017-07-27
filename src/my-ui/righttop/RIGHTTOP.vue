<template>
  <div class="righttop">
    <img src="../../assets/touxiang.jpg"/>
    <span class="name">name</span>
    <i class="el-icon-edit one"></i>
    <i class="el-icon-share two"></i>
    <span class="time">{{this.getNowTime()}}</span>
    <a href="http://localhost:1234/#/zylx">退出</a>
  </div>
</template>

<script>
export default {
  methods: {
//    getNowFormatDate(){                           //获取年月日时分秒
//      var date = new Date();
//      var seperator1 = "-";
//      var seperator2 = ":";
//      var month = date.getMonth() + 1;
//      var strDate = date.getDate();
//      if(month >= 1 && month <= 9) {
//        month = "0" + month;
//      }
//      if (strDate >= 0 && strDate <=9) {
//        strDate = "0" + strDate;
//      }
//      var currentdate = date.getUTCFullYear() + seperator1 + month + seperator1 + strDate
//        + " " + date.getHours() + seperator2 + date.getMinutes()
//        + seperator2 + date.getSeconds();
//      console.log(currentdate)
//      return currentdate;
//    },
    getNowTime(){                                   //获取年月日
      var date = new Date();
      var seperator1 = "/";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if(month >=1 && month <= 9) {
          month = "0" + month;
      }
      if(strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = date.getUTCFullYear() + seperator1 + month + seperator1 + strDate
      console.log(currentdate)
      return currentdate;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .righttop{
    width:80%;
    background: #324157;
    height:100px;
    position: absolute;
    top:0;
    right:0;
  }
  img{
    width:50px;
    height: 50px;
    position: absolute;
    top:20px;
    left:20px;
    border-radius:50%;
  }
  .name{
    color: #fff;
    position: absolute;
    top:40px;
    left:100px;
  }
  .one{
    position: absolute;
    top: 40px;
    left:180px;
    color: #fff;
  }
  .two{
    position: absolute;
    top: 40px;
    left:220px;
    color: #fff;
  }
  .time{
    position: absolute;
    right:100px;
    top:40px;
    color: #fff;
  }
  a{
    position: absolute;
    right:20px;
    top:40px;
    text-decoration: none;
    color: deepskyblue;
  }
</style>
