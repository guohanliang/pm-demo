<template>
  <div class="zylx">
    <header>
      <div class="left">
        <span>关键字</span>
        <input type="text" placeholder="名称/编号/申请人" v-model="searchword">
      </div>
      <div class="center">
        <span class="sq-time">申请时间</span>
        <div class="block">
          <el-date-picker v-model="startDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <span class="line"></span>
        <div class="block">
          <el-date-picker v-model="endDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
      </div>
      <button @click="select">查询</button>
      <button class="btn1" @click="to">发起申请</button>
    </header>
    <div class="list">
      <el-row>
        <el-col :span="24">
          <el-table border :data="tableData" stripe style="width: 100%">
            <el-table-column prop="rownum" label="序号" min-width="30"></el-table-column>
            <el-table-column prop="dataCode" label="编号" min-width="160"></el-table-column>
            <el-table-column prop="dataTitle" label="标题" min-width="100"></el-table-column>
            <el-table-column prop="applyUser" label="申请人" min-width="50"></el-table-column>
            <el-table-column prop="applyDept" label="申请人部门" min-width="75"></el-table-column>
            <el-table-column prop="applyTime" label="申请时间" min-width="135"></el-table-column>
            <el-table-column prop="status" label="当前状态" min-width="60"></el-table-column>
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
  import axios from 'axios';
  export default {
    data(){
      return {
        searchword: '',
        startDate: '',
        endDate: '',
        tableData: [{
          rownum: '1',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '张三',
          applyDept: '产品部',
          applyTime: '2017-10-10 06:00:00',
          status: '草稿'
        }, {
          rownum: '2',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '李四',
          applyDept: '投资部',
          applyTime: '2017-10-10 06:00:00',
          status: '审批中'
        }, {
          rownum: '3',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '王五',
          applyDept: '技术部',
          applyTime: '2017-10-10 06:00:00',
          status: '结束'
        }, {
          rownum: '4',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '老刘',
          applyDept: '研发部',
          applyTime: '2017-10-10 06:00:00',
          status: '草稿'
        }, {
          rownum: '5',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '张三',
          applyDept: '产品部',
          applyTime: '2017-10-10 06:00:00',
          status: '草稿'
        }, {
          rownum: '6',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '李四',
          applyDept: '投资部',
          applyTime: '2017-10-10 06:00:00',
          status: '审批中'
        }, {
          rownum: '7',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '王五',
          applyDept: '技术部',
          applyTime: '2017-10-10 06:00:00',
          status: '结束'
        }, {
          rownum: '8',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '老刘',
          applyDept: '研发部',
          applyTime: '2017-10-10 06:00:00',
          status: '草稿'
        }, {
          rownum: '9',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '张三',
          applyDept: '产品部',
          applyTime: '2017-10-10 06:00:00',
          status: '草稿'
        }, {
          rownum: '10',
          dataCode: 'P990-170725102421345',
          dataTitle: ' 关于XXX的申请',
          applyUser: '李四',
          applyDept: '投资部',
          applyTime: '2017-10-10 06:00:00',
          status: '审批中'
        }]
      }
    },
    methods: {
      select(){
        axios.get('/api/demo/list/workflow/approvequery')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (err) {
            console.log(error)
          })
      },
      to(){
//        this.$router.push()
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
