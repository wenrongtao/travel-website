<template>
  <div class="">
     <div class="menu-box">
       <img :src="foodImg" alt="" srcset="">
       <div class="right">
         <h2>一盘蒸饺（热卖款）</h2>
         <p>门店销量地1名</p>
         <p><span>月销8381</span><span class="well-content">好评度89%</span></p>
         <p><span class="price">￥12元</span><span class="number"><el-input-number size="small" v-model="num" @change="calculateShow" :min="0" label="购买数量"></el-input-number></span></span></p>
         <span class="account" v-show="show">去结算</span>
       </div>
     </div>
     <div class="menu-box">
       <img :src="foodImg" alt="" srcset="">
       <div class="right">
         <h2>一盘蒸饺（热卖款）</h2>
         <p>门店销量地1名</p>
         <p><span>月销8381</span><span class="well-content">好评度89%</span></p>
         <p><span class="price">￥12元</span><span class="number"><el-input-number size="small" v-model="num" @change="calculateShow" :min="0" label="购买数量"></el-input-number></span></span></p>
         <span class="account" v-show="show">去结算</span>
       </div>
     </div>
     <div class="menu-box">
       <img :src="foodImg" alt="" srcset="">
       <div class="right">
         <h2>一盘蒸饺（热卖款）</h2>
         <p>门店销量地1名</p>
         <p><span>月销8381</span><span class="well-content">好评度89%</span></p>
         <p><span class="price">￥12元</span><span class="number"><el-input-number size="small" v-model="num" @change="calculateShow" :min="0" label="购买数量"></el-input-number></span></span></p>
         <span class="account" v-show="show">去结算</span>
       </div>
     </div>
     <div class="menu-box">
       <img :src="foodImg" alt="" srcset="">
       <div class="right">
         <h2>一盘蒸饺（热卖款）</h2>
         <p>门店销量地1名</p>
         <p><span>月销8381</span><span class="well-content">好评度89%</span></p>
         <p><span class="price">￥12元</span><span class="number"><el-input-number size="small" v-model="num" @change="calculateShow" :min="0" label="购买数量"></el-input-number></span></span></p>
         <span class="account" v-show="show">去结算</span>
       </div>
     </div>
     <div class="menu-box">
       <img :src="foodImg" alt="" srcset="">
       <div class="right">
         <h2>一盘蒸饺（热卖款）</h2>
         <p>门店销量地1名</p>
         <p><span>月销8381</span><span class="well-content">好评度89%</span></p>
         <p><span class="price">￥12元</span><span class="number"><el-input-number size="small" v-model="num" @change="calculateShow" :min="0" label="购买数量"></el-input-number></span></span></p>
         <span class="account" v-show="show">去结算</span>
       </div>
     </div>
     <div class="menu-box">
       <img :src="foodImg" alt="" srcset="">
       <div class="right">
         <h2>一盘蒸饺（热卖款）</h2>
         <p>门店销量地1名</p>
         <p><span>月销8381</span><span class="well-content">好评度89%</span></p>
         <p><span class="price">￥12元</span><span class="number"><el-input-number size="small" v-model="num" @change="calculateShow" :min="0" label="购买数量"></el-input-number></span></span></p>
         <span class="account" v-show="show">去结算</span>
       </div>
     </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      foodImg: require('../../../assets/images/FoodImg/food/food6.png'),
      num: 0,
      show: false
    }
  },
  methods: {
    calculateShow() {
      if (this.num < 1) {
        this.show = false
      }
        this.show = true
    }
  }
}
</script>
<style  scoped>
  * {
    user-select: none;
  }
  .menu-box {
    display: flex;
    width: 50%;
    height: 170px;
    margin: 20px 0;
    border: 1px solid #D3D3D3;
    box-shadow: 1px 1px 2px #D3D3D3;
  }
  img {
    flex: 1;
    float: left;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    vertical-align: middle;
    }
    .right {
      flex: 2;
      height: 100%;
      padding: 15px 0 0 15px;
    }
    .right > h2 {
      padding-bottom: 5px;
    }
    .right > p {
      padding: 5px 0;
    }
    .right > p:first-of-type {
      width: 100px;
      background-color: #B0E0E6;
      color: orange;
      letter-spacing: .2em;
    }
    .right > p:nth-of-type(2) {
      color: #CDCDB4;
    }
    .right > p:nth-of-type(2) >.well-content {
      padding-left: 15px;
    }
    .right > p:last-of-type {
      margin-bottom: 8px;
    }
    .right > p:last-of-type > .price {
      color: red;
      font-size: 18px;
      font-weight: 700;
    }
    .right > p:last-of-type > .number {
      margin-left: 70px;
    }
    .right > p:last-of-type > .number > .dec, .right > p:last-of-type > .number > .inc {
      border: 1px solid orange;
      padding: 0 5px;
      font-size: 18px;
      font-weight: 700;
    }
    .right > p:last-of-type > .number > .dec, .right:hover > p:last-of-type > .number > .inc:hover {
      cursor: pointer;
    }
    .right > p:last-of-type > .number > .dec {
      margin-right: 5px;
    }
    .right > p:last-of-type > .number > .inc {
      margin-left: 5px;
    }
    .right > .account {
      float: right;
      background-color: orange;
      border-radius: 10px;
      padding: 5px;
      margin-top: -40px;
      margin-right: 20px;
    }
    .right > .account:hover {
      cursor: pointer;
      font-weight: 700;
    }
</style>
