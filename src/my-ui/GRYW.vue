<template>
  <div class="gryw">
    <h2>审批设置</h2>
    <table border="1" cellpadding="0" cellspacing="0" width="1000" height="300" align="center">
      <tbody>
        <tr align="center">
          <td style="border-top:1px solid red">
            <span class="shen">律师审核</span>
            <el-select v-model="value1" placeholder="未指定">
              <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
            <span class="con con1">合同或者承诺函，必须指定律师会签</span>
          </td>
        </tr>
        <tr align="center">
          <td>
            <span class="shen">财务审核</span>
            <el-select v-model="value2" placeholder="未指定">
              <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
            <span class="con con1">审批涉及预算、收入、成本支出，需要财务总监审批。</span>
          </td>
        </tr>
        <tr align="center">
          <td>
            <span class="shen">税务审核</span>
            <el-select v-model="value3" placeholder="未指定">
              <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
            <span class="con">呈签事项涉及潜在财务影响的（如合同涉税条款、新业务形式、企业税务登记信息调整等），需进行税务会签</span>
          </td>
        </tr>
        <tr align="center">
          <td>
            <span class="shen1">IT归口预算</span>
            <el-select v-model="value4" placeholder="不涉及">
              <el-option-group
                v-for="group in options3"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
            <span class="con">涉及IT软硬件资源、信息服务采购等立项申请、合同申请，需进行IT归口预算审核</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          options3: [{
            label:'选择',
            options: [{
              value: 'Shanghai',
              label: '未指定'
            }, {
              value: 'Beijing',
              label: '无需律师审核'
            }]
          }, {
            label: '律师',
            options: [{
              value: 'Chengdu',
              label: '曾国藩'
            }, {
              value: 'Shenzhen',
              label: '梁启超'
            }, {
              value: 'Guangzhou',
              label: '谭嗣同'
            }, {
              value: 'Dalian',
              label: '梁思成'
            }]
          }],
          value1: '',
          value2:'',
          value3:'',
          value4:''
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gryw{
    width: calc(100vw - 200px);
    height:626px;
    margin-left:200px;
    margin-top:100px;
    overflow: hidden;
  }
  table{
    margin:0 auto;
    border-color: lightgrey;
  }
  .shen,.shen1{
    margin-left: 20px;
  }
  h2{
    padding-left: 5%;
  }
</style>
