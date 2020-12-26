<template>
  <div id="num">
    <div class="shop">
      <el-row>
        <h1>热门推荐商品</h1>
        <el-button type="primary" 
          plain 
          size="small" 
          v-for="(item, index) in commodityList" 
          :key="index"
          @click="drawer = true">{{item}}</el-button>
        <el-drawer
          :visible.sync="drawer"
          :with-header="false">
          <div class="classify">
            <el-row v-for="(item, index) in classifyList" :key="index">
              <el-button type="warning" size="small">{{item.tit}}  ></el-button>
              <span v-for="(i, index) in item.tit1" :key="index">{{i}}</span>
            </el-row>
          </div>
        </el-drawer>
      </el-row>
      <el-tabs type="border-card">
        <el-tab-pane :label="item" v-for="(item, index) in hotList" :key="index">
          <div class="dl">
            <div class="detail" v-for="(item, index) in shopList" :key="index">
              <img :src="item.img" alt="" srcset="">
              <p>{{item.title}}</p>
              <span class="pspan">{{item.desc}}</span>
              <div class="price">
                <span class="span1">
                  {{item.newPrice}}
                  <i></i>
                </span>
                <span class="span2">{{item.oldPrice}}</span>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="place">
        <h1>热门目的地商户|<span class="like">猜你喜欢</span></h1>
        <hr>
        <div class="cmerh">
          <div class="merchant" v-for="(item, index) in contentList" :key="index">
            <img :src="item.img" alt="" srcset="">
            <div class="content">
              <p class="cp1">{{item.title}}</p>
              <p class="cp2">{{item.sp}}<span class="cspan1">退货包运费</span></p>
              <p class="cp3">{{item.price}}<span class="cspan2">已售1652件</span></p>
              <p class="cp4"><span class="cspan3">领劵</span><em>五元优惠劵</em></p>
              <p class="cp5"><span class="cspan4">返现</span><em>满五十立减10</em></p>
              <p class="cp6">{{item.des}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id='data'>
      <header>
      <h1>购物-数据可视化分析</h1>
      <div class="showTime">{{date | formatDate}}</div>
      </header>
      <div class="mainbox">
        <div class="column">
          <div class="panel bar">
            <h2>柱形图-就业行业</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line">
            <h2>柱形图-就业行业<a href="javascript:;">2020</a><a href="javascript:;">2021</a></h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie">
            <h2>柱形图-就业行业</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
        </div>
        <div class="column">
          <div class="no">
            <div class="no-hd">
              <ul>
                <li>123563</li>
                <li>198762</li>
              </ul>
            </div>
            <div class="no-bd">
              <ul>
                <li>前端需求人数</li>
                <li>市场供应人数</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="chart"></div>
          </div>
        </div>
        <div class="column">
          <div class="panel bar1">
            <h2>柱形图-就业行业</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel line1">
            <h2>柱形图-就业行业</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel pie1">
            <h2>柱形图-就业行业</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../../../assets/css/index.css'
import '../../../assets/js/china'



export default {
  name: '',
  data () {
    return {
      date: new Date(),
      commodityList: ['商品类型', '优惠类型', '退免税', '名店购'],
      drawer: false,
      hotList: ['家居', '美食', '美妆', '数码', '服饰鞋包', '纪念品'],
      classifyList: [
        {
          tit: '电器',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '手机',
          tit1: ['5G手机', '老年机', '全屏手机', '游戏手机', '拍照手机']
        },
        {
          tit: '家居',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '服装',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '特产',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '图书',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '艺术',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '珠宝',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '宠物',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '玩具',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        },
        {
          tit: '医药',
          tit1: ['电视', '洗衣机', '空调', '冰箱', '录音机', '电饭煲', '吸尘器']
        }
      ],
      shopList: [
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth.jpg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥1680.0',
          oldPrice: '￥2290.0'
        }
      ],
      contentList: [
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        },
        {
          img: require('../../../assets/images/shopImg/jewelry.jpg'),
          title: '女生简约闺蜜、情侣',
          sp: '关注立减五元',
          price: '￥158.0',
          des: '销售榜第五名'
        }
      ]
    }
  },
  mounted() {
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
    this.drawLine5()
    this.drawLine6()
    this.drawLine7()
  },
  filters: {
    formatDate() {
      var t = null
      clearInterval(t)
      var dt = new Date()
      var y = dt.getFullYear()
      var mt = dt.getMonth() + 1
      var day = dt.getDate()
      var h = dt.getHours()
      var m = dt.getMinutes()
      var s = dt.getSeconds()
      return '当前时间：' + y + 
      '年' + mt + '月' + day + '-' + h + '时' + m + '分' + s + '秒'
    }
  },
  methods: {
    drawLine1() {
        var myChart = this.$echarts.init(document.querySelector('.bar .chart'))
        var option = {
          color: ['#2f89cf'],
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '0%',
              top: '10px',
              right: '0%',
              bottom: '4%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                  axisTick: {
                      alignWithLabel: true,
                      show: false
                  },
                  axisLabel: {
                    color: 'rgba(255, 255, 255, .6)',
                    fontSize: '8'
                  },
                  axisLine: {
                    show: false
                  }
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  axisLabel: {
                    color: 'rgba(255, 255, 255, .6)',
                    fontSize: '12'
                  },
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255, 255, 255, .1)",
                      width: 2
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: 'rgba(255, 255, 255, .1)'
                    }
                  }
              }
          ],
          series: [
              {
                  name: '直接访问',
                  type: 'bar',
                  barWidth: '35%',
                  data: [200, 300, 300, 900, 1500, 1200, 600],
                  itemStyle: {
                    barBorderRadius: 5
                  }
              }
          ]
      };
        myChart.setOption(option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
    },
    drawLine2() {
        var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']

        var myChart2 = this.$echarts.init(document.querySelector('.bar1 .chart'))

        var option2 = {
          grid: {
              top: '10%',
              left: '22%',
              bottom: '10%'
          },
          xAxis: {
              show: false
          },
          yAxis: [
            {
              type: 'category',
              inverse: true,
              data: ['javaScript', 'Vue', 'node.js', 'jQuery', 'React'],
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#fff'
              }
          },
          {
            show: true,
            data: [702, 350, 610, 793, 664],
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            }
          }
        ],
          series: [
              {
                  name: '条',
                  type: 'bar',
                  data: [70, 34, 60, 78, 69],
                  yAxisIndex: 0,
                  itemStyle: {
                    barBorderRadius: 20,
                    color: function(params) {
                      var num = myColor.length;
                      return myColor[params.dataIndex % num]
                    }
                  },
                  barCategoryGap: 50,
                  barWidth: 8,
                  label: {
                    show: true,
                    position: 'inside',
                    formatter: "{c}%"
                  }
              },
              {
                  name: '框',
                  type: 'bar',
                  data: [100, 100, 100, 100, 100, 100],
                  yAxisIndex: 1,
                  barCategoryGap: 50,
                  barWidth: 15,
                  itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                  }
              }
          ]
      };
        myChart2.setOption(option2)
        window.addEventListener('resize', function () {
          myChart2.resize()
        })
    },
    drawLine3() {
        var myChart3 = this.$echarts.init(document.querySelector('.line .chart'))
        var option3 = {
          //修改两条线的颜色
          color: ['#00f2f1', '#ed3f35', '#8B78F6'],
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['新增粉丝', '收藏数', '转发数'],
              textStyle: {
                color: '#4c9bfd'
              },
              right: '10%'
          },
          grid: {
              top: '20%',
              left: '3%',
              right: '4%',
              bottom: '3%',
              show: true,
              borderColor: '#012f4a',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
              axisTick: {
                show: false//去除刻度线
              },
              axisLabel: {
                color: '#4c9bfd',//文本颜色
                fontSize: '6'
              },
              axisLine: {
                show: false//去除轴线
              }
          },
          yAxis: {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#4c9bfd'
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: '#012f4a'//分割线颜色
                }
              }
          },
          series: [
              {
                name: '新增粉丝',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210, 100, 210, 320, 120, 200]
              },
              {
                name: '收藏数',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 100, 66, 90, 210, 10, 520]
              },
              {
                name: '转发数',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [100, 120, 789, 800, 168, 231, 222, 210, 234, 90, 128, 210]
            }
          ]
      };
        myChart3.setOption(option3)
        window.addEventListener('resize', function () {
          myChart3.resize()
        })
    },
    drawLine4() {
      var myChart4 = this.$echarts.init(document.querySelector('.line1 .chart'))
      var option4 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: "0%",
            textStyle: {
              color: "rgba(255, 255, 255, .5)",
              fontSize: '12'
            },
            data: ['邮件营销', '联盟广告']
        },
        grid: {
            left: '10',
            top: "30",
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['01', '03', '05', '07', '09', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
              axisLabel: {
                textStyle: {
                  color: "rgba(255, 255, 255, .6)",
                  fontSize: 12
                }
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255, 255, 255, .2)"
                }
              }
            }
        ],
        yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255, 255, 255, .1)"
                }
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(255, 255, 255, .6)",
                  fontSize: 12
                }
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255, 255, 255, .1)"
                }
              }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                //填充区域
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 
                    0, 
                    0, 
                    1, 
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                //设置拐点
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                  color: "#0184d5",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12
                },
                data: [20, 110, 30, 160, 40, 130, 10, 120, 40, 120, 60, 130, 20, 110, 
                  20, 180, 40, 160, 40, 180, 40, 150, 30, 120, 40, 160, 10, 50, 20, 30],
                smooth: true,
                //线条样式
                lineStyle: {
                  color: "#0184d5",
                  width: 2
                }
            },
            {
                name: '联盟广告',
                type: 'line',
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 
                    0, 
                    0, 
                    1, 
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 216, 135, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 216, 135, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                  color: "#0184d5",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12
                },
                data: [20, 40, 50, 30, 20, 10, 60, 110, 50, 20, 10,40, 60, 20, 40, 
                  50, 20, 60, 10, 20, 50, 10, 120, 10, 40, 20, 50, 60, 30, 20],
                smooth: true
            }
        ]
      };
      myChart4.setOption(option4)
      window.addEventListener('resize', function () {
        myChart4.resize()
      })
    },
    drawLine5() {
      var myChart5 = this.$echarts.init(document.querySelector('.pie .chart'))
        var option5 = {
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
              bottom: "0%",
              itemWidth: 10,
              itemHeight: 10,
              data: ['18岁以下', '18-22岁', '23-35岁', '35-50岁', '50岁以上'],
              textStyle: {
                color: "rgba(255, 255, 255, .5)",
                fontSize: "10"
              }
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  radius: ["40%", "60%"],//饼形图大小,内圆半径和外圆半径
                  label: {
                      show: false,
                      position: 'center'
                  },
                  labelLine: {
                      show: false
                  },
                  data: [
                      {value: 335, name: '18岁以下'},
                      {value: 1310, name: '18-22岁'},
                      {value: 1234, name: '23-35岁'},
                      {value: 335, name: '35-50岁'},
                      {value: 158, name: '50岁以上'}
                  ]
              }
          ]
      };
        myChart5.setOption(option5)
        window.addEventListener('resize', function () {
          myChart5.resize()
        })
    },
    drawLine6() {
      var myChart6 = this.$echarts.init(document.querySelector('.pie1 .chart'))
        var option6 = {
          
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              bottom: "0%",
              itemWidth: 5,
              itemHeight: 5,
              textStyle: {
                color:"rgba(255, 255, 255, .5)",
                fontSize: 10
              }
          },
          series: [
              {
                  name: '热门城市',
                  type: 'pie',
                  radius: [30, 110],
                  center: ['50%', '50%'],
                  roseType: 'radius',
                  radius: ["10%", "60%"],
                  label: {
                    fontSize: 10
                  },
                  //饼形图线长度
                  labelLine: {
                    length: 6,
                    length2: 8
                  },
                  data: [
                      {value: 10, name: '贵州'},
                      {value: 5, name: '北京'},
                      {value: 15, name: '深圳'},
                      {value: 25, name: '上海'},
                      {value: 20, name: '云南'},
                      {value: 35, name: '成都'},
                      {value: 30, name: '厦门'},
                      {value: 40, name: '浙江'}
                  ]
              }
          ]
      };
        myChart6.setOption(option6)
        window.addEventListener('resize', function () {
          myChart6.resize()
        })
    },
    drawLine7() {
      var myChart7 = this.$echarts.init(document.querySelector('.map .chart'))
      var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028],
        '贵州': [106.643183,26.658801],
        '新疆': [87.619677,43.832125]
      };

      var XAData = [
          [{name:'西安'}, {name:'拉萨',value:100}],
          [{name:'西安'}, {name:'上海',value:100}],
          [{name:'西安'}, {name:'广州',value:100}],
          [{name:'西安'}, {name:'西宁',value:100}],
          [{name:'西安'}, {name:'银川',value:100}],
          [{name:'上海'}, {name:'贵州',value:100}]
      ];

      var XNData = [
          [{name:'西宁'}, {name:'北京',value:100}],
          [{name:'西宁'}, {name:'上海',value:100}],
          [{name:'西宁'}, {name:'广州',value:100}],
          [{name:'西宁'}, {name:'西安',value:100}],
          [{name:'西宁'}, {name:'银川',value:100}],
          [{name:'贵州'}, {name:'新疆',value:100}]
      ];

      var YCData = [
          [{name:'银川'}, {name:'北京',value:100}],
          [{name:'银川'}, {name:'广州',value:100}],
          [{name:'拉萨'}, {name:'哈尔滨',value:100}],
          [{name:'银川'}, {name:'西安',value:100}],
          [{name:'银川'}, {name:'西宁',value:100}],
      ];

      var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      //var planePath = 'arrow';
      var convertData = function (data) {
          
          var res = [];
          for (var i = 0; i < data.length; i++) {
            
              var dataItem = data[i];

              var fromCoord = geoCoordMap[dataItem[0].name];
              var toCoord = geoCoordMap[dataItem[1].name];
              if (fromCoord && toCoord) {
                  res.push({
                      fromName: dataItem[0].name,
                      toName: dataItem[1].name,
                      coords: [fromCoord, toCoord],
                      value: dataItem[1].value
                  });
              }
          }
          return res;
          
      };

      var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
      var series = [];
      [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {  
          series.push({
              name: item[0] + ' Top3',
              type: 'lines',
              zlevel: 1,
              effect: {
                  show: true,
                  period: 6,
                  trailLength: 0.7,
                  color: 'red',   //arrow箭头的颜色
                  symbolSize: 3
              },
              lineStyle: {
                  normal: {
                      color: color[i],
                      width: 0,
                      curveness: 0.2
                  }
              },
              data: convertData(item[1])
          },
          {
              name: item[0] + ' Top3',
              type: 'lines',
              zlevel: 2,
              symbol: ['none', 'arrow'],
              symbolSize: 10,
              effect: {
                  show: true,
                  period: 6,
                  trailLength: 0,
                  symbol: planePath,
                  symbolSize: 15
              },
              lineStyle: {
                  normal: {
                      color: color[i],
                      width: 1,
                      opacity: 0.6,
                      curveness: 0.2
                  }
              },
              data: convertData(item[1])
          },
          {
              name: item[0] + ' Top3',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                  brushType: 'stroke'
              },
              label: {
                  normal: {
                      show: true,
                      position: 'right',
                      formatter: '{b}'
                  }
              },
              symbolSize: function (val) {
                  return val[2] / 8;
              },
              itemStyle: {
                normal: {
                  color: color[i],
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
              },
              data: item[1].map(function (dataItem) {
                  return {
                      name: dataItem[1].name,
                      value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                  };
              })
          });
      });
      var option7 = {
          tooltip : {
              trigger: 'item', 
              formatter:function(params, ticket, callback){
                  if(params.seriesType=="effectScatter") {
                      return "线路："+params.data.name+""+params.data.value[2];
                  }else if(params.seriesType=="lines"){
                      return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                  }else{
                      return params.name;
                  }
              } 
          },
          legend: {
              orient: 'vertical',
              top: 'bottom',
              left: 'right',
              data:['西安 Top3', '西宁 Top3', '银川 Top3'],
              textStyle: {
                  color: '#fff'
              },
              selectedMode: 'multiple'
          },
          geo: {
              map: 'china',
              label: {
                  emphasis: {
                      show: true,
                      color:'#fff'
                  }
              },
              roam: true,
              itemStyle: {
                normal: {
                    areaColor: 'rgba(20, 41, 87, .8)',
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
              }
          },
          series: series
      };
      myChart7.setOption(option7)
      window.addEventListener('resize', function () {
        myChart7.resize()
      })
    }
  }
}
</script>
<style  scoped>
  #num {
    margin: 40px 10px 0 10px;
  }
  .shop {
    border: 2px solid #F8F8FF;
    margin-bottom: 40px;
    padding: 10px;
  }
  .el-button {
    margin-top: 15px;
  }
  .el-tabs {
    margin-top: 30px;
  }
  .detail {
    width: 350px;
    background-color: white;
    border: 2px solid #F5F5F5;
    margin: 20px 8px;
    cursor: pointer;
    padding: 3px 3px;
  }
  .price {
    float: right;
    width: 160px;
    height: 24px;
    border: 1px solid red;
    margin: 0 auto;
    line-height: 24px;
  }

  .span1 {
    position: relative;
    float: left;
    width: 90px;
    height: 100%;
    background-color: red;
    color: #FFFFFF;	
  }
    
  .span1 i {
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent white transparent transparent;
    border-width: 24px 12px 0 0;
  } 
  .span2 {
    text-decoration: line-through;
  }
  .detail img {
    width: 100%;
  }
  .dl {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .detail p, .pspan {
    font-size: 16px;
    padding-left: 8px;
  }
  .detail p:hover, .pspan:hover {
    color: darkorange;
  }
  .detail p {
    color: #D3D3D3;
    font-weight: 700;
  }
  .deatail .pspan {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .place {
    margin-top: 60px;
  }
  .place h1 {
    margin: 12px 0;
  }
  .place .cmerh {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .place .like {
    padding-left: 5px;
    color: red;
    font-size: 15px;
  }
  .place .merchant {
    width: 400px;
    height: 200px;
    background-color: white;
    margin-top: 50px;
    padding: 5px 5px;
  }
  .place .merchant img {
    float: left;
    width: 220px;
    height: 200px;
  }
  .place .merchant .content {
    padding: 10px 8px;
  }
  .place .merchant .cp1 {
    font-size: 19px;
  }
  .place .merchant .cp2, .cp3 {
    color: red;
    margin: 8px 5px;
  }
  .cp4, .cp5 {
    margin-top: 8px;
  }
  .place .merchant  .cspan3, .cspan4{
    color: white;
    background-color: red;
    padding: 2px 5px;
    font-weight: 700;
    margin: 8px 5px;
  }
  .place .merchant .cp2 .cspan1, .cspan2, em {
    float: right;
    color: #CDC0B0;
  }
  .cp6 {
    margin-top: 15px;
    font-size: 15px;
  }
  .classify span{
    padding: 5px 8px;
  }
  .classify span:hover {
    color: darkorange;
    cursor: pointer;
    font-weight: 700;
  }
</style>
