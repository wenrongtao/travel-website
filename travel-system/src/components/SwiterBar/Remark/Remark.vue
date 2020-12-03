<template>
  <div class="remarkArea">
    <div class="remark">
      <div class="input">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="120"
          :rows="8"
          show-word-limit>
        </el-input>
        <el-button type="danger" icon="el-icon-delete">清空内容</el-button>
        <el-button type="success" icon="el-icon-check">发布评论</el-button>
      </div>
      <h1>评论区</h1>
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
  .remarkArea {
    margin-top: 30px;
    margin-left: 30px;
  }
  .remark h1 {
    color: darkorange;
  }
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
    color: 	#8B8B7A;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .remark .input {
    width: 500px;
    margin: 60px auto;
  }
  .el-button {
    float: right;
    margin-top: 30px;
    margin-left: 10px;
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
