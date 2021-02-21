<template>
  <div>
    <div class="wr">
       <h2>天气预报</h2>
        <input class="tp" type="text" placeholder="请输入查询的城市" v-model.trim='msg' @keyup.enter='search()'/>
        <input class="bt" type="button" value="查询" @click="search()">
        <ul>
          <li v-for='(item, i) in list' :key="i">
            {{item.temperature}}---{{item.humidity}}---{{item.info}}---{{item.wid}}---{{item.direct}}---{{item.power}}
            <span v-if='item.type.indexOf("云")!=-1'>?️</span>
            <span v-else-if='item.type.indexOf("雨")!=-1'>?️</span>
            <span v-else>?</span> 
          </li>
        </ul>
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
      msg:'',
      list:{}
    }
  },
  methods: {
    search(){
      $.ajax({
          type:'post',
          url:'http://apis.juhe.cn/simpleWeather/query?',
          data:{
              city:this.msg,
              key: ''
          },
          dataType:'json',
          success:(result)=>{
              console.log(result);
              this.list=result.realtime;    
          }
      })
    }
  }
}
</script>
<style  scoped>
  .wr {
    margin: 5px;
    background-color: white;
    height: 300px;
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
</style>
