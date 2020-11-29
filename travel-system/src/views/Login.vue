<template>
  <div class="lg">
    <div class="lg-box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img src="../assets/images/hai.jpg" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form  ref="loginFormRef" class="login_form" :model='loginForm' :rules="loginFormRules">
        <el-form-item  prop="username">
          <el-input v-focus prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- 在element-ui组件库中，输入框可以使用type进行修改 -->
          <el-input prefix-icon="el-icon-unlock" v-model="loginForm.password" type='password'></el-input>
        </el-form-item >
        <el-form-item class="btns" >
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm('loginFormRef')">重置</el-button>
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
        //这是登录表单的数据绑定对象
        loginForm: {
          username:'admin',
          password: '123456'
        },
        //表单的验证规则对象
        loginFormRules: {
          username: [
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login() {
        this.$router.push('/home')
        // this.$refs.loginFormRef.validate(async valid => {
        //   if (!valid) return;
        //   //const {data: res} = await this.$http.post(login, this.loginForm),这里根据路径去访问,
        //   //因为结果返回promise，所以加上await;  {data: res}这个是解构的方式
        //   //if (res.meta.status != 200) return console.log('登录失败')
        //   //将请求到的数据保存到sessionStorage中，window.sessionStorage.setItem()
          
        // })

        /* 
        这里如果登录不成功，也可以进入home界面,这时我们需要路由导航进行设置,在router文件进行设置
        
        */
      }
    },
    directives: {
      focus: {
        inserted: function(el) {
          el.focus()
    }
      }
    }
  }
</script>
<style  lang='less' scoped>
  .lg {
    height: 100%;
    background-color: darkgrey;
  }
  .lg-box {
    width: 400px;
    height: 300px;
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
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
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
</style>
