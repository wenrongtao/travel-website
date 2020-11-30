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
              <el-button type="text" class="button">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
      mainMsg: [
        {
          img: require('../../assets/images/ListImg/food1.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/food2.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/food3.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/food4.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/food5.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney1.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney2.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney3.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney4.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney5.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney6.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/jouney7.jpg'),
          title: '来一场说走就走的旅行'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .el-card {
    width: 300px;
    height: 300px;
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
</style>
