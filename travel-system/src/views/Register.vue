<template>
  <div class="lg">
    <div class="lg-box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img :src="imgRg" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form  class="login_form" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item  prop="username">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请设置用户名" v-model.trim="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <!-- 在element-ui组件库中，输入框可以使用type进行修改 -->
          <el-input prefix-icon="el-icon-message"  type='email' placeholder="请输入您邮箱" v-model="ruleForm.email"></el-input>
        </el-form-item >
        <el-form-item prop="tel">
          <el-input prefix-icon="el-icon-phone"  type='tel' placeholder="请输入您号码" v-model="ruleForm.tel"></el-input>
        </el-form-item >
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-unlock"  type='password' placeholder="请设置密码" v-model="ruleForm.password"></el-input>
        </el-form-item >
        <el-form-item prop="checkpassword">
          <el-input prefix-icon="el-icon-lock"  type='checkpassword' placeholder="再次确认密码" ></el-input>
        </el-form-item >
        <el-form-item class="btns" >
          <el-button type="warning" @click="submitForm('ruleForm')">立即注册</el-button>
          <el-checkbox label="" name="type" v-model="ruleForm.check">阅读并同意<b>服务协议</b></el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  
  export default {
    name: '',
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkpassword !== '') {
            this.$refs.ruleForm.validateField('checkpassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不能为空'));
        } else {
          if(!(/^1[3456789]d{9}$/.test(value))){ 
          callback(new Error('请输入正确的手机号码!'));
        } 
          callback();
        }
      }
      return {
        imgRg: require('../assets/images/travel3.jpg'),
        ruleForm: {
          username: '',
          email: '',
          tel: '',
          password: '',
          checkpassword: '',
          check: false
        },
        rules: {
          username: [
            { required: true, message: '请设置用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入您的邮箱', trigger: 'blur' }
          ],
          tel: [
            { validator: validateTel, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkpassword: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
            this.$router.push('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        var upData=null;
        var repeat=null;
        if (this.ruleForm.username && this.ruleForm.email && this.ruleForm.tel && this.ruleForm.password) {
            if (window.localStorage.getItem('list')) {
                upData={'username':this.ruleForm.username,'email': this.ruleForm.email,'tel': this.ruleForm.tel,'password':this.ruleForm.password};
                var dataJson=window.localStorage.getItem('list');
                dataJson=eval('('+dataJson+')');
                for (var i=0;i<dataJson.length;i++) {
                    if (dataJson[i].username==upData.username) {
                        alert('用户名重复');
                        repeat=1;
                    }
                }
                if (repeat==null) {
                    alert('注册成功');
                    dataJson.push(upData);
                    dataJson=JSON.stringify(dataJson);
                    window.localStorage.setItem('list',dataJson);
                    console.log(window.localStorage.getItem('list'));
                }
            } else {
                upData={'username':oUser.value,'password':oPwd.value};
                var data=[];
                data.push(upData);
                data=JSON.stringify(data);
                window.localStorage.setItem('list',data);
                alert('注册成功');
            }
        }
      }
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
