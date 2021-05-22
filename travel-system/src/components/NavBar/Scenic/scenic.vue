<template>
  <div>
    <div class="scenic">
      <div v-for="(item ,index) in scenic1" :key="index">
        <img :src="item.img" alt="">
        <a href="#hotArea">{{item.name}}</a>
      </div>
      <div v-for="(item ,index) in scenic2" :key="index">
        <img :src="item.img" alt="">
        <a href="#internetArea">{{item.name}}</a>
      </div>
      <div v-for="(item ,index) in scenic3" :key="index">
        <img :src="item.img" alt="">
        <a href="#popularArea">{{item.name}}</a>
      </div>
      <div v-for="(item ,index) in scenic4" :key="index">
        <img :src="item.img" alt="">
        <a href="#cheapArea">{{item.name}}</a>
      </div>
    </div>
    <div class="tourism">
      <!-- 热门景区 -->
      <div class="area" v-for="(item, index) in tour1" :key="index">
        <h1 id="hotArea">{{item.theme}}</h1>
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
      <!-- 网红景区 -->
      <div class="area" v-for="(item, index) in tour2" :key="index">
        <h1 id="internetArea">{{item.theme}}</h1>
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
      <!-- 推荐景区 -->
      <div class="area" v-for="(item, index) in tour3" :key="index">
        <h1 id="popularArea">{{item.theme}}</h1>
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
      <!-- 优惠景区 -->
      <div class="area" v-for="(item, index) in tour4" :key="index">
        <h1 id="cheapArea">{{item.theme}}</h1>
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
      scenic1: [
        {
          name: '热门景区',
          img: require('../../../assets/images/ScenicImg/hot.png')
        }
      ],
      scenic2: [
        {
          name: '网红景区',
          img: require('../../../assets/images/ScenicImg/grenadine.png')
        }
      ],
      scenic3: [
        {
          name: '推荐景区',
          img: require('../../../assets/images/ScenicImg/recommend.png')
        }
      ],
      scenic4: [
        {
          name: '优惠景区',
          img: require('../../../assets/images/ScenicImg/special.png')
        }
      ],
      tour1: [
        {
          theme: "热门景区>",
          des: [
            {
              title: '贵州省，简称“黔”或“贵”，地处中国西南腹地，与重庆、四川、湖南、云南、广西接壤，是西南交通枢纽。世界知名山地旅游目的地和山地旅游大省，国家生态文明试验区，内陆开放型经济试验区。',
              img: require('../../../assets/images/ScenicImg/Tour/tour.jpg'),
              price: '1299'
            },
            {
              title: '大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，街区南北长2100米，东西宽500米，总建筑面积65万平方米。',
              img: require('../../../assets/images/ScenicImg/Tour/hotImg1.jpg'),
              price: '3299'
            },
            {
              title: '西双版纳傣族自治州，为云南省下辖自治州，位于云南省南端。西双版纳，古代傣语为“勐巴拉那西”，意为“理想而神奇的乐土”，这里以美丽的热带雨林自然景观和少数民族风情而闻名于世，是镶嵌在祖国南疆的一颗璀璨明珠。',
              img: require('../../../assets/images/ScenicImg/Tour/hotImg2.jpg'),
              price: '199'
            },
            {
              title: '成都（Chengdu），简称“蓉”，别称蓉城、锦城，是四川省省会、副省级市、特大城市、成渝地区双城经济圈核心城市，国务院批复确定的中国西部地区重要的中心城市，国家重要的高新技术产业基地、商贸物流中心和综合交通枢纽。全市下辖12个市辖区、3个县、代管5个县级市，总面积14335平方千米  ，建成区面积949.6平方公里，常住人口1658.10万人，城镇人口1233.79万人，城镇化率74.41%。',
              img: require('../../../assets/images/ScenicImg/Tour/hotImg3.jpg'),
              price: '529'
            },
            {
              title: '西藏自治区（藏文：བོད་རང་སྐྱོང་ལྗོངས།，藏语拼音：Poi Ranggyong Jong，威利：Bod rang skyong ljongs），古称“蕃”，简称“藏”，首府拉萨，是中国五个少数民族自治区之一。',
              img: require('../../../assets/images/ScenicImg/Tour/hotImg4.jpg'),
              price: '2299'
            },
            {
              title: '武功山(山脉):跨越江西省中西部-湖南株洲市，居罗霄山脉北支，山体呈东北--西南走向，东起江西吉安市安福县北部(北达宜春市袁州区和萍乡市芦溪县)、经过萍乡市湘东区和莲花县，到达湖南株洲市的茶陵县和攸县，余脉直达安仁县，主脉绵延120余千米，总面积约970平方千米。主峰金顶在安福县境内。',
              img: require('../../../assets/images/ScenicImg/Tour/hotImg5.jpg'),
              price: '599'
            }
          ]
        }
      ],
      tour2: [
        {
          theme: "网红景区>",
          des: [
            {
              title: "西藏自治区（藏文：བོད་རང་སྐྱོང་ལྗོངས།，藏语拼音：Poi Ranggyong Jong，威利：Bod rang skyong ljongs），古称“蕃”，简称“藏”，首府拉萨，是中国五个少数民族自治区之一。位于中国青藏高原西南部，地处北纬26°50′至36°53′，东经78°25′至99°06′之间。北邻新疆维吾尔自治区，东连四川省，东北紧靠青海省，东南连接云南省，南与缅甸、印度、不丹、尼泊尔等国家毗邻，西与克什米尔地区接壤，陆地国界线4000多公里，南北最宽900多公里，东西最长达2000多公里，是中国西南边陲的重要门户，无出海口。",
              img: require('../../../assets/images/ScenicImg/Tour/interImg7.jpg'),
              price: '6299'
            },
            {
              title: "西江千户苗寨是一个保存苗族原始生态,文化完整的地方，由10余个依山而建的自然村寨相连成片，是中国乃至全世界最大的苗族聚居村寨。它是领略和认识中国苗族漫长历史与发展之地。西江每年的苗年节、吃新节、十三年一次的牯藏节等均名扬四海，西江千户苗寨是一座露天博物馆，展览着一部苗族发展史诗，成为观赏和研究苗族传统文化的大看台。西江有远近闻名的银匠村，苗族银饰全为手工制作，其工艺具有极高水平.",
              img: require('../../../assets/images/ScenicImg/Tour/interImg2.jpeg'),
              price: '1299'
            },
            {
              title: "梵净山（Mount Fanjing），得名于“梵天净土”，位于贵州省铜仁市的印江、江口、松桃（西南部）3县交界，地处北纬27°49′50″—28°1′30″，东经 108°45′55″—108°48′30″，靠近印江县城、江口县东南部、松桃县西南部。系武陵山脉主峰，是中国的佛教道场和自然保护区，位于铜仁地区中部。",
              img: require('../../../assets/images/ScenicImg/Tour/interImg3.jpg'),
              price: '299'
            },
            {
              title: "小七孔景区是国家级风景名胜区，是樟江风景名胜区的四大风景片区之一,于2007年成为世界自然遗产地，中国最美丽的地方之一。该景区在宽仅1公里、长12公里的狭长幽谷里，集洞、林、湖、瀑、石、水多种景观于一体，玲珑秀丽，令游客耳目常新，有超级盆景的美誉。",
              img: require('../../../assets/images/ScenicImg/Tour/interImg4.jpeg'),
              price: '2299'
            },
            {
              title: "三亚（Sanya ）位于海南岛的最南端，是中国最南部的热带滨海旅游城市，中国海滨城市，是中国空气质量最好的城市、全国最长寿地区（平均寿命80岁）",
              img: require('../../../assets/images/ScenicImg/Tour/interImg5.jpg'),
              price: '9210'
            },
            {
              title: "南京，简称“宁”，古称金陵、建康，是江苏省省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽。全市下辖11个区，总面积6587km²，2016年建成区面积1125.78km²，常住人口827万人，城镇人口678.14万人，城镇化率82%，是长三角及华东唯一的特大城市。",
              img: require('../../../assets/images/ScenicImg/Tour/interImg6.jpg'),
              price: '750'
            }
          ]
        }
      ],
      tour3: [
        {
          theme: "推荐景区>",
          des: [
            {
              title: "三亚（Sanya ）位于海南岛的最南端，是中国最南部的热带滨海旅游城市，中国海滨城市，是中国空气质量最好的城市、全国最长寿地区（平均寿命80岁）。 三亚市别称鹿城，又被称为“东方夏威夷”，位居中国四大一线旅游城市“三威杭厦”之首，拥有全岛最美丽的海滨风光。三亚是海南省南部的中心城市和交通通信枢纽，也是中国东南沿海对外开放黄金海岸线上最南端的对外贸易重要口岸之一。",
              img: require('../../../assets/images/ScenicImg/Tour/tour6.jpg'),
              price: '199'
            },
            {
              title: "上海迪士尼乐园，是中国内地首座迪士尼主题乐园，位于上海市浦东新区川沙新镇，于2016年6月16日正式开园。它是中国大陆第一个、亚洲第三个，世界第六个迪士尼主题公园。",
              img: require('../../../assets/images/ScenicImg/Tour/recImg1.jpg'),
              price: '1090'
            },
            {
              title: "上海中心大厦(Shanghai Tower)，是中华人民共和国上海市的一座巨型高层地标式摩天大楼，其设计高度超过附近的上海环球金融中心。上海中心大厦项目面积433954平方米，建筑主体为119层，总高为632米，结构高度为580米，机动车停车位布置在地下，可停放2000辆。",
              img: require('../../../assets/images/ScenicImg/Tour/recImg2.jpg'),
              price: '889'
            },
            {
              title: "长沙市隶属湖南省，湖南省省会，简称长，地处湖南省东部偏北，湘江下游和湘浏盆地西缘，是全国两型社会建设综合配套改革试验区核心城市，国家十二五规划确定的重点开发区域，湖南省的政治、经济、文化、科教和商贸中心。",
              img: require('../../../assets/images/ScenicImg/Tour/recImg3.jpg'),
              price: '3988'
            },
            {
              title: "西湖，位于浙江省杭州市西部，是中国主要的观赏性淡水湖泊，也是中国首批国家重点风景名胜区。西湖三面环山，面积约6.39平方千米，东西宽约2.8千米，南北长约3.2千米，绕湖一周近15千米。湖中被孤山、白堤、苏堤、杨公堤分隔，按面积大小分别为外西湖、西里湖、北里湖、小南湖及岳湖等五片水面，苏堤、白堤越过湖面，小瀛洲、湖心亭、阮公墩三个人工小岛鼎立于外西湖湖心，夕照山的雷峰塔与宝石山的保俶塔隔湖相映，由此形成了“一山、二塔、三岛、三堤、五湖”的基本格局。2011年6月24日，杭州西湖列入世界遗产名录。",
              img: require('../../../assets/images/ScenicImg/Tour/recImg4.jpg'),
              price: '2160'
            },
            {
              title: "天安门，坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。",
              img: require('../../../assets/images/ScenicImg/Tour/recImg5.jpg'),
              price: '5630'
            },
          ]
        }
      ],
      tour4: [
        {
          theme: "优惠景区>",
          des: [
            {
              title: "稻城县位于中国四川省西南边缘，甘孜州南部。地处青藏高原东南部，横断山脉东侧。属康巴藏区的甘孜藏族自治州。稻城县跨北纬27°58'-29°30'、东经99°56'-100°36'，南北长174公里，东西宽63公里，东与九龙县相接，西与乡城县相邻，北接理塘县，南与木里藏族自治县接壤，西南与云南迪庆藏族自治州相邻。",
              img: require('../../../assets/images/ScenicImg/Tour/tour7.jpg'),
              price: '2699'
            },
            {
              title: "稻城县位于中国四川省西南边缘，甘孜州南部。地处青藏高原东南部，横断山脉东侧。属康巴藏区的甘孜藏族自治州。稻城县跨北纬27°58'-29°30'、东经99°56'-100°36'，南北长174公里，东西宽63公里，东与九龙县相接，西与乡城县相邻，北接理塘县，南与木里藏族自治县接壤，西南与云南迪庆藏族自治州相邻。",
              img: require('../../../assets/images/ScenicImg/Tour/tour7.jpg'),
              price: '2699'
            },
            {
              title: "稻城县位于中国四川省西南边缘，甘孜州南部。地处青藏高原东南部，横断山脉东侧。属康巴藏区的甘孜藏族自治州。稻城县跨北纬27°58'-29°30'、东经99°56'-100°36'，南北长174公里，东西宽63公里，东与九龙县相接，西与乡城县相邻，北接理塘县，南与木里藏族自治县接壤，西南与云南迪庆藏族自治州相邻。",
              img: require('../../../assets/images/ScenicImg/Tour/tour7.jpg'),
              price: '2699'
            },
            {
              title: "稻城县位于中国四川省西南边缘，甘孜州南部。地处青藏高原东南部，横断山脉东侧。属康巴藏区的甘孜藏族自治州。稻城县跨北纬27°58'-29°30'、东经99°56'-100°36'，南北长174公里，东西宽63公里，东与九龙县相接，西与乡城县相邻，北接理塘县，南与木里藏族自治县接壤，西南与云南迪庆藏族自治州相邻。",
              img: require('../../../assets/images/ScenicImg/Tour/tour7.jpg'),
              price: '2699'
            },
            {
              title: "稻城县位于中国四川省西南边缘，甘孜州南部。地处青藏高原东南部，横断山脉东侧。属康巴藏区的甘孜藏族自治州。稻城县跨北纬27°58'-29°30'、东经99°56'-100°36'，南北长174公里，东西宽63公里，东与九龙县相接，西与乡城县相邻，北接理塘县，南与木里藏族自治县接壤，西南与云南迪庆藏族自治州相邻。",
              img: require('../../../assets/images/ScenicImg/Tour/tour7.jpg'),
              price: '2699'
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
          img: require("../../../assets/images/ScenicImg/Tour/doctor.jpg"),
          theme: "截至5月10日24时新型冠状病毒肺炎疫情最新情况",
          desc: "5月10日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例14例，均为境外输入病例（上海4例，四川4例，福建2例，湖南1例，广东1例，重庆1例，陕西1例）；无新增死亡病例；新增疑似病例1例，为境外输入病例（在内蒙古）。",
          cont: [
            "当日新增治愈出院病例10例，解除医学观察的密切接触者642人，重症病例与前一日持平。",
            "境外输入现有确诊病例279例（无重症病例），现有疑似病例2例。累计确诊病例5785例，累计治愈出院病例5506例，无死亡病例。"
          ]
        },
        {
          title: "今日爆点",
          img: require("../../../assets/images/ScenicImg/Tour/news.jpg"),
          theme: "赵丽颖冯绍峰离婚：好聚好散，别忘记爱过",
          desc: "“爱一个人总是简单，无非心念所至，生万千欢喜；懂一个人却需要漫长岁月里的温柔耐心，聚沙成塔，滴水石穿。”",
          cont: [
            "赵丽颖和冯绍峰，以前两人都是星星，同时出现，同时为大地奉献一道光，一同守护着彼此。如今一人是白天，一人是黑夜，黑夜出现的时刻白天就消失了，选择离婚的人，始终不会再有交集了。",
            "冯绍峰没能给赵丽颖一场婚礼，因为赵丽颖忙着生孩子，忙着产后复出，没有时间和精力，可是如今看来，许多东西，如果对方没有真心实意，总是有那么多的借口，而且借口还是在对方身上，拖着拖着就不会再有了，甚至容易为感情埋下破裂的种子"
          ]
        },
        {
          title: "新闻热搜",
          img: require("../../../assets/images/ScenicImg/Tour/kobe.jpg"),
          theme: "瓦妮莎名人堂演讲深情告白科比，称成为父亲是科比最大成就",
          desc: "今天，姗姗来迟的2020届名人堂颁奖典礼正式进行，邓肯、加内特和已故的科比一起正式入选名人堂。科比的妻子瓦妮莎则发表了纪念科比的演讲，令人动容",
          cont: [
            "在今天的颁奖典礼现场，瓦妮莎首先感谢了作为科比引荐人的乔丹，她称科比很仰慕乔丹，由乔丹作为引荐人意义重大。",
            "瓦妮莎说到，再也不会有谁像科比那样，科比永远是独一无二的。她认为科比最伟大的成就，就是成为女儿们的父亲。她感谢科比让她们每一天都变得更为优秀。"
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
  .scenic a {
    display: block;
    margin-left: -7px;
    text-decoration: none;
  }
  .scenic a:hover {
    color: darkorange;
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
    height: 330px;
    padding: 2px;
    margin-top: 20px;
    border: 1px solid #cccccc;
    box-shadow: 1px 1px 3px #cccccc;
  }
  .tourism .tour .el-image {
    width: 100%;
    height: 200px;
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
