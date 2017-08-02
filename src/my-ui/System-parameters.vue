<template>
  <div class="hzcx">
    <el-dialog
      title="会签信息表"
      :visible.sync="dialogVisible3"
      size="tiny"
    >
      <div class="sign">
        <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" height="400">
          <tbody>
          <tr align="center" height="80">
            <td colspan="4">
              <ul class="shenhe">
                <li class="fl name">
                  <el-row class="demo-autocomplete">
                    <el-col :span="24">
                      <el-autocomplete
                        style="margin-left: 15px;  width: 700px"
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                      >
                      </el-autocomplete>
                    </el-col>
                  </el-row>
                </li>
                <li class="fr sel">
                  <el-button type="danger" icon="circle-check">
                    确定
                  </el-button>
                </li>
              </ul>
            </td>
          </tr>
          <tr height="80">
            <td colspan="1" width="30%"></td>
            <td colspan="3" width="70%">
              <div class="add">
                <el-button type="danger" icon="plus">
                  将【人员】添加到【会签】中
                </el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="1">
              <el-tree :data="data" :props="defaultProps"
                       @node-click="handleNodeClick">
              </el-tree>
            </td>
            <td colspan="3">

              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>


            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        restaurants: [],
        state1: '',
        state2: '',
        data: [
          {
            label: '🏠 嘉实集团',
            children: [
              {
                label: '🏠 HAI',
                children: [{
                  label: '🏠 HELLO'
                }]
              },
              {
                label: '🏠 嘉实财富',
                children: [{
                  label: '🏠 WORLD'
                }]
              },
              {
                label: '🏠 嘉实国际',
                children: [{
                  label: '🏠 HI'
                }]
              },
              {
                label: '🏠 嘉实基金',
                children: [
                  {
                    label: '👱 董事长',
                    children: [
                      {
                        label: '👱 总裁',
                        children: [
                          {
                            label: '👱 财务管理',
                          },
                          {
                            label: '👱 股票投资业务',
                          },
                          {
                            label: '👱 固收和机构投资业务',
                          },
                          {
                            label: '👱 法务和内控',
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                label: '🏠 嘉实资本',
                children: [{
                  label: '🏠 HI'
                }]
              },
              {
                label: '🏠 嘉实远见科技',
                children: [{
                  label: '🏠 HI'
                }]
              },
              {
                label: '🏠 嘉实证券（筹）',
                children: [{
                  label: '🏠 HI'
                }]
              },
              {
                label: '🏠 嘉实投资',
                children: [{
                  label: '🏠 HI'
                }]
              },
              {
                label: '🏠 嘉实保汇',
                children: [{
                  label: '🏠 HI'
                }]
              },
              {
                label: '🏠 嘉实科技投资',
                children: [{
                  label: '🏠 HI'
                }]
              },
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        dialogVisible0: false,
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: true,
        dialogVisible4: false,
      }
    },
    methods: {
      handleNodeClick(data) {

      },
      handleSelect(data) {
        console.log(data);
      },
      handleClose(data) {
        console.log(data);
      },
      querySearch(data) {
        console.log(data);
      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hzcx {

  }

</style>
