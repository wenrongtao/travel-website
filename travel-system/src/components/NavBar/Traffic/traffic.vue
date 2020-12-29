<template>
  <div class="traff">
    <div class="trans">
      <el-dropdown size="medium" placement="bottom" v-for="(item, index) in transports" :key="index">
        <el-button type="primary">
          {{item.transp1}}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(i, index) in item.transp2" :key="index">{{i}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="question">
        <div class="bg" v-for="(item, index) in transportbg" :key="index">
          <img :src="item.img" alt="" srcset="">
          <div class="ques"><p>{{item.theme}}</p><span>{{item.tit}}</span></div>
        </div>
      </div>
    </div>
    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="item in swipImg" :key="item">
        <img :src="item" alt="" srcset="">
      </el-carousel-item>
    </el-carousel>
    <div class="round">
      <p class="p1">特价票-热门往返</p>
      <hr>
      <div class="tr">
        <div class="trip" v-for="(item, index) in trip" :key="index">
          <div class="area">
            <span>{{item.area1}}-></span>
            <span>{{item.area2}}</span>
          </div>
          <span class="span1">{{item.time}}</span>
          <output>￥<span class="span2">{{item.price}}</span><strong>起</strong></output>
          <span class="span3">立即购</span>
        </div>
      </div>
      <hr style="margin-top: 20px">
      
    </div>
    <div class="round">
      <p class="p1">便捷\快速-租车</p>
      <hr>
      <div class="tr">
        <div class="trip1" v-for="(i, index) in cars" :key="index">
          <div class="area1">
            <img :src="i.img" alt="" srcset="">
          </div>
          <p>{{i.tit}}</p>
          <output>￥<span class="span22">{{i.price}}</span><strong>起</strong></output>
          <span class="span33">联系TA</span>
          <div><a href="">查看详情>></a></div>
        </div>
      </div>
      <hr style="margin-top: 20px">
      
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      swipImg: [
        require('../../../assets/images/TrafficImg/travel1.jpg'),
        require('../../../assets/images/TrafficImg/travel4.jpg'),
        require('../../../assets/images/TrafficImg/travel5.png'),
        require('../../../assets/images/TrafficImg/travel6.png'),
        require('../../../assets/images/TrafficImg/travel7.png'),
        require('../../../assets/images/TrafficImg/travel8.png')
      ],
      transports: [
        {
          transp1: "火车",
          transp2: ["卧铺", '硬卧', '硬座']
        },
        {
          transp1: "飞机",
          transp2: ['经济舱', '头等舱', '公务舱']
        },
        {
          transp1: "高铁",
          transp2: ["商务VIP", '一等座', '二等座', '特等座', '软卧、高级软卧']
        },
        {
          transp1: "船",
          transp2: ["普通舱", '头等舱', '贵宾舱']
        },
        {
          transp1: "汽车",
          transp2: []
        },
        {
          transp1: "专用车",
          transp2: ["拼车", '包车']
        }
      ],
      transportbg: [
        {
          img: require('../../../assets/images/TrafficImg/transport1.png'),
          theme: '汽车的优势在哪？？',
          tit: "价格便宜并且还能乘往较远的地方，方便居民上下班出行；目前社会正在采用电动公交车大大节省了空气污染以及能源消耗。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport2.png'),
          theme: '比起火车，高铁有什么优势？？',
          tit: "高速铁路时速300公里以上的高速铁路采用的是无砟轨道，就是没有石子的整体式道床来保证平顺性;高速铁路的信号控制系统比普通铁路高级，因为发车密度大，车速快，安全性一定要高。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport3.png'),
          theme: '坐火车的好处有哪些？',
          tit: "火车有节奏的摆动、车轮平稳的撞击铁轨的声音和窗前显现的美景都能让火车成为一种特别吸引人的旅行方式。坐火车是最安全的旅行方式之一，而且也会是最舒适的方式之一。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport4.png'),
          theme: '为什么有的人选择坐船？',
          tit: "船有时候会晃动，你就也跟着走，也能减肥嘿嘿，还能钓鱼啊，看看风景，我喜欢海上阴天的时候看天空。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport5.png'),
          theme: '登机的注意事项以及流程？？',
          tit: "在飞机起飞前2小时到达机场,办登机手续换登机牌,过安检，到安检通道，通道口有个安检柜台。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport6.png'),
          theme: '现在我国的交通情况如何呢？？',
          tit: "我们城市交通现状特点是:城市交通基础设施建设速度跟不上迅速增长的交通需求，常规公共交通萎缩、出租车和私家车迅速增加、轨道交通开始起步、交通管理技术水平低。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport7.png'),
          theme: '交通安全意识',
          tit: "认真学习交通安全常识，自觉遵守交通秩序；靠路边行走，横过道路走证马线．’做到“一停、二看、三通过” ；不闯红灯、不乱穿道路、不在道路上嬉闹玩耍，不越护栏。"
        },
        {
          img: require('../../../assets/images/TrafficImg/transport8.png'),
          theme: '我为祖国而自豪！！',
          tit: "黄河孕育了华夏民族,长江见证了炎黄历史。伟大的祖国,我为你自豪!太阳从东方升起,希望从东方升起,巨龙从东方升起,中国从东方崛起。像雨后的彩虹那样多娇,中国好风光;像春天的桃花那样俊俏,中国好地方。"
        }
      ],
      trip: [
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        },
        {
          area1: '上海',
          area2: "北京",
          time: '3月02日-3月15日',
          price: '1899'
        }
      ],
      cars: [
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        },
        {
          img: require('../../../assets/images/TrafficImg/cars/car1.png'),
          tit: '现代i10',
          price: '199'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .traff {
    background-color: white;
    margin-left: 10px;
  }
  .traff .el-carousel {
    width: 460px;
    border: 1px dotted #cccccc;
    padding: 10px 5px;
  }
  .traff .el-carousel img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .trans {
    margin-top: 30px;
  }
  .question {
    display: flex;
    margin-top: 30px;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .question .bg {
    position: relative;
    margin-bottom: 40px;
    margin: 10px;
  }
  .question .bg, .ques {
    width: 200px;
    height: 200px;
    box-shadow: 1px 1px 2px #cccccc, -1px -1px 2px #cccccc;
  }
  .question .bg:hover .ques{
    display: block;
  }
  .ques {
    display: none;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, .6);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ques p {
    color: red;
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 5px;
  }
  .ques span {
    color: black;
    font-size: 10px;
    font-weight: 700;
    text-indent: 4em;
    padding: 8px;
    letter-spacing: 2px;
  }
  .ques span:first-letter {
    font-size: 20px;
  }
  .question .bg img {
    width: 100%;
    height: 100%;
  }
  .round {
    margin-top: 70px;
  }
  .round .p1 {
    width: 140px;
    font-size: 18px;
    font-weight: 700;
    padding: 2px 3px;
    color: white;
    background-color: blue;
  }
  .round .trip {
    width: 200px;
    height: 150px;
    background-color: #EEE9E9;
    margin-top: 20px;
  }
  .round .trip .area span {
    font-size: 17px;
    font-weight: 700;
  }
  .round .trip .span1 {
    display: block;
    color: darkorange;
    margin: 20px 0;
  }
  .round .trip output {
    color: darkorange;
  }
  .round .trip output .span2 {
    color: red;
    font-size: 20px;
    font-weight: 700;
  }
  .round .trip .span3 {
    float: right;
    color: white;
    background-color: red;
    font-size: 15px;
    font-weight: 700;
    margin-right: 20px;
    padding: 8px;
    letter-spacing: 5px;
    border-radius: 10px;
  }
  .round .trip .span3:hover {
    cursor: pointer;
  }
  .round .tr {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .trip1 {
    width: 250px;
    height: 270px;
    box-sizing: border-box;
    background-color: #E6E6FA;
    margin-top: 30px;
  }
  .trip1:hover {
    border: 1px solid darkorange;
  }
  .trip1 img {
    width: 100%;
  }
  .trip1 p {
    color: darkorange;
    padding: 10px;
  }
  .trip1 output {
    color: darkorange;
  }
  .trip1 output .span22 {
    color: red;
    font-size: 25px;
    font-weight: 700;
  }
  .trip1 .span33 {
    float: right;
    color: white;
    font-weight: 700;
    padding: 5px;
    background-color: darkorange;
  }
  .trip1 .span33:hover {
    cursor: pointer;
  }
  .trip1 a {
    float: right;
  }
</style>
