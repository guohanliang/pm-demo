<template>
  <div class="left">
    <span @click="todogo" class="biaoti">Capital Management Platform</span>
  </div>
</template>

<script>
export default {
  methods:{
      todogo:function(){
          alert(1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left{
    background: lightseagreen;
    width: 200px;
    height:100px;
    position: absolute;
    top:0;
    left:0;
  }
  .biaoti{
    color: #fff;
    text-align: center;
    font-size:16px;
    line-height: 100px;
    height:100px;
  }
</style>
