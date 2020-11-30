<template>
  <div class="lg">
    <div class="lg-box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img :src="imgLg" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form  class="login_form" >
        <el-form-item  prop="username">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- 在element-ui组件库中，输入框可以使用type进行修改 -->
          <el-input prefix-icon="el-icon-unlock"  type='password' placeholder="请输入密码"></el-input>
        </el-form-item >
        <el-form-item class="btns" >
          <el-button type="primary" round>登录</el-button>
          <el-button type="success" round>重置</el-button>
        </el-form-item>
        <el-form-item>
          <p>其它登录方式</p>
          <el-button type="primary" class="changew"><img :src="imgqq">QQ登录</el-button>
          <el-button type="danger" class="changew"><img :src="imgwei">微信登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  
  export default {
    name: '',
    data () {
      return {
        imgLg: require('../assets/images/travel1.jpg'),
        imgqq: require('../assets/images/ListImg/qq.png'),
        imgwei: require('../assets/images/ListImg/weixin.png')
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .lg {
    height: 100%;
    background-color: darkgrey;
  }
  .lg-box {
    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .avator_box {
    width: 130px;
    height: 130px;
    border:1px solid #eee;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    margin: 0 auto;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }
  img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  p {
    color: #CDCDB4;
  }
  .changew {
    width: 150px;
    height: 35px;
  }
  .changew:nth-of-type(2) {
    margin-left: 55px;
  }
  .changew img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    padding: 0 5px;
  }
</style>
