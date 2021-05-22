<template>
  <div>
    <div class="wr">
       <h2>天气预报</h2>
        <input class="tp" type="text" placeholder="请输入查询的城市" v-model.trim='msg' @keyup.enter='search()'/>
        <input class="bt" type="button" value="查询" @click="search()">
        <p class="time">更新时间：{{time}}</p>
        <p class="future">{{city}}<span>未来七天的天气情况</span></p>
        <ol>
          <li v-for='(item, i) in list' :key="i">
            白天最高温度：{{item.tem_day}}------白天最低温度：{{item.tem_night}}------风向：{{item.win}}------风力等级：{{item.win_speed}}------天气情况：{{item.wea}}
          </li>
        </ol>
    </div>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>
<script>

export default {
  name: '',
  data () {
    return {
      value: new Date(),
      msgid:'',
      msg: '',
      time: '',
      city: '',
      list:{}
    }
  },
  methods: {
    async search() {
        const {data: res} = await this.$http.get('/free/week?appid=55448889&appsecret=7vVtQ6eO&vue=1&city='+ this.msg)
        this.time = res.update_time
        this.city = res.city
        this.list = res.data
    }
  },
  mounted() {
    // this.search()
  }
}
</script>
<style  scoped>
  .wr {
    padding: 20px;
    margin: 5px;
    background-color: white;
    height: 450px;
  }
  .el-calendar {
    border-radius: 5px;
  }
  .wr h2 {
    margin-bottom: 10px;
  }
  .wr .tp {
    width: 150px;
    height: 25px;
    margin-right: 3px;
  }
  .wr .bt {
    width: 40px;
    height: 30px;
    color: red;
    font-weight: 700;
  }
  .wr .bt:hover {
    cursor: pointer;
   
  }
  .time {
    margin: 10px 10px 10px 0;
    font-size: 18px;
  }
  .future {
    color: red;
    font-size: 24px;
    font-weight: 700;
  }
  .future >span {
    font-size: 16px;
  }
  ol li {
    /* list-style: none; */
    margin-left: 15px;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid #cccccc;
    color:orange;
  }
</style>
