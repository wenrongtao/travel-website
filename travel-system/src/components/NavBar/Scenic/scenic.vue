<template>
  <div>
    <div class="scenic">
      <div v-for="(item ,index) in scenic" :key="index">
        <img :src="item.img" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="tourism">
      <div class="area" v-for="(item, index) in tour" :key="index">
        <h1>{{item.theme}}</h1>
          <div class="tourism1">
            <div class="tour" v-for="(i, index) in item.des" :key="index">
              <el-image 
                :src="i.img" 
                :preview-src-list="srcList">
              </el-image>
              <p>{{i.title}}</p>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <output>￥<span>{{i.price}}</span>起</output>
            </div>
          </div>
      </div>
    </div>
    <div class="rate">
      <div class="popularity" v-for="(item, index) in popur" :key="index">
        <p>{{item.title}}</p>
        <div class="details">
          <strong>{{item.title}}</strong>
          <img :src="item.img" alt="" srcset="">
          <div class="dc">
            <h1>{{item.theme}}</h1>
            <span>{{item.desc}}</span>
            <ul v-for="(i, index) in item.cont" :key="index">
              <li>{{i}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      value: 3.7,
      scenic: [
        {
          name: '热门景区',
          img: require('../../../assets/images/ScenicImg/hot.png')
        },
        {
          name: '网红景区',
          img: require('../../../assets/images/ScenicImg/grenadine.png')
        },
        {
          name: '推荐景区',
          img: require('../../../assets/images/ScenicImg/recommend.png')
        },
        {
          name: '优惠景区',
          img: require('../../../assets/images/ScenicImg/special.png')
        }
      ],
      tour: [
        {
          theme: "热门景区>",
          des: [
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            }
          ]
        },
        {
          theme: "网红景区>",
          des: [
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            }
          ]
        },
        {
          theme: "推荐景区>",
          des: [
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            }
          ]
        },
        {
          theme: "优惠景区>",
          des: [
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            }
          ]
        }
      ],
      srcList: [
        require('../../../assets/images/ScenicImg/Tour/tour1.jpg'),
        require('../../../assets/images/ScenicImg/Tour/tour2.jpg'),
        require('../../../assets/images/ScenicImg/Tour/tour3.jpg'),
        require('../../../assets/images/ScenicImg/Tour/tour4.jpg')
      ],
      popur: [
        {
          title: "人气评选",
          img: require("../../../assets/images/ScenicImg/Tour/dinzhen.jpg"),
          theme: "近日该景区推出大量免费娱乐活动！人气火热上升",
          desc: "通过推出大量免费活动，带动了人流量，仅仅一天的时间，访问量超过了22万余，资金流入了66万多",
          cont: [
            "理塘县丁真因为一个视频爆火全网，大量推动了他们家乡旅游业的发展。",
            "西藏冒险王跌落冰川遇难，1990年出生的他，高中毕业后未考上大学，从2012年至今，徒步走过十座大小冰川。"
          ]
        },
        {
          title: "今日看点",
          img: require("../../../assets/images/ScenicImg/Tour/dinzhen.jpg"),
          theme: "近日该景区推出大量免费娱乐活动！人气火热上升",
          desc: "通过推出大量免费活动，带动了人流量，仅仅一天的时间，访问量超过了22万余，资金流入了66万多",
          cont: [
            "理塘县丁真因为一个视频爆火全网，大量推动了他们家乡旅游业的发展。",
            "西藏冒险王跌落冰川遇难，1990年出生的他，高中毕业后未考上大学，从2012年至今，徒步走过十座大小冰川。"
          ]
        },
        {
          title: "今日爆点",
          img: require("../../../assets/images/ScenicImg/Tour/dinzhen.jpg"),
          theme: "近日该景区推出大量免费娱乐活动！人气火热上升",
          desc: "通过推出大量免费活动，带动了人流量，仅仅一天的时间，访问量超过了22万余，资金流入了66万多",
          cont: [
            "理塘县丁真因为一个视频爆火全网，大量推动了他们家乡旅游业的发展。",
            "西藏冒险王跌落冰川遇难，1990年出生的他，高中毕业后未考上大学，从2012年至今，徒步走过十座大小冰川。"
          ]
        },
        {
          title: "人气评选",
          img: require("../../../assets/images/ScenicImg/Tour/dinzhen.jpg"),
          theme: "近日该景区推出大量免费娱乐活动！人气火热上升",
          desc: "通过推出大量免费活动，带动了人流量，仅仅一天的时间，访问量超过了22万余，资金流入了66万多",
          cont: [
            "理塘县丁真因为一个视频爆火全网，大量推动了他们家乡旅游业的发展。",
            "西藏冒险王跌落冰川遇难，1990年出生的他，高中毕业后未考上大学，从2012年至今，徒步走过十座大小冰川。"
          ]
        },
        {
          title: "人气评选",
          img: require("../../../assets/images/ScenicImg/Tour/dinzhen.jpg"),
          theme: "近日该景区推出大量免费娱乐活动！人气火热上升",
          desc: "通过推出大量免费活动，带动了人流量，仅仅一天的时间，访问量超过了22万余，资金流入了66万多",
          cont: [
            "理塘县丁真因为一个视频爆火全网，大量推动了他们家乡旅游业的发展。",
            "西藏冒险王跌落冰川遇难，1990年出生的他，高中毕业后未考上大学，从2012年至今，徒步走过十座大小冰川。"
          ]
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {

  }
}
</script>
<style  scoped>
  .scenic {
    width: 100%;
    height: 70px;
    background-color: white;
  }
  .scenic div {
    float: left;
    margin-left: 30px;
    padding: 10px 0;
  }
  .scenic div:hover {
    color: darkorange;
    cursor: pointer;
  }
  .scenic img {
    width: 30px;
  }
  .tourism {
    background-color: white;
    margin-top: 20px;
    padding: 5px 10px;
  }
  .tourism h1 {
    width: 120px;
    color: white;
    text-align: center;
    padding: 5px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: red;
    font-size: 25px;
  }
  .tourism .tourism1 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 15px;
  }
  .tourism .tourism1 .tour:hover {
    border: 1px solid darkorange;
    cursor: pointer;
    box-shadow: 1px 1px 2px darkorange;
  } 
  .tourism .tour {
    width: 300px;
    height: 320px;
    padding: 2px;
    margin-top: 20px;
    border: 1px solid #cccccc;
    box-shadow: 1px 1px 3px #cccccc;
  }
  .tourism .tour .el-image {
    width: 100%;
  }
  .tourism .tour p {
    padding: 8px;
  }
  .tourism .tour p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .tourism .tour output {
    color: red;
  }
  .tourism .tour output span{
    font-size: 18px;
    font-weight: 700;
  }
  .tourism .tour .el-rate {
    padding: 8px 0;
  }
  .rate {
    margin-top: 60px;
    background-color: white;
  }
  .rate p {
    font-size: 20px;
    font-weight: 700;
    padding: 2px 3px;
  }
  .rate .details {
    position: relative;
    height: 200px;
    padding: 10px;
  }
  .rate .details img {
    float: left;
    width: 200px;
    height: 100%;
    padding: 5px 20px;
    vertical-align: middle;
  }
  .rate .details h1 {
    font-size: 15px;
    padding-bottom: 8px;
  }
  .rate .details span, li {
    color: #cccccc;
  }
  .rate .details ul {
    margin-top: 6px;
    padding: 3px;
  }
  .dc h1:hover {
    color: red;
  }
  .dc ul li:hover {
    color: darkorange;
  }
  .rate .popularity {
    margin-bottom: 20px;
    border-bottom: 2px dotted #cccccc;
  }
  .rate .popularity:hover {
    cursor: pointer;
  }
  .rate .popularity .details strong {
    position: absolute;
    left: 180px;
    color: white;
    background-color: red;
    padding: 3px;
  }
</style>
