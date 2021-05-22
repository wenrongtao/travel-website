<template>
  <div class="desc">
    <div class="food" v-for="(item, i) in foodmenu" :key="i">
      <el-image 
        style="width: 100%; height: 200px"
        :src="item.img" 
        :preview-src-list="srcList">
      </el-image>
      <p>{{item.trade}}</p>
      <span>{{item.title}}</span>
      <p class="bt">{{item.bt}}</p>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      foodmenu: [
        {
          img: require('../../../assets/images/FoodImg/food/food1.jpg'),
          trade: '小桃子餐饮',
          title: '可口、美味、让您回味无穷。。',
          bt: '立即下单'
        },
        {
          img: require('../../../assets/images/FoodImg/food/foodImg1.jpg'),
          trade: '小李子餐饮',
          title: '可口、美味、让您回味无穷。。',
          bt: '立即下单'
        },
        {
          img: require('../../../assets/images/FoodImg/food/foodImg2.jpg'),
          trade: '好兄弟餐饮',
          title: '可口、美味、让您回味无穷。。',
          bt: '立即下单'
        },
        {
          img: require('../../../assets/images/FoodImg/food/foodImg3.jpg'),
          trade: '姐妹餐饮',
          title: '可口、美味、让您回味无穷。。',
          bt: '立即下单'
        },
        {
          img: require('../../../assets/images/FoodImg/food/foodImg4.jpg'),
          trade: '好吃再来餐饮',
          title: '可口、美味、让您回味无穷。。',
          bt: '立即下单'
        },
        {
          img: require('../../../assets/images/FoodImg/food/foodImg5.jpg'),
          trade: '没你不行餐饮',
          title: '可口、美味、让您回味无穷。。',
          bt: '立即下单'
        }
      ],
      srcList: [
        require('../../../assets/images/FoodImg/food/food2.jpg'),
        require('../../../assets/images/FoodImg/food/food3.jpg'),
        require('../../../assets/images/FoodImg/food/food4.jpg'),
        require('../../../assets/images/FoodImg/food/food5.jpg')
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .food {
    width: 300px;
    height: 320px;
    border: 1px solid #cccccc;
    margin-top: 40px;
  }
  .desc {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
  }
  .food:hover {
    box-shadow: 1px 1px 2px #cccccc, -1px -1px 2px #cccccc;
  }
  .food .bt {
    width: 55px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    font-weight: 700;
    background-color: red;
    border-radius: 20%;
    margin-top: 15px;
  }
  .food .bt:hover{
    cursor: pointer;
    font-size: 13px;
  }
  .food p, .food span {
    padding: 5px 5px;
  }
</style>
