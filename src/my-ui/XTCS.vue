<template>
  <div class="xtcs">
    <div id="main"></div>
    <div id="second"></div>
    <div id="third"></div>
    <div id="fourth"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    created(){
    },
    mounted(){
      var echarts = require('echarts');

      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(this.$el.querySelector('#main'));
      var myChart = echarts.init(document.getElementById('main'));
      var myChart1=echarts.init(document.getElementById('second'));
      var myChart2=echarts.init(document.getElementById('third'));
      // 异步加载
      // $.get('./static/list.json').done(function (data) {
      //     alert(1);
      //     myChart.setOption({
      //         title: {
      //             text: '异步数据加载示例'
      //         },
      //         tooltip: {},
      //         legend: {
      //             data:['销量']
      //         },
      //         xAxis: {
      //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      //         },
      //         yAxis: {},
      //         series: [{
      //             name: '销量',
      //             type: 'bar',
      //             data: [5, 20, 36, 10, 10, 20]
      //         }]
      //     });
      // },function(err){alert(0)});
      var option={
        // 背景色
          // backgroundColor: '#2c343c',
          // 字体颜色
          textStyle: {
              // color: 'rgba(255, 255, 255, 0.3)'
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',//饼图
                  roseType:'angle',//南丁格尔图
                  radius: '55%',
                  data:[
                      {value:235, name:'视频广告'},
                      {value:274, name:'联盟广告'},
                      {value:310, name:'邮件营销'},
                      {value:335, name:'直接访问'},
                      {value:400, name:'搜索引擎'},
                      {value:300,name:'百度搜索'}
                  ],
                  //阴影效果
                  itemStyle:{
                    // 🖱hover 的时候高亮加阴影
                    emphasis:{
                      shadowBlur:200,
                      shadowColor:'rgbd(0,0,0,0.5)'
                    }
                  },
                  visualMap: {
                      // 不显示 visualMap 组件，只用于明暗度的映射
                      show: false,
                      // 映射的最小值为 80
                      min: 80,
                      // 映射的最大值为 600
                      max: 600,
                      inRange: {
                          // 明暗度的范围是 0 到 1
                          colorLightness: [0, 1]
                      }
                  }
              }
          ],
          title : {
              text: '饼图程序调用高亮示例',
              x: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度搜索']
          },
          // series : [
          //     {
          //         name: '访问来源',
          //         type: 'pie',
          //         radius : '55%',
          //         center: ['50%', '60%'],
          //         data:[
          //             {value:335, name:'直接访问'},
          //             {value:310, name:'邮件营销'},
          //             {value:234, name:'联盟广告'},
          //             {value:135, name:'视频广告'},
          //             {value:1548, name:'搜索引擎'}
          //         ],
          //         itemStyle: {
          //             emphasis: {
          //                 shadowBlur: 10,
          //                 shadowOffsetX: 0,
          //                 shadowColor: 'rgba(0, 0, 0, 0.5)'
          //             }
          //         }
          //     }
          // ]
      };
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        legend:{
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","帽子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,50]
        }]
      });
      myChart1.setOption(option);
      app.currentIndex = -1;

      setInterval(function () {
          var dataLen = option.series[0].data.length;
          // 取消之前高亮的图形
          myChart1.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: app.currentIndex
          });
          app.currentIndex = (app.currentIndex + 1) % dataLen;
          // 高亮当前图形
          myChart1.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: app.currentIndex
          });
          // 显示 tooltip
          myChart1.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: app.currentIndex
          });
      }, 1000);

      myChart2.setOption({
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
            },
            {   // 这个dataZoom组件，也控制x轴。
              type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
              start: 10,      // 左边在 10% 的位置。
              end: 60         // 右边在 60% 的位置。
            },
            {
                type: 'slider',
                yAxisIndex: 0,
                start: 30,
                end: 80
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                start: 30,
                end: 80
            }
        ],
        legend:{
          data:['散点图']
        },
        series: [
            {
                name:'散点图',
                type: 'scatter', // 这是个『散点图』
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                symbolSize: function (val) {
                    return val[2] * 40;
                },
                data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
            }
        ]
      });
      myChart.on('click', function (params) {
          console.log(params);
          window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
      });
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .xtcs{
    width:calc(100vw - 280px);
    /*height:626px;*/
    /*background: cyan;*/
    margin-left:280px;
    margin-top:100px;
    overflow: hidden;
  }
  #main{
    background-color: red;
    width:600px;
    height: 300px;
    float: left;
  }
  #second{
    width: 500px;
    height: 300px;
    float: right;
  }
  #third{
    width:600px;
    height: 300px;
    float: left;
  }
  @media(max-width: 1380px){
    #second{
      float:left;
    }
  }
</style>
