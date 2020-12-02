<template>
  <div class="card">
    <div class="process">
      <p>礼品卡使用教程</p>
      <el-steps :active="1" space="15%" >
        <el-step title="步骤1" description="点击选择"></el-step>
        <el-step title="步骤2" description="进入详情展示"></el-step>
        <el-step title="步骤3" description="确认购买"></el-step>
        <el-step title="步骤4" description="点击激活"></el-step>
        <el-step title="步骤5" description="输入激活码"></el-step>
        <el-step title="步骤6" description="礼品卡正常使用"></el-step>
      </el-steps>
    </div>
    <div class="block">
      <el-carousel height="300px">
        <el-carousel-item v-for="(item, index) in discountImg" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      discountImg: [
        require('../../../../assets/images/CardImg/discount1.png'),
        require('../../../../assets/images/CardImg/discount2.png'),
        require('../../../../assets/images/CardImg/discount3.png'),
        require('../../../../assets/images/CardImg/discount4.png')
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
   .card {
    margin-left: 20px;
    margin-bottom: 50px;
  }
  .process {
    margin-top: 30px;
  }
  .process p {
    color: darkorange;
    font-size: 20px;
    font-weight: 700;
    margin: 30px 0;
  }
  .block {
    margin-top: 100px;
  }
  .block .el-carousel {
    width: 500px;
    margin: auto;
  }
  .block .el-carousel img {
    width: 100%;
  }
</style>
