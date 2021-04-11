<template>
<div>
  <div>
    <a href="javascript:void() " @click="backHotel">
      <i class="el-icon-back">返回
      </i>
    </a>
  </div>
  <div class="hl">
    <div class="ht" v-for="(item, index) in hotel" :key="index">
      <el-image 
        style="width: 100%; height: 200px"
        :src="item.img" 
        :preview-src-list="srcList">
      </el-image>
      <h2>{{item.name}}</h2>
      <span>{{item.detail}}</span>
      <span class="span2">{{item.reserve}}</span>
    </div>
  </div></div>

</template>
<script>


export default {
  name: '',
  data () {
    return {
      hotel: [
        {
          img: require('../../../assets/images/HotelImg/hotel.jpeg'),
          name: '枫叶酒店',
          detail: '客户是上帝，这里就是你的家！！',
          reserve: '预订'
        },
        {
          img: require('../../../assets/images/HotelImg/hotel.jpeg'),
          name: '枫叶酒店',
          detail: '客户是上帝，这里就是你的家！！',
          reserve: '预订'
        },
        {
          img: require('../../../assets/images/HotelImg/hotel.jpeg'),
          name: '枫叶酒店',
          detail: '客户是上帝，这里就是你的家！！',
          reserve: '预订'
        },
        {
          img: require('../../../assets/images/HotelImg/hotel.jpeg'),
          name: '枫叶酒店',
          detail: '客户是上帝，这里就是你的家！！',
          reserve: '预订'
        },
        {
          img: require('../../../assets/images/HotelImg/hotel.jpeg'),
          name: '枫叶酒店',
          detail: '客户是上帝，这里就是你的家！！',
          reserve: '预订'
        },
        {
          img: require('../../../assets/images/HotelImg/hotel.jpeg'),
          name: '枫叶酒店',
          detail: '客户是上帝，这里就是你的家！！',
          reserve: '预订'
        }
      ],
      srcList: [
        require('../../../assets/images/HotelImg/hotel1.jpg'),
        require('../../../assets/images/HotelImg/hotel2.jpg'),
        require('../../../assets/images/HotelImg/hotel3.jpg'),
        require('../../../assets/images/HotelImg/hotel4.jpeg')
      ]
    }
  },
  methods: {
    backHotel() {
      this.$router.push('/hotel')
    }
  }
}
</script>
<style  scoped>
a {
  font-size: 16px;
  font-weight: 700;
  color: red;
}
  .hl {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .ht {
    width: 300px;
    height: 300px;
    border: 1px solid #cccccc;
    margin-top: 30px;
  }
  .ht h2 {
    margin: 10px;
  }
  .ht .span2 {
    float: right;
    color: red;
    font-weight: 700;
    font-size: 18px;
    padding: 10px;
    border: 1px solid #cccccc;
  }
  .ht .span2:hover {
    cursor: pointer;
    font-size: 20px;
  }
</style>
