<template>
  <div class="hzcx">
      <div class="sign">
        <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" height="400">
          <tbody>
          <tr align="center" height="80">
            <td colspan="4">
              <ul class="shenhe">

                <li class="fl name" style="width: 700px">

                  <el-table
                    :data="tableData1"
                    height="200"
                    style="width: 100%">
                    <el-table-column
                      prop="department"
                      label="部门"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="180">
                    </el-table-column>

                  </el-table>

                </li>
                <li class="fr sel" style="">
                  <div>
                    <el-button type="danger" icon="circle-check" @click="feedback"
                               style="margin-right:32px; margin-top:60%">
                      确定
                    </el-button>
                    <el-button type="danger" icon="circle-check" @click="clear"
                               style="margin-right:32px; margin-top:60%">
                      取消
                    </el-button>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          <tr height="80">
            <td colspan="1" width="30%"></td>
            <td colspan="3" width="70%">
              <div class="add">
                <el-button type="danger" icon="plus" style="margin-left:30%" @click="select">
                  将【人员】添加到【会签】中
                </el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1">

              <el-tree :data="tableData2"
                       :props="defaultProps"
                       accordion
                       @check-change="handleNodeselect1"
                       show-checkbox
                       check-strictly
                       node-key="setid"
                       ref="tree"
                       highlight-current
              >
              </el-tree>
            </td>
            <td colspan="3">

              <el-table
                ref="multipleTable"
                @selection-change="handleNodeselect2"
                :data="tableData3"
                border
                height="400"
                tooltip-effect="dark"
                style="width: 100%"
              >
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>

                <el-table-column
                  prop="chName"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="jobName"
                  label="职位"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
        
  </div>
</template>

<script>
  import ajax from "axios";
  export default {
    data: function () {
      return {
        seleccted_department: "",
        seleccted_person: [],
        seleccted_collections: {},
        tableData1: [],
        tableData2: [],
        tableData3: [],
        restaurants: [],
        state1: '',
        state2: '',
        defaultProps: {
          children: 'children',
          label: 'orgChName'
        },
        dialogVisible: true,
        dialogVisible0: false,
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: true,
        dialogVisible4: false,
      }
    },
    methods: {
      handleNodeselect1() {
        var selected = this.$refs.tree.getCheckedNodes();
        if (selected.length >= 1) {
          var selectedone = selected[selected.length - 1];
          this.seleccted_department = selectedone.orgChName;
          var code = selectedone.dcOrgCode;
          console.log(code)
        }
        var url = 'http://10.0.192.40:8081/system/user/user/list' + '?' + 'dcOrgCode' + '=' + code;
        var url = 'http://10.0.192.40:8081/system/user/user/list' + '?' + 'dcOrgCode' + '=' + code;
        var that = this;
        ajax.get(url)
          .then(function (response) {
            console.log(response.data.data);
            that.tableData3 = response.data.data;
          })
          .catch(function (err) {
            console.log(err);
          });
      },
      handleNodeselect2(data) {
        var selectedpersons = [];
        for (var i = 0; i < data.length; i++) {
          selectedpersons[i] = data[i].chName;
          this.seleccted_person = selectedpersons;
        }
        console.log(selectedpersons);
      },

      select(){
        for (var i = 0; i < this.seleccted_person.length; i++) {
          this.tableData1.push({
            "department": this.seleccted_department,
            "name": this.seleccted_person[i]
          })
        }

        this.seleccted_department = "";
        this.seleccted_person = [];
        this.$refs.tree.setCheckedKeys([]);
        this.$refs.tree.setCheckedNodes([]);

      },
      clear(){
        while (this.tableData1.length > 0) {
          while (this.tableData1.length > 0) {
            this.tableData1.pop()
          }
        }


      },
      created: function () {
        var that = this;
        ajax.get('http://10.0.192.40:8081/system/user/org/list')
          .then(function (response) {
            that.tableData2 = response.data.data;
          })
          .catch(function (err) {
            console.log(err);
          });
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
