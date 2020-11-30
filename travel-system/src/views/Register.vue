<template>
  <div class="lg">
    <div class="lg-box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img :src="imgRg" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form  class="login_form" >
        <el-form-item  prop="username">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请设置用户名"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <!-- 在element-ui组件库中，输入框可以使用type进行修改 -->
          <el-input prefix-icon="el-icon-message"  type='password' placeholder="请输入您邮箱"></el-input>
        </el-form-item >
        <el-form-item prop="tel">
          <el-input prefix-icon="el-icon-phone"  type='password' placeholder="请输入您号码"></el-input>
        </el-form-item >
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-unlock"  type='password' placeholder="请设置密码"></el-input>
        </el-form-item >
        <el-form-item prop="checkpassword">
          <el-input prefix-icon="el-icon-lock"  type='password' placeholder="再次确认密码"></el-input>
        </el-form-item >
        <el-form-item class="btns" >
          <el-button type="warning">立即注册</el-button>
          <el-checkbox label="" name="type">阅读并同意<b>服务协议</b></el-checkbox>
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
        imgRg: require('../assets/images/travel3.jpg')
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
    height: 500px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30px;
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
  .btns .el-button {
    background-color: darkorange;
    width: 150px;
    margin-right: 8px;
  }
  .btns b {
    color: red;
  }
</style>
