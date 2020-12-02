<template>
  <div>
    <div class="topimg"><img :src="cardImg" alt=""></div>
    <div class="teps">
      <div class="tep tep1" @click="processClick"><img :src="cardImg2" alt=""><p>购买流程</p></div>
      <div class="tep tep2" @click="tutorialClick"><img :src="cardImg3" alt=""><p>使用教程</p></div>
      <div class="tep tep4" @click="serviceClick"><img :src="cardImg4" alt=""><p>使用规则</p></div>
      <div class="tep tep3" @click="questionClick"><img :src="cardImg5" alt=""><p>常见问题</p></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      cardImg: require('../../../assets/images/CardImg/card1.png'),
      cardImg2: require('../../../assets/images/CardImg/card2.jpg'),
      cardImg3: require('../../../assets/images/CardImg/card3.jpg'),
      cardImg4: require('../../../assets/images/CardImg/card4.jpg'),
      cardImg5: require('../../../assets/images/CardImg/card5.jpg')
    }
  },
  methods: {
    processClick() {
     this.$router.push('/process')
    },
    tutorialClick() {
      this.$router.push('/tutorial')
    },
    serviceClick() {
      this.$router.push('/service')
    },
    questionClick() {
      this.$router.push('/question')
    }
  }
}
</script>
<style  scoped>
  .topimg img{
    width: 100%;
    height: 600px;
  }
  .teps {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 200px;
    border: 2px solid #ccc;
    box-shadow: 1px -1px 2px #ccc;
    margin: 30px auto;
  }
  .teps .tep {
    width: 150px;
    height: 150px;
  }
  .teps .tep:hover {
    cursor: pointer;
  }
  .teps .tep:hover >img {
    transform: scale(1.2);
  }
  .teps img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  .teps p {
    font-size: 18px;
    font-weight: 700;
    color: darkorange;
    text-align: center;
    margin-left: -15px;
  }
  .teps p:hover {
    color: #20B2AA;
  }
</style>
