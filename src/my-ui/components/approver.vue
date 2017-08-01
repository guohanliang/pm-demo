<template>
  <div class="approver">
    <h4>审批人调整</h4>
    <span></span>
    <ul>
      <li><button class="license">本部门审批</button></li>
      <li><span class="line"></span></li>
      <li class="input1">
        <el-col>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </li>
      <li><button class="choice">选择</button></li>
    </ul>
    <ul>
      <li><button class="license">本部门审批</button></li>
      <li><span class="line"></span></li>
      <li class="input1">
        <el-col>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </li>
      <li><button class="choice">选择</button></li>
    </ul>
    <ul>
      <li><button class="license">本部门审批</button></li>
      <li><span class="line"></span></li>
      <li class="input1">
        <el-col>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </li>
      <li><button class="choice">选择</button></li>
    </ul>
    <ul>
      <li><button class="license">本部门审批</button></li>
      <li><span class="line"></span></li>
      <li class="input1">
        <el-col>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </li>
      <li><button class="choice">选择</button></li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        state1: ''
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
          {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
          {"value": "阳阳麻辣烫", "address": "天山西路389号"},
          {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
<style scoped lang="scss">
  .approver {
    background-color: white;
    margin: 10px;
    height: 300px;
    border: 1px solid gray;
    h4 {
      color: red;
      margin-left: 10px;
    }
    span {
      /*margin: 0 2px;*/
      height: 1px;
      background-color: red;
      display: block;
      width: 100%;
    }
    ul{
      display: flex;
      margin-left: 10px;
      margin-right: 10px;
      overflow: hidden;
      li{
        float: left;
        margin-top: 20px;
        margin-bottom: 5px;
      }
      .input1{
        flex: 1;
      }
      .license,.choice{
        border: none;
        border-radius: 2px;
        width: 100px;
        height: 25px;
        background-color: #eeeeee;
        /*outline: none;*/
      }
      .license{
        outline: none;
      }
      .choice{
        margin-left: 10px;
        margin-right: 10px;
      }
      /*.choice:hover{*/
        /*background-color: red;*/
      /*}*/
      .line{
        width: 30px;
        height: 1px;
        background-color: gray;
        display: block;
        margin-top: 12px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
</style>
