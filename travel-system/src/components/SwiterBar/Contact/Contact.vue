<template>
  <div class="contact">
    <div class="left">
      <div>
        <el-button icon="el-icon-search" circle></el-button>相关选择：
        <el-button type="primary" plain size="small">客服服务</el-button>
        <el-button type="primary" plain size="small">机器人服务</el-button>
        <el-button type="primary" plain size="small">人工服务</el-button>
        <el-button type="primary" plain size="small">系统自动服务</el-button>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>应该选择谁比较合适？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>15688访问量</span>
          <p>要看什么样的情况联系选择什么样的方式</p>
        </div>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>现在去武功山，天气反常吗？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>12987访问量</span>
          <p>具体查询那里的天气预报，做好一切准备；保暖措施要做好，因为到山顶会特别的冷，还需要花钱买帐篷在山上过夜。</p>
        </div>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>毕业计划去旅游，不知道哪里比较好玩，开销又低的地方？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>987访问量</span>
          <p>看你现在居住的位置，选择离你较近的地方，那么就不用考虑车费的问题</p>
        </div>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>跟团旅游到底坑不坑？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>132214访问量</span>
          <p>跟团游不坑，你出的钱给你挖的坑。旅行是有成本的。和成本越成反比坑越大</p>
        </div>
      </div>
      <div class="vid">
        <div class="head">
          <p class="title"><i class="el-icon-video-camera"></i>相关教学视频</p>
        </div>
        <div class="video">
          <div class="video1">
            <video :src="video" controls="controls" autoplay="autoplay" poster="../../../assets/images/contactImg/music.jpg"></video>
            <p class="tit1">网站的介绍</p>
            <p class="tit2">是什么？干什么？</p>
          </div>
          <div class="video1">
            <video :src="video" controls="controls" autoplay="autoplay" poster="../../../assets/images/contactImg/music.jpg"></video>
            <p class="tit1">精彩的旅游宣传vlog</p>
            <p class="tit2">为什么要旅游？</p>
          </div>
          <div class="video1">
            <video :src="video" controls="controls" autoplay="autoplay" poster="../../../assets/images/contactImg/music.jpg"></video>
            <p class="tit1">没钱怎么去旅游</p>
            <p class="tit2">是什么？干什么？</p>
          </div>
          <div class="video1">
            <video :src="video" controls="controls" autoplay="autoplay" poster="../../../assets/images/contactImg/music.jpg"></video>
            <p class="tit1">网站的评论区发布不了帖子</p>
            <p class="tit2">是什么？干什么？</p>
          </div>
          <div class="video1">
            <video :src="video" controls="controls" autoplay="autoplay" poster="../../../assets/images/contactImg/music.jpg"></video>
            <p class="tit1">天气查询在哪里，找不到</p>
            <p class="tit2">是什么？干什么？</p>
          </div>
          <div class="video1">
            <video :src="video" controls="controls" autoplay="autoplay" poster="../../../assets/images/contactImg/music.jpg"></video>
            <p class="tit1">车票啥时候才会有优惠的活动</p>
            <p class="tit2">是什么？干什么？</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <p>其他人还搜<span>|猜你喜欢</span></p>
      <div v-for="(item, index) in msg" :key="index" class="link">
        <a :href="item.href"><img :src="item.img"><br>{{item.tit}}</a>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      video: '../../../assets/video/G.E.M. 邓紫棋-喜欢你(蓝光).mp4',
      msg: [
        {
          href: 'http://www.taobao.com',
          img: require('../../../assets/images/contactImg/contImg1.png'),
          tit: '淘宝'
        },
        {
          href: 'http://www.tmall.com',
          img: require('../../../assets/images/contactImg/contImg2.png'),
          tit: '天猫'
        },
        {
          href: 'http://hao.360.com',
          img: require('../../../assets/images/contactImg/contImg3.png'),
          tit: '360导航'
        },
        {
          href: 'http://www.baidu.com',
          img: require('../../../assets/images/contactImg/contImg4.png'),
          tit: '百度一下'
        },
        {
          href: 'http://www.iqiyi.com',
          img: require('../../../assets/images/contactImg/contImg5.png'),
          tit: '爱奇艺'
        },
        {
          href: 'http://www.jd.com',
          img: require('../../../assets/images/contactImg/contImg6.png'),
          tit: '京东'
        },
        {
          href: 'http://www.pinduoduo.com',
          img: require('../../../assets/images/contactImg/contImg7.png'),
          tit: '拼多多'
        },
        {
          href: 'http://v.qq.com',
          img: require('../../../assets/images/contactImg/contImg8.png'),
          tit: '腾讯视频'
        },
        {
          href: 'http://im.qq.com',
          img: require('../../../assets/images/contactImg/contImg9.png'),
          tit: '腾讯QQ'
        },
        {
          href: 'http://weixin.qq.com',
          img: require('../../../assets/images/contactImg/contImg10.png'),
          tit: '微信'
        },
        {
          href: 'http://www.youdao.com',
          img: require('../../../assets/images/contactImg/contImg11.png'),
          tit: '网易有道'
        },
        {
          href: 'http://www.kugou.com',
          img: require('../../../assets/images/contactImg/contImg12.png'),
          tit: '酷狗'
        },
        {
          href: 'http://music.163.com',
          img: require('../../../assets/images/contactImg/contImg13.png'),
          tit: '网易云'
        },
        {
          href: 'http://www.meituan.com',
          img: require('../../../assets/images/contactImg/contImg14.png'),
          tit: '美团'
        },
        {
          href: 'http://www.zhihu.com',
          img: require('../../../assets/images/contactImg/contImg15.png'),
          tit: '知乎'
        },
        {
          href: 'http://bj.58.com',
          img: require('../../../assets/images/contactImg/contImg16.png'),
          tit: '58同城'
        },
        {
          href: 'http://www.toutiao.com',
          img: require('../../../assets/images/contactImg/contImg17.png'),
          tit: '今日头条'
        },
        {
          href: 'http://www.zhipin.com',
          img: require('../../../assets/images/contactImg/contImg18.png'),
          tit: 'boss直聘'
        },
        {
          href: 'http://www.w3cschool.cn',
          img: require('../../../assets/images/contactImg/contImg19.png'),
          tit: 'W3Cschool'
        },
        {
          href: 'http://github.com',
          img: require('../../../assets/images/contactImg/contImg20.png'),
          tit: 'GitHub'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .contact {
    display: flex;
    justify-content: space-between;
    margin: 50px 0 0 20px;
  }
  .contact .right {
    width: 500px;
    border-left: 1px solid #8B8B7A;
  }
  .contact .right p {
    padding-left: 8px;
  }
  .tel {
    width: 500px;
    margin: 30px 0;
    background-color: #fff;
    border-radius: 5px;
  }
  .tel .tel1 {
    margin: 0 20px;
    padding: 30px;
  }
  h3 {
    color: darkorange;
    margin-bottom: 10px;
  }
  .tel p {
    margin: 10px 0;
  }
  .tel span {
    color: #8B8B7A;
    padding: 0 15px 0 0;
    font-size: 14px;
  }
  .tel:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2), 0 0 6px rgba(0, 0, 0, .1);
  }
  .tel .tel1 span i {
    color: red;
  }
  .right .link {
    display: flex;
    margin: 30px 0;
    justify-content: space-around;
    align-items: center;
    float: left;
  }
  .right .link img {
    width: 100px;
    height:100px;
    padding: 0 12px;
    border-radius: 50%;
  }
  .right .link a {
    text-align: center;
    text-decoration: none;
  }
  .right .link a:hover {
    color: darkorange;
  }
  .right .link a:hover img {
    transform: scale(1.1);
  }
  .right p span {
    color: #8B8B7A;
    margin-left: 5px;
    padding: 5px;
    font-size: 15px;
  }
  .vid {
    background-color: #fff;
  }
  .video {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 800px;
  }
  .video p {
    padding: 2px 0;
  }
  .video p:nth-of-type(2) {
    color: #8B8B7A;
    font-size: 15px;
  }
   .video p:hover {
    color: darkorange;
  }
  .video .video1 {
    margin-bottom: 30px;
    padding: 0 30px;
  }
  .video .video1:hover {
    cursor: pointer;
  }
  .video video {
    width: 200px;
    border-radius: 5%;
  }
  .video video:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .5), 0 0 6px rgba(0, 0, 0, .5);
  }
  .vid .head {
    text-align: center;
    margin: 30px 0;
    padding: 30px 0;
  }
  .vid p i {
    margin: auto;
    padding: 0 5px;
    color: darkorange;
  }
  .vid .title {
    font-size: 25px;
  }
</style>
