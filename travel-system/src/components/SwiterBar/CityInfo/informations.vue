<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(item, index) in mainMsg" :key="index" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.img" class="image">
          <div style="padding: 5px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">好吃、好玩、自由、快乐</time>
              <el-button type="text" class="button" @click='openDetail(index)'>查看详情</el-button>
              <el-button type="primary" plain  size="small" style="margin-top: 20px;" @click="changeMenu()">立即下单</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="dl">
      <div class="detail" v-for="(item, index) in shopList" :key="index">
        <img :src="item.img" alt="" srcset="" style="width:90%;height: 300px">
        <p>{{item.title}}</p>
        <span class="pspan">{{item.desc}}</span>
        <div class="price">
          <span class="span1">
            {{item.newPrice}}
            <i></i>
          </span>
          <span class="span2">{{item.oldPrice}}</span>
        </div>
        <el-button type="primary" plain size="small" style="margin: 10px 0 0 12px;" @click="changeMenu()">立即下单</el-button>
      </div>
    </div>
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span><strong style="color:red;font-size:18px">龙虾</strong>(学名：palinuridae)是节肢动物门甲壳纲十足目龙虾科4个属19种龙虾的通称。
        又名大虾、龙头虾、虾魁、海虾等。它头胸部较粗大，外壳坚硬，色彩斑斓，腹部短小，
        体长一般在20厘米～40厘米之间，重0.5公斤上下，是虾类中最大的一类。最重的能达到5公斤以上，
        人称龙虾虎。体呈粗圆筒状，背腹稍平扁，头胸甲发达，坚厚多棘，前缘中央有一对强大的眼上棘，
        具封闭的鳃室。主要分布于热带海域，是名贵海产品。中国已发现8种，以中国龙虾产量较大。
        根据营养专家黎黍匀分析，龙虾的预防疾病指数、生命力指数均低。</span>
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
       dialogVisible: false,
      mainMsg: [
        {
          img: require('../../../assets/images/ListImg/food1.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../../assets/images/ListImg/food2.jpg'),
          title: '爱好、享受生活的每一天'
        },
        {
          img: require('../../../assets/images/ListImg/food3.jpg'),
          title: '邀我一同旅游，去想去的地方'
        },
        {
          img: require('../../../assets/images/ListImg/food4.jpg'),
          title: '快乐来源于生活，旅游是最好的选择'
        },
        {
          img: require('../../../assets/images/ListImg/food5.jpg'),
          title: '只有去做，没有想不想'
        },
        {
          img: require('../../../assets/images/ListImg/jouney1.jpg'),
          title: '旅游使人快乐，让人心旷神怡'
        },
        {
          img: require('../../../assets/images/ListImg/jouney2.jpg'),
          title: '感谢大自然的馈赠，感受祖国的大好河山'
        },
        {
          img: require('../../../assets/images/ListImg/jouney3.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../../assets/images/ListImg/jouney4.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../../assets/images/ListImg/jouney5.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../../assets/images/ListImg/jouney6.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../../assets/images/ListImg/jouney7.jpg'),
          title: '来一场说走就走的旅行'
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
          img: require('../../../assets/images/shopImg/southeast.jpg'),
          title: 'the best choice',
          desc: '走时准确，防震性能好',
          newPrice: '￥680.0',
          oldPrice: '￥1990.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth1.jpg'),
          title: 'the best choice',
          desc: '颜色淡雅,裙幅褶褶',
          newPrice: '￥280.0',
          oldPrice: '￥398.0'
        },
        {
          img: require('../../../assets/images/shopImg/cloth2.jpg'),
          title: 'the best choice',
          desc: '手中的幸福梦想',
          newPrice: '￥6680.0',
          oldPrice: '￥8290.0'
        },
        {
          img: require('../../../assets/images/shopImg/necklace.png'),
          title: 'the best choice',
          desc: '在阳光的照耀下闪闪发光',
          newPrice: '￥1280.0',
          oldPrice: '￥2899.0'
        },
        {
          img: require('../../../assets/images/shopImg/lipstick.jpg'),
          title: 'the best choice',
          desc: '彩妆很透明,很有魅力',
          newPrice: '￥170.0',
          oldPrice: '￥135.0'
        },
        {
          img: require('../../../assets/images/shopImg/bracelet.jpg'),
          title: 'the best choice',
          desc: '种质细腻通透，颜色鲜阳纯正',
          newPrice: '￥6680.0',
          oldPrice: '￥9926.0'
        },
        {
          img: require('../../../assets/images/shopImg/eyeShadow.png'),
          title: 'the best choice',
          desc: '放大双眼，光芒四射',
          newPrice: '￥280.0',
          oldPrice: '￥390.0'
        },
        {
          img: require('../../../assets/images/shopImg/highHeeled.jpg'),
          title: 'the best choice',
          desc: '体现女性的美',
          newPrice: '￥589.0',
          oldPrice: '￥790.0'
        },
        {
          img: require('../../../assets/images/shopImg/cheongsam.png'),
          title: 'the best choice',
          desc: '中国女性最美的服装',
          newPrice: '￥880.0',
          oldPrice: '￥1290.0'
        },
        {
          img: require('../../../assets/images/shopImg/sunglasses.png'),
          title: 'the best choice',
          desc: '墨镜可挡紫外线和红外线',
          newPrice: '￥1280.0',
          oldPrice: '￥2230.0'
        },
        {
          img: require('../../../assets/images/shopImg/skirt.jpeg'),
          title: 'the best choice',
          desc: '这将是你不错的选择',
          newPrice: '￥120.0',
          oldPrice: '￥269.0'
        }
      ]
    }
  },
  methods: {
    openDetail(id) {
      this.dialogVisible = true
    },
    changeMenu() {
      this.$router.push('/menu')
    }
  }
}
</script>
<style  scoped>
  .el-card {
    width: 300px;
    height: 330px;
    margin-top: 15px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 230px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
  .el-pagination {
    margin-top: 80px;
    margin-left: 300px;
  }
  .dl {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .detail {
    width: 350px;
    background-color: white;
    border: 2px solid #F5F5F5;
    margin: 20px 8px;
    cursor: pointer;
    padding: 3px 3px;
  }
  .detail img {
    width: 100%;
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
</style>
