<template>
  <div id="snote">
    <!-- 背景图 -->
    <div class="bigImg"><img :src="mainImg" alt=""></div>
    <!-- 标签页 -->
    <el-tabs type="border-card">
      <el-tab-pane label="游记列表">
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">游记1111111111111
              11111111111111
              111111111111111
              111111111111111111
              11111111111111111
              111111111111111111
              11111111111111111
              1111111111111111111
              111111111111111111
              111111111111111111
              1111111111111111
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">游记1111111111111
              11111111111111
              111111111111111
              111111111111111111
              11111111111111111
              111111111111111111
              11111111111111111
              1111111111111111111
              111111111111111111
              111111111111111111
              1111111111111111
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">游记1111111111111
              11111111111111
              111111111111111
              111111111111111111
              11111111111111111
              111111111111111111
              11111111111111111
              1111111111111111111
              111111111111111111
              111111111111111111
              1111111111111111
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="推荐游记">
        <img :src="mainImg">
      </el-tab-pane>
      <el-tab-pane label="热门游记">
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">游记1111111111111
              11111111111111
              111111111111111
              111111111111111111
              11111111111111111
              111111111111111111
              11111111111111111
              1111111111111111111
              111111111111111111
              111111111111111111
              1111111111111111
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">游记1111111111111
              11111111111111
              111111111111111
              111111111111111111
              11111111111111111
              111111111111111111
              11111111111111111
              1111111111111111111
              111111111111111111
              111111111111111111
              1111111111111111
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">游记1111111111111
              11111111111111
              111111111111111
              111111111111111111
              11111111111111111
              111111111111111111
              11111111111111111
              1111111111111111111
              111111111111111111
              111111111111111111
              1111111111111111
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="最新游记">
        <img :src="mainImg" alt="" srcset="">
      </el-tab-pane>
    </el-tabs>
    <!-- 旅游专栏 -->
    <div class="specialColumn">
      <p class="p1">著名旅行家----<span>徐霞客</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @colck="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙-武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p>李小龙（1940年11月27日—1973年7月20日），原名李振藩，师承叶问，出生于美国加州旧金山，
            祖籍中国广东顺德均安镇。他是世界武道变革先驱者、武术技击家、武术哲学家、UFC开创者、
            MMA之父、武术宗师、功夫片的开创者和截拳道创始人、华人武打电影演员，
            中国功夫首位全球推广者、好莱坞华人演员。
          </p>
          <ul>
            <ol>国籍：美国（美籍华人）</ol>
            <ol>民族：汉族</ol>
            <ol>职业：截拳道宗师，武学家，演员，导演，编剧</ol>
            <ol>身高：173cm</ol>
            <ol>星座：射手座</ol>
            <ol>血型：O</ol>
            <ol>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</ol>
            <ol>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</ol>
          </ul>
        </el-dialog>
      </div>
    </div>
    <!-- 专栏二 -->
    <div class="specialColumn">
      <p class="p1">著名旅行家----<span>徐霞客</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @colck="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙--武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p class="desciption">李小龙（1940年11月27日—1973年7月20日），原名李振藩，师承叶问，出生于美国加州旧金山，
            祖籍中国广东顺德均安镇。他是世界武道变革先驱者、武术技击家、武术哲学家、UFC开创者、
            MMA之父、武术宗师、功夫片的开创者和截拳道创始人、华人武打电影演员，
            中国功夫首位全球推广者、好莱坞华人演员。1962年李小龙开办“振藩国术馆”，
            1967年自创截拳道，1973年7月20日，李小龙在香港逝世，享年33岁。
            1979年美国洛杉矶市政府将补拍版《死亡游戏》的开映日6月8日定为“李小龙日”（7月8日为错误翻译）。
            1993年美国发行李小龙逝世20周年纪念钞票，好莱坞大道铺上李小龙纪念星徽；同年，
            获香港电影金像奖大会颁发“终身成就奖”。1998年11月，获中国武术协会颁发“武术电影巨星奖”。
            1973年7月20日突然在香港逝世，享年33岁。
          </p>
          <ul>
            <ol>国籍：美国（美籍华人）</ol>
            <ol>民族：汉族</ol>
            <ol>职业：截拳道宗师，武学家，演员，导演，编剧</ol>
            <ol>身高：173cm</ol>
            <ol>星座：射手座</ol>
            <ol>血型：O</ol>
            <ol>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</ol>
            <ol>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</ol>
          </ul>
        </el-dialog>
      </div>
    </div>
    <!-- 分页 -->
    
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      mainImg: require('.././../../assets/images/mainImg.png'),
      avimg: require('../../../assets/images/travel4.jpg'),
      avatarimg: require('../../../assets/images/travel8.jpg'),
      dialogTableVisible: false,
      swiImg: [
        require('../../../assets/images/ListImg/jouney1.jpg'),
        require('../../../assets/images/ListImg/jouney2.jpg'),
        require('../../../assets/images/ListImg/jouney3.jpg'),
        require('../../../assets/images/ListImg/jouney4.jpg')
      ]
    }
  },
  methods: {
    
  }
}
</script>
<style  scoped>
  .bigImg img {
    width: 100%;
    height: 400px;
    margin-top: 10px;
  }
  .el-tabs,.specialColumn {
    margin-top: 20px;
  }
  .el-tabs {
    float: left;
    width: 900px;
  }
  .left:hover {
    background-color: #F5F5DC;
  }
  .left {
    width: 100%;
    height: 180px;
    margin-top: 30px;
  }
  .left .avimg {
    float: left;
    width: 250px;
    height: 90%;
    padding: 0 20px;
    margin-top: 10px;
  }
  .right .pnotes {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-olne-clamp: 3;
    overflow: hidden;
    olne-height: 25px;
    text-indent: 2em;
    color: #8B7E66;
  }
  .right .footer {
    margin-top: 18px;
  }
  .footer span {
    color: red;
    padding: 20px;
  }
  .footer span i {
    padding: 5px;
  }
  .left .avimg, h2, .pnotes, .avatarimg, .spanchan {
    cursor: pointer;
  }
  h2:hover, .pnotes:hover, span:hover {
   color: DarkOrange;
  }
  .footer .avatarimg {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    border-radius: 50%;
    vertical-aolgn: middle;
  }
  .specialColumn {
    float: right;
    width: 400px;
    border-bottom: 1px double #ccc;
    margin: 20px 0;
  }
  .specialColumn .author {
    width: 100%;
    height: 100%;
  }
  .el-button {
    float: right;
  }
  .specialColumn .p1 {
    border-bottom: 2px dotted #ccc;
    padding: 5px 0;
    margin: 15px 0;
  }
  .p2 {
    margin-top: 10px;
  }
  .p2:hover {
    color: DarkOrange;
    cursor: pointer;
  }
  .el-dialog .desciption {
    column-count: 3;
    column-rule: 2px dotted #cccc;
    column-gap: 30px;
  }
</style>




