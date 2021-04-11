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
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
      <span slot="footer" class="dialog-footer">
      </span>
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
          img: require('../../assets/images/ListImg/food1.jpg'),
          title: '来一场说走就走的旅行'
        },
        {
          img: require('../../assets/images/ListImg/food2.jpg'),
          title: '爱好、享受生活的每一天'
        },
        {
          img: require('../../assets/images/ListImg/food3.jpg'),
          title: '邀我一同旅游，去想去的地方'
        },
        {
          img: require('../../assets/images/ListImg/food4.jpg'),
          title: '快乐来源于生活，旅游是最好的选择'
        },
        {
          img: require('../../assets/images/ListImg/food5.jpg'),
          title: '只有去做，没有想不想'
        },
        {
          img: require('../../assets/images/ListImg/jouney1.jpg'),
          title: '旅游使人快乐，让人心旷神怡'
        },
        {
          img: require('../../assets/images/ListImg/jouney2.jpg'),
          title: '感谢大自然的馈赠，感受祖国的大好河山'
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
  methods: {
    openDetail(id) {
      this.dialogVisible = true
    }
  }
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
