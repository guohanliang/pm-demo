<template>
  <div class="zylx">
    <header>
      <div class="left">
        <span>关键字</span>
        <input type="text" placeholder="名称/编号/申请人">
      </div>
      <div class="center">
        <span class="sq-time">申请时间</span>
        <div class="block">
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <span class="line"></span>
        <div class="block">
          <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </div>
      <button @click="select">查询</button>
      <button class="btn1" @click="to">发起申请</button>
    </header>
    <div class="list">
      <el-row>
        <el-col :span="24">
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="序号" min-width="30"></el-table-column>
            <el-table-column prop="number" label="编号" min-width="160"></el-table-column>
            <el-table-column prop="headline" label="标题" min-width="100"></el-table-column>
            <el-table-column prop="proposer" label="申请人" min-width="50"></el-table-column>
            <el-table-column prop="branch" label="申请人部门" min-width="75"></el-table-column>
            <el-table-column prop="decision" label="申请时间" min-width="135"></el-table-column>
            <el-table-column prop="condition" label="当前状态" min-width="60"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value1: '',
        value2: '',
        tableData: [{
          id: '1',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '张三',
          branch: '产品部',
          decision: '2017-10-10 06:00:00',
          condition: '草稿'
        }, {
          id: '2',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '李四',
          branch: '投资部',
          decision: '2017-10-10 06:00:00',
          condition: '审批中'
        }, {
          id: '3',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '王五',
          branch: '技术部',
          decision: '2017-10-10 06:00:00',
          condition: '结束'
        }, {
          id: '4',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '老刘',
          branch: '研发部',
          decision: '2017-10-10 06:00:00',
          condition: '草稿'
        }, {
          id: '5',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '张三',
          branch: '产品部',
          decision: '2017-10-10 06:00:00',
          condition: '草稿'
        }, {
          id: '6',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '李四',
          branch: '投资部',
          decision: '2017-10-10 06:00:00',
          condition: '审批中'
        }, {
          id: '7',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '王五',
          branch: '技术部',
          decision: '2017-10-10 06:00:00',
          condition: '结束'
        }, {
          id: '8',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '老刘',
          branch: '研发部',
          decision: '2017-10-10 06:00:00',
          condition: '草稿'
        }, {
          id: '9',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '张三',
          branch: '产品部',
          decision: '2017-10-10 06:00:00',
          condition: '草稿'
        }, {
          id: '10',
          number: 'P990-170725102421345',
          headline: ' 关于XXX的申请',
          proposer: '李四',
          branch: '投资部',
          decision: '2017-10-10 06:00:00',
          condition: '审批中'
        }]
      }
    },
    methods: {
      select(){

      },
      to(){

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .zylx {
    width: calc(100vw - 200px);
    height: 606px;
    background: #eeeeee;
    margin-left: 200px;
    margin-top: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    header {
      overflow: hidden;
      margin-left: 10px;
      margin-right: 10px;
      height: 70px;
      line-height: 70px;
      width: calc(100vw - 220px);
      background-color: white;
      div, button {
        float: left;
      }
      .left {
        margin-left: 10px;
        line-height: 70px;
        width: 25%;
        span {
          font-size: 12px;
        }
        input {
          outline: none;
          height: 20px;
          width: 50%;
        }
      }
      .center {
        /*margin-left: 20px;*/
        line-height: 70px;
        width: 50%;
        .sq-time {
          font-size: 12px;
          float: left;
          margin-right: 5px;
        }
        .block {
          width: 30%;
        }
        .line {
          float: left;
          display: inline-block;
          width: 30px;
          height: 1px;
          background-color: black;
          margin: 35px 5px;
        }
      }
      button {
        margin-top: 23px;
        width: 58px;
        height: 24px;
        border-radius: 3px;
        outline: none;
        background-color: #eeeeee;
      }
      .btn1 {
        margin-left: 10px;
      }
    }
    .list {
      overflow: hidden;
      padding: 10px;
      /*min-width: 568px;*/
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
      height: 506px;
      /*width: calc(100vw - 240px);*/
      background-color: white;
      .block {
        float: right;
        .el-pagination {
          padding: 15px 0;
        }
      }
    }
  }
</style>
