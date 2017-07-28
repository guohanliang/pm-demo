<template>
	<div class="new1 new2">
		<ul>
			<li>
				<span>参数类别：</span><input type="text" name="参数类别" v-model="t1">
			</li>
			<li>
				<span>参数的key：</span><input type="text" name="参数的key" v-model="newData.t2">
			</li>
			<li>
				<span>参数的值：</span><input type="text" name="参数的值" v-model="newData.t3">
			</li>
			<li>
				<span>业务类型：</span><input type="text" name="业务类型" v-model="newData.t4">
			</li>
			<li>
				<span>描述：</span><input type="text" name="描述" v-model="newData.t5">
			</li>
			<li>
				<span>删除标记：</span><input type="text" name="删除标记" v-model="newData.t6">
			</li>
			<li>
				<span>最后修改账号：</span><input type="text" name="最后修改账号" v-model="newData.t7">
			</li>
			<li class="com">
				<a href="#javascript" class="com-ti" @click="com">提交</a>
			</li>
		</ul>
		<div class="close el-icon-close" @click="close"></div>
	</div>
</template>

<script type="text/javascript">
 export default{
 	props:['mmm'],
 	data(){
 		return{
 			newData:{
 				t0:'',
 				t1:'',
 				t2:'',
 				t3:'',
 				t4:'',
 				t5:'',
 				t6:'',
 				t7:'',
 				date:''
 			},
 			t1:''
 		}
 	},
 	methods:{
 		com(){
 			// 加0函数
 			function ad0(n){
 				if(n<10){
 					return('0'+n);
 				}else{
 					return n
 				}
 			};
 			// console.log(this.mmm);
 			// 获取父级的id总数
 			this.newData.t0=this.mmm+1;
 			this.newData.t1=this.t1;
 			// 发送新建的数据给父级
 			// 获取时间戳
 			var oDate=new Date();
 			var y=oDate.getFullYear();
 			var m=oDate.getMonth();
 			var d=oDate.getDate();
 			this.newData.date=y+'-'+ad0(m+1)+'-'+ad0(d);
 			this.$emit('child-msg',this.newData);
 			this.$store.state.pagecon.tableData4=this.newData;
 			this.$store.state.dzcx.newData1=this.newData;
 			console.log(this.$store.state.dzcx.newData1.date)
 		},
 		close(){
 			// 关闭新建窗口
 			var oClose=this.$el.querySelector('.close');
 			oClose.parentNode.style.display='none';
 		}
 	}
 }
</script>

<style type="text/css" scoped>
	.new1{
		position:absolute;
		width:400px;
		height: 400px;
		background-color: cyan;
		top:50px;
		left:300px;
		z-index: 100;
		display: none;
	}
	ul,li{
		list-style-type: none;
		padding: 0;
		margin-bottom: 10px;
	}
	ul[data-v-6d392831]{
		overflow: hidden;
		padding-top: 20px;
		padding-left: 30px;
	}
	li span{
		width:120px;
		display: inline-block;
		text-align:justify;
		text-justify: distribute-all-lines;
	}
	li input{
		width:200px;
		height: 30px;
	}
	.com{
		height:30px;
		text-align:center;	
	}
	.com-ti{
		height: 50px;
		text-decoration: none;
		color:red;
	}
	.close{
		position: absolute;
		width:25px;
		height: 25px;
		background-color: magenta;	
		right:5px;
		top:5px;
		text-align: center;
		line-height: 25px;
	}
</style>