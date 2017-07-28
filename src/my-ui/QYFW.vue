<template>
  <div class="qyfw">
    <dl>
      <dt><h2>审批人员（顺序可调整）</h2></dt>
      <dd>
        <ul>
          <li class="fl look">审核</li>
          <li class="fl name">
            <el-row class="demo-autocomplete">
              <el-col :span="24">
                <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                  @select="handleSelect">
                </el-autocomplete>
              </el-col>
            </el-row>
          </li>
          <li class="fr sel">
            <el-button type="text" @click="dialogVisible0 = true">
              <button class="sel1">选择</button>
            </el-button>
            <el-dialog
              title="会签信息表"
              :visible.sync="dialogVisible0"
              size="tiny"
              :before-close="handleClose">
              <div class="sign">
                <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" height="600" class="dialog-table">
                  <tbody>
                    <tr align="center" height="80">
                      <td colspan="4">
                          <ul class="shenhe">
                            <li class="fl look">审核</li>
                            <li class="fl name">
                              <el-row class="demo-autocomplete">
                                <el-col :span="24">
                                  <el-autocomplete
                                    class="inline-input"
                                    v-model="state1"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                                    @select="handleSelect">
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
                      <td colspan="1" width="30%" ></td>
                      <td colspan="3" width="70%">
                        <div class="add">
                          <el-button type="danger" icon="plus">
                                将【人员】添加到【会签】中
                          </el-button>
                        </div>                      
                      </td>             
                    </tr>
                    <tr>
                      <td colspan="1" class="js-group">
                        <el-tree :data="data" :props="defaultProps" 
                            @node-click="handleNodeClick">
                        </el-tree>
                      </td>
                      <td colspan="3"></td>               
                    </tr>                    
                  </tbody>
                </table>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </li>
        </ul>
      </dd> 
      <dd>
        <ul>
          <li class="fl look">审核</li>
          <li class="fl name">
            <el-row class="demo-autocomplete">
              <el-col :span="24">
                <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                  @select="handleSelect">
                </el-autocomplete>
              </el-col>
            </el-row>
          </li>
          <li class="fr sel">
            <el-button type="text" @click="dialogVisible1 = true">
              <button class="sel1">选择</button>
            </el-button>
            <el-dialog
              title="会签信息表"
              :visible.sync="dialogVisible1"
              size="tiny"
              :before-close="handleClose">
              <div class="sign">
                <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" height="400">
                  <tbody>
                    <tr align="center" height="80">
                      <td colspan="4">
                          <ul class="shenhe">
                            <li class="fl look">审核</li>
                            <li class="fl name">
                              <el-row class="demo-autocomplete">
                                <el-col :span="24">
                                  <el-autocomplete
                                    class="inline-input"
                                    v-model="state1"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                                    @select="handleSelect">
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
                      <td colspan="3"></td>               
                    </tr>                    
                  </tbody>
                </table>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </li>
        </ul>
      </dd>
      <dd>
        <ul>
          <li class="fl look">审核</li>
          <li class="fl name">
            <el-row class="demo-autocomplete">
              <el-col :span="24">
                <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                  @select="handleSelect">
                </el-autocomplete>
              </el-col>
            </el-row>
          </li>
          <li class="fr sel">
            <el-button type="text" @click="dialogVisible2 = true">
              <button class="sel1">选择</button>
            </el-button>
            <el-dialog
              title="会签信息表"
              :visible.sync="dialogVisible2"
              size="tiny"
              :before-close="handleClose">
              <div class="sign">
                <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" height="400">
                  <tbody>
                    <tr align="center" height="80">
                      <td colspan="4">
                          <ul class="shenhe">
                            <li class="fl look">审核</li>
                            <li class="fl name">
                              <el-row class="demo-autocomplete">
                                <el-col :span="24">
                                  <el-autocomplete
                                    class="inline-input"
                                    v-model="state1"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                                    @select="handleSelect">
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
                      <td colspan="3"></td>               
                    </tr>                    
                  </tbody>
                </table>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </li>
        </ul>
      </dd> 
      <dd>
        <ul>
          <li class="fl look">审核</li>
          <li class="fl name">
            <el-row class="demo-autocomplete">
              <el-col :span="24">
                <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                  @select="handleSelect">
                </el-autocomplete>
              </el-col>
            </el-row>
          </li>
          <li class="fr sel">
            <el-button type="text" @click="dialogVisible3 = true">
              <button class="sel1">选择</button>
            </el-button>
            <el-dialog
              title="会签信息表"
              :visible.sync="dialogVisible3"
              size="tiny"
              :before-close="handleClose">
              <div class="sign">
                <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" height="400">
                  <tbody>
                    <tr align="center" height="80">
                      <td colspan="4">
                          <ul class="shenhe">
                            <li class="fl look">审核</li>
                            <li class="fl name">
                              <el-row class="demo-autocomplete">
                                <el-col :span="24">
                                  <el-autocomplete
                                    class="inline-input"
                                    v-model="state1"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                                    @select="handleSelect">
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
                      <td colspan="3"></td>               
                    </tr>                    
                  </tbody>
                </table>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </li>
        </ul>
      </dd>
      <dd>
        <ul>
          <li class="fl look">审核</li>
          <li class="fl name">
            <el-row class="demo-autocomplete">
              <el-col :span="24">
                <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                  @select="handleSelect">
                </el-autocomplete>
              </el-col>
            </el-row>
          </li>
          <li class="fr sel">
            <el-button type="text" @click="dialogVisible4 = true">
              <button class="sel1">选择</button>
            </el-button>
            <el-dialog
              title="会签信息表"
              :visible.sync="dialogVisible4"
              size="tiny"
              :before-close="handleClose">
              <div class="sign">
                <table cellspacing="0" cellpadding="0" border="1" align="center" width="100%" class="dialog-table">
                  <tbody>
                    <tr align="center" height="80">
                      <td colspan="4">
                          <ul class="shenhe">
                            <li class="fl look">审核</li>
                            <li class="fl name">
                              <el-row class="demo-autocomplete">
                                <el-col :span="24">
                                  <el-autocomplete
                                    class="inline-input"
                                    v-model="state1"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入要查询用户的账户/姓名/拼音/岗位"
                                    @select="handleSelect">
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
                      <td colspan="3"></td>               
                    </tr>                    
                  </tbody>
                </table>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </li>
        </ul>
      </dd>       
    </dl>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
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
                      children:[
                        {
                          label:'👱 总裁',
                          children:[
                            {
                              label:'👱 财务管理',
                            },
                            {
                              label:'👱 股票投资业务',                             
                            },
                            {
                              label:'👱 固收和机构投资业务',                              
                            },
                            {
                              label:'👱 法务和内控',
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
        dialogVisible3: false,
        dialogVisible4: false,
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
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleNodeClick(data) {
        console.log(data);
      }
    },
    created(){
    },
    mounted() {
      this.restaurants = this.loadAll();
      // 改变element弹窗默认的大小 
      // var oDialog=this.$el.querySelector('.el-dialog--tiny');
      // oDialog.style.width='70%';
      // oDialog.style.left='830px';
      // $('.look').css('width','100px')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .qyfw{
    width:calc(100vw - 280px);
    height:626px;
    margin-left:280px;
    margin-top:100px;
    overflow: hidden;
  }
  ul,li{
    list-style-type: none;
    color:grey;
    font-size: 20px;
  }
  li{
    height: 80px;
    line-height: 80px;
  }
  ul{
    height: 80px;
    border-bottom:1px solid grey;
    overflow: hidden;
  }
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
  dl{
    width:90%;
    height: 600px;
    margin:50px auto;
    text-align: left;
  }
  dt{
    color: red;
    border-bottom: 2px solid red;
  }
  dd{
  }
  .look{
    margin-left: 30px;  
  }
  .name{
    margin-left: 50px;
    width:300px;
  }
  .sel{
    margin-right: 30px;
  }
  .el-autocomplete, .el-dropdown{
    width: 300px;
  }
  .sel1{
    width: 90px;
    height: 40px;
    font-size: 20px;
    border: 1px solid red;
    color:red;
    background-color: #fff;
  }
  .el-dialog{
    margin-bottom: 0;
  }
  .el-dialog--tiny{
    width: 800px!important;
  }
  .sign{}
  table{
    border-left: 0;
    border-top: 0;
    border-right:1px solid grey;
    border-bottom:1px solid grey;
  }
  tr{
    border: 0;
  }
  .shenhe{
    border: 0;
  }
  .add{
    margin-left: 400px;  
  }
  .el-tree{
    border:0;
    margin-left: 10px;
  }
  .jsfund{
    height: 200px!important;
  }
  .js-group{
    line-height: 800px;
  }
  .el-tree[data-v-1f03069b]{
    /*height: 1000px!important;*/
  }
  .dialog-table{
    height:0;
  }
  @media(max-width: 813px){
    .name{
      margin-left: 0;
    }
    .look{
      width: 50px!important;
      margin-left: 0;
    }
  }
</style>







