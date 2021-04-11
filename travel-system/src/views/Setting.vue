<template>
  <div class="set">
    <p>编辑资料</p>
    <ul>
      <li>头像<span><a href="javascript:;"><img :src="avaimg" alt="" srcset=""></a>></span></li>
      <li v-for="(item, index) in list" :key="index">{{item.mess}}<span><a href="javascript:;" @click="change()">{{item.mymess}}</a>></span></li>
      
      <el-button
        plain
        @click="open1">
        修改
      </el-button>
    </ul>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      avaimg: require('../assets/images/Person/person.jpeg'),
      list: [
        {
          mess: '昵称',
          mymess: '码农桃子'
        },
        {
          mess: '性别', 
          mymess: '女'
        },
        {
          mess: '所在地',
          mymess: '贵州省都匀市'
        },
        {
          mess: '出生日期',
          mymess: '1998-2-8'
        },
        {
          mess: '绑定号码',
          mymess: '1888888888'
        },
        {
          mess: '个性签名',
          mymess: '风雨过后定是彩虹！！'
        }
      ]
    }
  },
  methods: {
    open1() {
        this.$notify({
          title: '成功',
          message: '修改成功！！',
          type: 'success'
        });
        this.$router.push('/main')
      },
      change() {
        alert('input')
      }
  }
}
</script>
<style  scoped>
  .set {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 520px;
    height: 550px;
    background-color: #fff;
    border-radius: 8px;
  }
  .set p {
    font-size: 20px;
    padding: 8px 8px;
    border-bottom: 1px solid burlywood;
  }
  .set ul {
    list-style: none;
  }
  .set ul li {
    font-size: 18px;
    padding: 10px 15px;
    line-height: 40px;
  }
  .set ul li:hover {
    cursor: pointer;
    color: darkorange;
    background-color: #E6E6FA;
  }
  .set ul li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .set ul li span {
    float: right;
    padding: 0px 10px;
  }
  .set ul li span a {
    text-decoration: none;
    margin-right: 10px;
  }
  .el-button {
    color: red;
    font-weight: 700;
    border: 1px solid red;
    margin: 30px 0 0 20px;
  }
  .set ul {
    margin-top: 10px;
  }
</style>
