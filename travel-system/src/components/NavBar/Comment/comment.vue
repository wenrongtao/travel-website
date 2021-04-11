<template>
  <div class="remark">
    <ul>
      <li>
        <img :src="img">
        <span class="name">大头</span>
        <div class="rate">
          <span>对我们的网站还满意吗？</span>
        <el-rate
          v-model="value"
          text-color="#ff9900"
          :colors="colors"
          show-text>
        </el-rate>
        </div>
        <div class="fayan">
          <span class="left" @click="dialogVisible = true">
关于旅游我百度了一下,“旅”是旅行，外出，即为了实现某一目的而在空间上从甲地到乙地的行进过程；“游”是外出游览、观光、娱乐，即为达到这些目的所作的旅行。二者合起来即旅游。所以，旅行偏重于行，旅游不但有“行”，且有观光、娱乐含义。
          </span>
          <span class="right">
            <span>2021-12-2</span>
            <span><i class="el-icon-view"></i>浏览量</span>
            <span><i class="el-icon-star-off"></i>点赞数</span>
            <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
          </span>
        </div>
      </li>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
      </el-dialog>
      <li>
        <img :src="img">
        <span class="name">大头</span>
        <div class="rate">
          <span>对我们的网站还满意吗？</span>
        <el-rate
          v-model="value"
          text-color="#ff9900"
          :colors="colors"
          show-text>
        </el-rate>
        </div>
        <div class="fayan">
          <span class="left" @click="dialogVisible = true">“浅谈我对旅游的认识 旅游是个人利用其自由时间并以寻求愉悦为目的而在异地获得的一种短暂的休闲体验。 旅游是一种经济活动 所谓经济是指在一定的社会组织与秩序之下,人类为了求生存而经由劳动过程或支付适当代价以取得及利用各种生活资料的一切活动。简言之,经济活动是以满足人的需求为目的。
          </span>
          <span class="right">
            <span>2021-12-2</span>
            <span><i class="el-icon-view"></i>浏览量</span>
            <span><i class="el-icon-star-off"></i>点赞数</span>
            <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
          </span>
        </div>
      </li>
      <li>
        <img :src="img">
        <span class="name">大头</span>
        <div class="rate">
          <span>对我们的网站还满意吗？</span>
        <el-rate
          v-model="value"
          text-color="#ff9900"
          :colors="colors"
          show-text>
        </el-rate>
        </div>
        <div class="fayan">
          <span class="left" @click="dialogVisible = true">APP是我用过最好的，体验感贼棒，大赞
            该网站非常的靠谱，里面的东西优惠并且有质量保证，有什么问题，客服都能耐心答复、完全能够帮你解决
            所有的疑问，并且给你很多好的建议和见解。
          </span>
          <span class="right">
            <span>2021-12-2</span>
            <span><i class="el-icon-view"></i>浏览量</span>
            <span><i class="el-icon-star-off"></i>点赞数</span>
            <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
          </span>
        </div>
      </li>
      <li>
        <img :src="img">
        <span class="name">大头</span>
        <div class="rate">
          <span>对我们的网站还满意吗？</span>
        <el-rate
          v-model="value"
          text-color="#ff9900"
          :colors="colors"
          show-text>
        </el-rate>
        </div>
        <div class="fayan">
          <span class="left" @click="dialogVisible = true">“浅谈我对旅游的认识 旅游是个人利用其自由时间并以寻求愉悦为目的而在异地获得的一种短暂的休闲体验。 旅游是一种经济活动 所谓经济是指在一定的社会组织与秩序之下,人类为了求生存而经由劳动过程或支付适当代价以取得及利用各种生活资料的一切活动。简言之,经济活动是以满足人的需求为目的。
          </span>
          <span class="right">
            <span>2021-12-2</span>
            <span><i class="el-icon-view"></i>浏览量</span>
            <span><i class="el-icon-star-off"></i>点赞数</span>
            <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
          </span>
        </div>
      </li>
      
      <li>
        <img :src="img">
        <span class="name">大头</span>
        <div class="rate">
          <span>对我们的网站还满意吗？</span>
        <el-rate
          v-model="value"
          text-color="#ff9900"
          :colors="colors"
          show-text>
        </el-rate>
        </div>
        <div class="fayan">
          <span class="left" @click="dialogVisible = true">
            西江千户苗寨是全世界最大的苗寨。被中外人类学家和民俗学者认为是保存苗族“原始生态”文化比较完整的地方。西江苗族的历史非常悠久，可以追溯到公元前559年的蚩尤部落。据说西江苗族是蚩尤第三个儿子的后裔。
          </span>
          <span class="right">
            <span>2021-12-2</span>
            <span><i class="el-icon-view"></i>浏览量</span>
            <span><i class="el-icon-star-off"></i>点赞数</span>
            <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
          </span>
        </div>
      </li>
      <li>
        <img :src="img">
        <span class="name">大头</span>
        <div class="rate">
          <span>对我们的网站还满意吗？</span>
        <el-rate
          v-model="value"
          text-color="#ff9900"
          :colors="colors"
          show-text>
        </el-rate>
        </div>
        <div class="fayan">
          <span class="left" @click="dialogVisible = true">APP是我用过最好的，体验感贼棒，大赞
            111111111111111111111111
            111111111111111111111111
            111111111111111111111
            11111111111111111111
            11111111111111111111
            11111111111111111111
          </span>
          <span class="right">
            <span>2021-12-2</span>
            <span><i class="el-icon-view"></i>浏览量</span>
            <span><i class="el-icon-star-off"></i>点赞数</span>
            <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
          </span>
        </div>
      </li>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
      </el-dialog>
    </ul>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      img: require('../../../assets/images/ListImg/jouney1.jpg'),
      dialogVisible: false,
      value: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .remark li{
    background-color: white;
    list-style: none;
  }
  .remark li img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    vertical-align: middle;
    padding: 0 5px;
  }
  .remark li{
    width: 98%;
    border: 2px dotted #ccc;
    margin-top: 30px;
  }
  .remark li:hover {
    background-color: #F5F5F5;
    cursor: pointer;
  }
  .remark .name {
    color: darkorange;
    font-weight: 700;
  }
  .fayan {
    margin: 35px 0 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .fayan .right {
    width: 600px;
  }
  .fayan .right span{
    padding: 0 10px;
  }
  .fayan .right span:first-of-type {
    color: 	#8B8B7A;
  }
  .fayan .right span:nth-of-type(n+2) {
    color: red;
  }
  .fayan .right span:nth-of-type(n+2):hover {
    color: darkorange;
  }
  .fayan .left {
    display:inline-block;
    color: 	#8B8B7A;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rate {
    margin: 20px 0;
  }
  .rate .el-rate {
    font-size: 30px;
    padding: 2px 0;
  }
  .rate span {
    color: #8B8B7A;
  }
</style>
