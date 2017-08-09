<template>
  <div class="approver">
    <h4>审批人</h4>
    <span></span>
    <ul>
      <li>
        <button class="license">本部门审批</button>
      </li>
      <li><span class="line"></span></li>
      <li class="input1">
        <el-col>
          <el-select
            v-model="value9"
            class="inline-input"
            style="width: 900px"
            multiple
            filterable
            remote
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </li>
      <li>
        <button class="choice" @click="dialogVisible = true">选择</button>
        <el-dialog
          title="选择审批人"
          :visible.sync="dialogVisible"
          size="tiny"
          :before-close="handleClose">
          <approverperson></approverperson>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </li>
    </ul>
    <div v-for="(item1,index) in mydata">
      <ul>
        <li>
          <button class="license">{{ item1.activityName }}</button>
        </li>
        <li><span class="line"></span></li>
        <li class="input1">
          <el-col>
            <el-select
              v-model="value9"
              class="inline-input"
              style="width: 900px"
              multiple
              filterable
              remote
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
              <el-option
                v-for="item in options5"
                :key="item.bizunitName"
                :label="item.chName"
                :value="item.bizunitName">
              </el-option>
            </el-select>
          </el-col>
        </li>
        <li>
          <button class="choice" @click="dialogVisible = true">选择</button>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
  import ajax from "axios";
  import Approverperson from '../components/approve-person.vue'
  export default{
    components: {
      Approverperson
    },
    data(){
      return {
        state1: '',
        dialogVisible: false,
        options4: [],
        value9: [],
        value10: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        mydata: [

        ]
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      remoteMethod(query) {
          var that = this;
        console.log()
        if (query !== '') {
          this.loading = true;
          ajax.get('http://localhost/api/v1/system/user/userororg/list?searchword='+query+'&pageNo=1&pageSize=10000')
            .then(function (response) {
              console.log(response);
              that.options5 = response.data.data.userororginfo;
              that.loading = false;

//              chName  orgChName
            })
            .catch(function (err) {
              console.log(err);
            });
//          setTimeout(() => {
//            this.loading = false;
//            this.options4 = this.list.filter(item => {
//              return item.label.toLowerCase()
//                  .indexOf(query.toLowerCase()) > -1;
//            });
//          }, 200);
        } else {
          this.options4 = [];
        }
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
//        三目运算符
        var results = queryString ?
          restaurants.filter(this.createFilter(queryString)) : restaurants;
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
      var that = this;
      ajax.get('http://localhost/api/v1/system/bpm/defaultapprover/list?procTypeCode=p990&parameter1=1&parameter2&parameter1=3')
        .then(function (response) {
          that.mydata = response.data.data;
          console.log(that.mydata)
        })
        .catch(function (err) {
          console.log(err);
        });
      this.restaurants = this.loadAll();
      this.list = this.states.map(item => {
        return {value: item, label: item};
      });
    }
  }
</script>
<style scoped lang="scss">
  .approver {
    background-color: white;
    margin: 10px;
    height: 400px;
    border: 1px solid black;
    width: 90%;
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
    ul {
      display: flex;
      margin-left: 10px;
      margin-right: 10px;
      overflow: hidden;
      li {
        float: left;
        margin-top: 20px;
        margin-bottom: 5px;
      }
      .input1 {
        flex: 1;
      }
      .license, .choice {
        border: none;
        border-radius: 2px;
        width: 100px;
        height: 25px;
        background-color: #eeeeee;
        /*outline: none;*/
      }
      .license {
        outline: none;
      }
      .choice {
        margin-left: 10px;
        margin-right: 10px;
      }
      .line {
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
