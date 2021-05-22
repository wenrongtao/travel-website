<template>
  <div id="home">
    <div class="header">
      <div><span>旅行，我们一直在路上</span><strong>Travel, we are always on the road</strong></div>
      <div style="position:relative">
        <i @click="lg"><img :src="login" class="login" >Log in</i>
        <i @click="rg"><img :src="register" class="register">Sign up</i>
        <img :src="avatar" title="欢迎您!" class="avatar" @click="showPersonal">
        <strong class="userNames">欢迎您，{{userName}}</strong>
        <div class="person" v-if="show">
          <ul>
            <li @click="pers">Personal Center</li>
            <li @click="set">Setting</li>
            <li @click="quit">Quit</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <el-carousel :interval="2000" type="card" height="200px">
        <el-carousel-item v-for="item in slideimg" :key="item">
          <img :src="item" title="来一场说走就走的旅行" alt="抱歉，图片无法加载">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="footer">
      <Slide></Slide>
    </div>
  </div>
</template>
<script>
import Slide from '../views/Slide'
import { mapGetters } from 'vuex'

export default {
  name: '',
  data () {
    return {
      show:false,
      title: '',
      avatar: require('../assets/images/avatar.png'),
      login: require('../assets/images/login.png'),
      register: require('../assets/images/register.png'),
      slideimg: [
        require('../assets/images/travel1.jpg'), 
        require('../assets/images/travel2.jpg'),
        require('../assets/images/travel3.jpg'),
        require('../assets/images/travel4.jpg'),
        require('../assets/images/travel5.jpg'),
        require('../assets/images/travel6.png'),
        require('../assets/images/travel7.jpg'),
        require('../assets/images/travel8.jpg')
        ],
        dialogVisible: false
    }
  },
  components: {
    Slide
  },
  methods: {
    showPersonal() {
      setTimeout(()=> {
        this.show = !this.show
      },200)
    },
    lg() {
      this.$router.push('/login')
    },
    rg() {
      this.$router.push('/register')
    },
    quit() {
      var cf = confirm('您确定要退出吗？？')
      if (cf) {
        window.sessionStorage.clear()
        window.opener = null; 
        window.open('', '_self'); 
        window.close()
      } else{}
    },
    pers() {
      this.$router.push('/personal')
    },
    set() {
      this.$router.push('/setting')
    }
  },
  computed: {
    ...mapGetters(['userName'])
  }
}
</script>
<style  scoped >
  #home {
    position: relative;
  }
  .main {
    margin-top: 50px;
  }
  .el-carousel {
    width: 800px;
    margin: auto;
  }
  .el-carousel-item {
    width: 800px;
    height: 200px;
  }
  .el-carousel-item img {
    width: 100%;
    height: 100%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #FFB90F;
  }
  .header span {
    font-size: 25px;
    font-weight: 700;
    color: white;
    font-family:Georgia, 'Times New Roman', Times, serif;
    line-height: 50px;
    margin-left: 40px;
  }
  .header strong {
    color: white;
    padding-left: 10px;
    font-size: 10px;
  }
  .header .avatar {
    width: 55px;
    height: 55px;
    margin-right: 40px;
    margin-top: -2px;
    cursor: pointer;
  }
  .header .login, .register {
    width: 25px;
    height: 20px;
  }
  .header i {
    display: block;
    float: left;
    padding: 5px 5px;
    margin-right: 30px;
    margin-top: 8px;
    color: white;
    cursor: pointer;
    font-weight: 700;
  }
  .header i:nth-of-type(2) {
    border: 2px solid white;
    border-radius: 5px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .person {
    position: absolute;
    right: 0;
    width: 160px;
    height: 110px;
    background-color: #FFB90F;
    border-radius: 5px;
  }
  .header .avatar:hover >.person {
    display: block;
  }
  .person ul li {
    list-style: none;
    font-size: 15px;
    font-weight: 700;
    color: white;
    text-align: center;
    border-bottom: 1px solid white;
    line-height: 36px;
  }
  .person ul li:hover {
    color: darkorange;
    background-color: #6495ED;
    cursor: pointer;
  }
  .userNames {
    position: absolute;
    left: -180px;
    top: 20px;
    font-style: italic;
    font-size: 24px;
  }
</style>
