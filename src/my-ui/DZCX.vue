<template>
  <div class="dzcx">
    <my-rightcenter></my-rightcenter>
    <my-rightbiao></my-rightbiao>
    <my-paging></my-paging>
    <div @click="getNowFormatDate()" class="nihao"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testVuex: '00000',
    }
  },
  created (){
    console.log("test vues = " + this.testVuex);//组件中定义初始化的值    00000

    this.testVuex = this.$store.state.dzcx.testVuex;//把store中的值赋值到组件中
    console.log("test vues = " + this.testVuex);     //123456

    this.$store.commit("TESTVUEX", "888888");//在mutaition中改变store的值
    console.log("test vues = " + this.$store.state.dzcx.testVuex); //是在stroe中经过mutaition改变后的值 888888
  },
  computed: {
    testVuex_01 () {
      return this.$store.state.dzcx.testVuex;

    }
  },
  methods: {
    getNowFormatDate(){
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if(month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <=9) {
          strDate = "0" + strDate;
      }
      var currentdate = date.getUTCFullYear() + seperator1 + month + seperator1 + strDate
       + " " + date.getHours() + seperator2 + date.getMinutes()
       + seperator2 + date.getSeconds();
      console.log(currentdate)
      return currentdate;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/sass';
  .dzcx{
    width:80%;
    height:626px;
    margin-left:20%;
    margin-top:100px;
    .nihao{
      width: 50px;
      height: 50px;
      background: $highlight-color;
    }
  }
</style>
