<template>
  <div class="remark">
    <ul>
      <li v-for="(item, index) in commentContent" :key="index">
          <img :src="item.img">
          <span class="name">{{item.name}}</span>
          <div class="rate">
            <span>{{item.question}}</span>
          <el-rate
            v-model="value"
            text-color="#ff9900"
            :colors="colors"
            show-text>
          </el-rate>
          </div>
          <div class="fayan">
            <span class="left">
              {{item.content}}
            </span>
            
            <span class="right">
              <span>2021-12-2</span>
              <span><i class="el-icon-view"></i>浏览量&nbsp;997386</span>
              <span @click="like()">
                <el-badge :value="62" class="item">
                  <i class="el-icon-star-off"></i>点赞数
                </el-badge></span>
              <span class="spanchan" @click="dialogVisible = true"><i class="el-icon-chat-dot-round"></i>评论</span>
              <el-dialog
                title="回复Ta的评论"
                :visible.sync="dialogVisible"
                width="40%">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="reply()">回复</el-button>
                </span>
              </el-dialog>
            </span>
          </div>
          <p>回复Ta:{{replyContent}}</p>
        </li>
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
      replyContent: '',
      value: null,
      textarea: '',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      commentContent: [
        {
          img: require('../../../assets/images/ListImg/jouney1.jpg'),
          name:'大头',
          question: '对我们的服务还满意吗？',
          content: 'test的处境玩不玩对本文还不到位的郭跃文高段位了电弧额外观独一无二的文化设备到货党工委移动业务大比武一个大约为。'
        },
        {
          img: require('../../../assets/images/ListImg/profilePhoto.jpg'),
          name:'南方有树名乔木',
          question: '旅游者是最幸福的人儿',
          content: 'test的处境玩不玩对本文还不到位的郭跃文高段位了电弧额外观独一无二的文化设备到货党工委移动业务大比武一个大约为。'
        },
        {
          img: require('../../../assets/images/ListImg/dog.jpeg'),
          name:'在山的那边',
          question: '西藏是一个治愈心灵的净土',
          content: 'test的处境玩不玩对本文还不到位的郭跃文高段位了电弧额外观独一无二的文化设备到货党工委移动业务大比武一个大约为。'
        }
      ]
    }
  },
  methods: {
    reply() {
      this.dialogVisible = false;
      if (this.textarea.lenght != 0) {
        this.replyContent = this.textarea;
      }
    }
  }
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
