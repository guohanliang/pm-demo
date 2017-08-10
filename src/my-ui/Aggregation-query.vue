<template>
  <div class="hzcx">
    <!--<my-fujian></my-fujian>-->
    <div v-for="(item1,index1) in mydata" class="div">
      <approver :name = "item1.activityName" ></approver>
    </div>


    <!--<approveperson v-show="selectVisible"></approveperson>-->



  </div>
</template>


<script>
  import approver from "./approver/Approver.vue"
//  import Approveperson from "./components/approve-person.vue"
  import ajax from "axios";
//  import Approverperson from './components/approve-person.vue'
  export default{
    components: {
      approver,
//      Approveperson
    },
    data(){
      return {
        selectVisible: true,
        state1: '',
        dialogVisible: false,
        options4: [],
        value0:[],
        value1:[],
        value2:[],
        value3:[],
        value4:[],
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
      go(index1){
        console.log(index1)
      },
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
      ajax.get('http://localhost/api/v1/system/bpm/defaultapprover/list?procTypeCode=p900&parameter1=1&parameter2=2&parameter1=3')
        .then(function (response) {
          that.mydata = response.data.data;
//          for(var i = 0;i<5;i++){
//              mydata[i].value = 'value'+i;
//          }
          console.log(that.mydata)
        })
        .catch(function (err) {
          console.log(err);
        });
      this.restaurants = this.loadAll();
      this.list = this.states.map(item => {
        return {value: item, label: item};
      });

      setTimeout(function () {

//
//        $('.approver .el-select').eq(index).attr('v-model','value'+index);
//        $('.div').click(function () {
//          var index = $(".div").index(this);
//          alert(index);
//          $('.approver .el-select').eq(index).attr('id',index);
//
//          console.log($('.approver .el-select').eq(index).attr('v-model'));
//          console.log(this.value0,this.value1,this.value2,this.value3,this.value4)
//        });

      },20)




    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hzcx{
    width: calc(100vw - 200px);
    /*height:2626px;*/
    /*margin-left:200px;*/
    /*margin-top:100px;*/
    background: #F8F8FA;
    overflow: hidden;
  }

</style>
