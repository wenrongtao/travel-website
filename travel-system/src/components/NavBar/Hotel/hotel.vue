<template>
  <div class="container">
			<header>
				<a href="">
					<img :src="hotelImg3" />
				</a>
			</header>
			<main>
				<section class="item" v-for="(item, index) in hotelname" :key="index">
					<div class="left">{{item.hotel1}}</div>
					<div class="right" v-for="(im, i) in item.hotel2" :key="i">
						<a href="javascript: ;" @click="hotel()">{{im}}</a>
					</div>
				</section>
				<section class="extra">
					<a href="javascript: ;">
						<img :src="hotelImg2"/>
					</a>
					<a href="javascript: ;">
						<img :src="hotelImg1"/>
					</a>
				</section>
				
			</main>
			<footer>
				<nav>
					<a :href="'tel:' + 11668866">联系商家</a>
					<a href="javascript: ;"><p class="copyright">&copy;2021 邀我旅行</p></a>
					<el-button type="text" @click="purchaseOrder">我的订单</el-button>
				  
        </nav>
				
			</footer>	
      
		</div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      hotelImg1: require('../../../assets/images/HotelImg/hotel1.png'),
      hotelImg2: require('../../../assets/images/HotelImg/hotel2.png'),
      hotelImg3: require('../../../assets/images/HotelImg/hotel3.png'),
      dialogVisible: false,
      hotelname: [
        {
          hotel1: '推荐酒店',
          hotel2: ['海外酒店', '团购', '特惠酒店', '客栈公寓']
        },
        {
          hotel1: '热门酒店',
          hotel2: ['海外酒店', '团购', '特惠酒店', '客栈公寓']
        },
        {
          hotel1: '网红酒店',
          hotel2: ['海外酒店', '团购', '特惠酒店', '客栈公寓']
        },
        {
          hotel1: '特高级酒店',
          hotel2: ['海外酒店', '团购', '特惠酒店', '客栈公寓']
        }
      ]
    }
  },
  methods: {
    hotel() {
      this.$router.push('/hoteldetails')
    },
    purchaseOrder() {
      this.$router.push('/personal')
    }
  }
}
</script>
<style  scoped>
  header{
    width: 100%;
    display: flex;
  }
  header >a{
    flex: 1;
  }
  header >a >img{
    width: 100%;
  }
  main{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  main >.item{
    width: 100%;
    height: 100px;
    background-color: khaki;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
  }
  main > section >.left{
    flex: 1;
  }
  main >section >.right{
    flex: 2;
    flex-wrap: wrap;
    display: flex;
  }
  main >section >.right >a {
    width: 50%;
    display: block;
    line-height: 50px;
    text-align: center;
    color: white;
    box-sizing: border-box;
    text-decoration: none;
    border-left: 1px solid white;
    border-bottom:  1px solid white;
  }
  main >section >.right >a:hover {
    color: darkorange;
  }
  main >section >.right >a:nth-last-of-type(-n+2){
    border-bottom:none;
  }
  main >.item:nth-of-type(2){
    background-color: paleturquoise;
  }
  main >.item:nth-of-type(3){
    background-color: plum;
  }
  main >.item:nth-of-type(4){
    background-color: 	#9ACD32;
  }
  main >.extra{
    width: 100%;
    display: flex;
  }
  main >.extra >a{
    flex: 1;
  }
  main >.extra >a >img{
    width: 100%;
    height: 100%;
  }
  footer{
    width: 100%;
  }
  footer >nav{
    width: 100%;
    display: flex;
    border-bottom: 1px solid darkgray;
    border-top: 1px solid darkgray;
    margin-top: 20px;
  }
  footer >nav >a{
    flex: 1;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    color: darkgray;
  }
  footer >.copyright{
    text-align: center;
  }
  .extra {
    margin: 10px 0;
  }
  nav a:hover, .link a:hover {
    color: darkorange;
  }
  .link {
    margin: 10px 0;
  }
  .link a {
    color: #4682B4;
    padding: 0 5px;
    margin-bottom: 15px;
  }
  .item .left {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #1E90FF;
    margin: auto;
  }
  .item .left:hover {
    color: darkorange;
    cursor: pointer;
  }
  .copyright {
    margin: 10px 0;
  }
</style>
