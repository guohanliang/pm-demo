<template>
  <div class="ywcs">
  	<ul>
		<li>
			<h3 class="base-information">
				基础信息
			</h3>
			<ol>
				<li class="base-information1">
					<el-row >
					  <el-col :span="7">
					  	<div>
					  		<i class="fl">编号</i>
					  		<el-input
							  placeholder="P233-171020102499999"
							  v-model="input1"
							  :disabled="true" class="fl">
							</el-input>
					  	</div>
					  </el-col>
					  <el-col :span="10"><div class="tiaoxingma">
                  <img src="../assets/1.jpg" width="90%" height="40" alt="个人条形码"></div>
            </el-col>
					  <el-col :span="7">
					  	<div class="require-time ">
					  		<i class="fl">申请时间</i>
					  		<el-input
                  placeholder="2017-07-14"
                  v-model="input1"
                  :disabled="true" class="fl">
                </el-input>
					  	</div>
					  </el-col>
					</el-row>
				</li>
        <li class="base-information1">
          <el-row >
            <el-col :span="7">
              <div>
                <i class="fl">编号</i>
                <el-input
                placeholder="郭汉良"
                v-model="input1"
                :disabled="true" class="fl">
              </el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="require-time require-time1">
                <i class="fl">申请人部门</i>
                <el-input
                  placeholder="产品管理部"
                  v-model="input1"
                  :disabled="true" class="fl">
                </el-input>
              </div>
            </el-col>
          </el-row>
        </li>
        <li class="caption">
            <span class="caption-head">标题</span>
            <el-input v-model="input0" placeholder="请输入内容"></el-input>
        </li>
        <li class="caption caption1">
            <span class="caption-head fl">标签</span>
            <el-select
              v-model="value10"
              multiple
              filterable
              allow-create
              placeholder="请选择文章标签">
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button>选择</el-button>
        </li>
			</ol>
		</li>
  	</ul>
  </div>
</template>

<script>
export default {
	data(){
		return {
      input:'',
      input0:'',
			input1:'',
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
        value10: []
		}
	},
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ywcs{
    width: calc(100vw - 200px);
    height:626px;
    margin-left:200px;
    margin-top:100px;
    overflow: hidden;
  }
  ul{
  	width:95%;
  	list-style-type: none;
  	height:100px;
  	margin:50px auto;
  }
  .base-information{
  	border-bottom:1px solid pink;
  	color:pink;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  ol,li{
  	list-style-type: none;
  }
  .fl{
  	float:left;
  }
  .el-input{
  	width:70%;
  }
  .base-information1{
  	margin-top:20px;
  }
  i{
  	margin-right: 30px;
  	font-style: normal;
  }
  .tiaoxingma{
  	margin-left: 20px;
  }
  .require-time{
  	overflow: hidden;
  }
  .require-time i{
  	margin-right: 10px;
  }
  .require-time1{
    margin-left:20px;
  }
  .caption{
    margin-bottom:15px;
  }
  .caption-head{
    margin-right: 25px;
  }
  .caption .el-input{
    width:93%;
  }
  .caption1 .el-select{
    width: 93%;
    margin-left: 5px;
  }
  .caption1{
    position: relative;
  }
  .caption1 .el-button{
    position: absolute;
    right:0;
  }
  .caption1 .el-select .el-input .el-input__icon{
    opacity: 0;
    z-index:0;
  }
  @media(max-width: 1212px){
    .caption1 .el-button{
      right:6%;
      top:23px;
    }
  }

</style>
