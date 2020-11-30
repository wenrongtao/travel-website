<template>
  <div id="home">
    <div class="header">
      <div><span>旅行，我们一直在路上</span><strong>Travel, we are always on the road</strong></div>
      <div>
        <i @click="lg"><img :src="login" class="login" >Log in</i>
        <i @click="rg"><img :src="register" class="register">Sign up</i>
        <el-dropdown :hide-on-click="true" @command="handleCommand" size="medium">
          <span class="el-dropdown-link">
            <img :src="avatar" title="请选择" class="avatar">
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item divided command="a">Person Center</el-dropdown-item>
            <el-dropdown-item divided command="b">Setting</el-dropdown-item>
            <el-dropdown-item divided command="c">Log out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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

export default {
  name: '',
  data () {
    return {
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
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    lg() {
      this.$router.push('/login')
    },
    rg() {
      this.$router.push('/register')
    }
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
  .el-dropdown-menu {
    font-weight: 700;
  }
</style>
