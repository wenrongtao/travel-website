<template>
  <div class="card">
    <div class="process">
      <p>礼品卡购买流程</p>
      <el-steps :active="1" space="15%" >
        <el-step title="注册登录" description="用户需要注册登录，才能进入礼品卡办理的系统"></el-step>
        <el-step title="信息填写" description="进入系统后，填写并完善个人信息"></el-step>
        <el-step title="订单支付" description="当信息填写无误时，进行支付办理礼品卡"></el-step>
        <el-step title="确认办理" description="完成支付功能，再与办公人员进行确认办理"></el-step>
        <el-step title="购买完成" description="此时礼品卡已经购买成功，可以享受我们各自优惠和福利了"></el-step>
      </el-steps>
    </div>
    <div class="tit">
      <h3>温馨提示</h3>
      <ol>
        <li>礼品卡一旦售出，遗失不补</li>
        <li>礼品卡采取一人一卡原则，请妥善保管</li>
        <li>购买礼品卡需要相应工作人员给与发票，否则无效或作废</li>
        <li>礼品卡是‘邀我’APP的优惠活动，仅限制于在该APP中使用</li>
      </ol>
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
  .card {
    margin-left: 20px;
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
  .tit {
    margin: 40px 0;
  }
  .tit ol {
    margin-left: 20px;
    padding: 5px 0;
  }
</style>
