<template>
  <div class="use">
    <div class="rules">
      <p class="useRules">礼品卡使用规则</p>
      <div class="area">
        <h3>使用范围</h3>
        <p>2021年12月1起-至今</p>
        <p></p>
      </div>
      <div class="shuoming">
        <h3>使用说明</h3>
        <ol>
          <li>邀我旅行卡内面额价值一元等值于一元人民币现金，不可提现/ 转账/ 赠送余额</li>
          <li>邀我旅行卡须确认收货后可用，激活后消费时支持同程预付类在线支付产品</li>
          <li>邀我旅行卡账户消费退款原路退回相应卡账户，不提供现金赔偿</li>
          <li>邀我旅行不对激活领用完毕的邀我旅行卡提供再次充值服务。多张邀我旅行卡可叠加使用，
            已确认收货的卡片可赠送亲友，已激活的邀我旅行卡金额不能转移到其他账户</li>
          <li>邀我旅行卡已取消有效期，部分活动用卡有效期以原活动规则为准</li>
          <li>若您有任何的购卡及使用问题请拨打888-999-666咨询，我们将24小时为您服务</li>
        </ol>
      </div>
      <div class="low">
        <h3>涉及相关法律</h3>
        <ol>
          <li>邀我旅行卡内面额价值一元等值于一元人民币现金，不可提现/ 转账/ 赠送余额</li>
          <li>邀我旅行卡须确认收货后可用，激活后消费时支持同程预付类在线支付产品</li>
          <li>邀我旅行卡账户消费退款原路退回相应卡账户，不提供现金赔偿</li>
          <li>邀我旅行不对激活领用完毕的邀我旅行卡提供再次充值服务。多张邀我旅行卡可叠加使用，
            已确认收货的卡片可赠送亲友，已激活的邀我旅行卡金额不能转移到其他账户</li>
          <li>邀我旅行卡已取消有效期，部分活动用卡有效期以原活动规则为准</li>
          <li>若您有任何的购卡及使用问题请拨打888-999-666咨询，我们将24小时为您服务</li>
        </ol>
      </div>
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
   .use {
    margin-left: 20px;
  }
  .rules {
    margin-top: 30px;
  }
  .rules .useRules {
    color: darkorange;
    font-size: 20px;
    font-weight: 700;
    margin: 30px 0;
  }
  .area, .shuoming, .low {
    background-color: #B0E0E6;
    border-radius: 5px;
    margin-bottom: 40px;
  }
  h3 {
    margin-bottom: 15px;
  }
  ol{
    margin-left: 30px;
  }
  ol li {
    padding: 5px 0;
  }
  .area p {
    text-indent: 1em;
    padding: 10px 0;
  }
</style>
