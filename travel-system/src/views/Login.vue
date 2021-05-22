<template>
  <div class="lg">
    <div class="lg-box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img :src="imgLg" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form  class="login_form" :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item  prop="user">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请输入用户名" v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <!-- 在element-ui组件库中，输入框可以使用type进行修改 -->
          <el-input prefix-icon="el-icon-unlock"  type='pass' placeholder="请输入密码" v-model="ruleForm.pass" @keyup.enter="submitForm('ruleForm')"></el-input>
        </el-form-item >
        <el-form-item class="btns" >
          <el-button type="primary" round @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="success" round @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <el-form-item>
          <p>其它登录方式</p>
          <el-button type="primary" class="changew"><img :src="imgqq">QQ登录</el-button>
          <el-button type="danger" class="changew"><img :src="imgwei">微信登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog 
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span ref="span1">{{counter}}秒后自动跳转到主页面</span>
    </el-dialog>
    <!-- <div v-show="show" ref="span1" class="tols">{{counter}}秒后自动跳转到主页面</div> -->
  </div>
</template>
<script>
  
  export default {
    name: '',
    data () {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
            callback();
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        imgLg: require('../assets/images/travel1.jpg'),
        imgqq: require('../assets/images/ListImg/qq.png'),
        imgwei: require('../assets/images/ListImg/weixin.png'),
        ruleForm: {
          user: '',
          pass: ''
        },
        dialogVisible: false,
        counter: 3,
        rules: {
          user: [
            { validator: checkUsername, trigger: 'blur' },
            {min: 4, max: 8, message: '长度在4到8个字符', trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' },
            {min: 6, max: 12, message: '长度在6到12个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {

        // var login={'username':this.ruleForm.user,'password':this.ruleForm.pass};
        //   var dataJson=window.localStorage.getItem('list');
        //   var success=null;
        //   dataJson=eval('(' + dataJson + ')');
        //   for (var i=0;i<dataJson.length;i++) {
        //       if (dataJson[i].username==login.username&&dataJson[i].password==login.password) {
        //           this.dialogVisible = true
        //           setInterval(()=> {
        //             this.counter--
        //             this.$refs.span1 = this.counter 
        //             if(this.counter == 0) {
        //               this.$router.push('/home')
        //             }
        //           }, 1000)
        //           success=1;
        //       }
        //   }
        //   if (success==null) {
        //       alert('用户名或密码错误');
        //   }


        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible = true
            // loginCheck(this.form).then(res=>{
            //   console.log(res);
              // 登录成功,提示成功信息，然后跳转到首页，同时将token保存到localstorage中, 将登录名使用vuex传递到Home页面
              // if(res.meta.status === 200){
              //   // 提示成功信息
              //   this.$message({
              //       message: res.meta.msg,
              //       type: 'success'
              //   });
                var that = this;
                // 跳转到首页
                setInterval(() => {
                  this.counter--
                  this.$refs.span1 = this.counter 
                  if(that.counter == 0) {
                    that.$router.push('/home')
                  }
                },1000)
                localStorage.setItem('user_name',this.ruleForm.user)
                localStorage.setItem('user_pass',this.ruleForm.pass)
                // 将登录名使用vuex传递到Home页面
                this.$store.commit('handleUserName',this.ruleForm.user, this.ruleForm.pass);
              // }else{
              //   // 登录失败，就提示错误信息
              //   this.$message({
              //       message: '登录失败,'+res.meta.msg,
              //       type: 'error'
              //   });
              // }
            // })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
