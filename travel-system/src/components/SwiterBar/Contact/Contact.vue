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
          <h3>应该联系谁比较合适？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>15688访问量</span>
          <p>要看什么样的情况联系选择什么样的方式</p>
        </div>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>应该联系谁比较合适？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>12987访问量</span>
          <p>要看什么样的情况联系选择什么样的方式</p>
        </div>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>应该联系谁比较合适？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>12987访问量</span>
          <p>要看什么样的情况联系选择什么样的方式</p>
        </div>
      </div>
      <div class="tel">
        <div class="tel1">
          <h3>应该联系谁比较合适？？</h3>
          <span><i class="el-icon-question">标准答案</i></span><span>12987访问量</span>
          <p>要看什么样的情况联系选择什么样的方式</p>
        </div>
      </div>
    </div>
    <div class="right">
      <p>其他人还搜</p>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      
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
    box-shadow: 2px -2px 3px #cccccc;
  }
  .tel .tel1 span i {
    color: red;
  }
</style>
