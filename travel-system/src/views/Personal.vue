<template>
  <div class="personal">
    <h2>我的订单</h2>
    <div class="order" v-if="orderList.length!=0">
      <div class="menu" v-for="(item,index) in orderList" :key="index">
        <span>{{item.time}}</span>
        <p><span>{{item.orderName}}</span><span>￥{{item.price}}元</span></p>
        <p style="float:right;padding-right:10px">
          <el-button type="primary" plain  icon="el-icon-edit" size='mini' @click="editMenu(item.id)"></el-button>
          <el-button type="primary" plain  icon="el-icon-delete" size='mini' @click="deleteMenu(item.id)"></el-button></p>
      </div>
    </div>
    <p v-else class="no-menu">暂无订单信息.....</p>
    <el-dialog
      title="编辑订单"
      :visible.sync="dialogVisible"
      width="100%"
      fullscreen=true
      :before-close="handleClose">
      <div class="msg">
        <p>2021-2-2</p>
        <p>如家酒店</p>
        <p>￥68元</p>
      </div>
      <div class="edi">
        <p><label for="number">更改数量: </label>
        <input type="number" name="" id="nmber" class='input'></p>
        <br>
        <p><label for="time">更改时间:  </label>
        <input type="datetime-local" name="" id="time" class='input'>
        <br></p>
        <a href="javascript:void()" @click="reNew()">重新选择其他>></a>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      number:0,
      dialogVisible:false,
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
      orderList:[
        {
          time:'2021-01-05',
          orderName:'如家酒店',
          price:'199'
        },
        {
          time:'2021-02-05',
          orderName:'都匀杉木湖-摔碗纪念品',
          price:'94'
        },
        {
          time:'2020-02-03',
          orderName:'千户苗寨-牛角酒杯',
          price:'88'
        },
        {
          time:'2021-04-18',
          orderName:'大唐纪念服',
          price:'96'
        },
        {
          time:'2021-02-18',
          orderName:'天安门-五星水杯',
          price:'199'
        },
        {
          time:'2021-01-19',
          orderName:'如家酒店',
          price:'199'
        },
        {
          time:'2020-12-08',
          orderName:'上海东方明珠纪念手册',
          price:'199'
        },
        {
          time:'2021-01-2',
          orderName:'西藏手链',
          price:'199'
        },
        {
          time:'2021-01-19',
          orderName:'如家酒店',
          price:'199'
        },
        {
          time:'2020-12-08',
          orderName:'上海东方明珠纪念手册',
          price:'199'
        }
      ]
    }
  },
  methods: {
    editMenu() {
      this.dialogVisible = !this.dialogVisible;
    },
    deleteMenu(id) {
      let index = this.orderList.findIndex(item=> {
        if(item.id == id) {
          let det = confirm('确定取消该订单吗？？')  
          if(det) {
            return true
          }
          
        }
      })
       this.orderList.splice(index,1)
    },
    reNew() {
      this.$router.push('/hotel')
    }
  }
}
</script>
<style  scoped>
  .personal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 750px;
    height: 500px;
    background-color: #fff;
    border-radius: 8px;
  }
  .order {
    overflow: hidden;
  }
  .personal h2 {
    border-bottom: 1px solid burlywood;
    padding: 8px 8px;
    color:red
  }
  .personal .no-menu {
    font-size: 24px;
    padding: 20px 20px 20px 5px;
    color:DarkSeaGreen;
  }
  .order {
    height: 90%;
    overflow-y: auto;
  }
  .menu {
    margin: 10px;
    padding: 10px 0 30px 10px;
    background-color: WhiteSmoke;
    border-radius: 5px;
  }
  .menu > p>span:first-of-type{
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    padding-top: 10px;
    text-shadow: 1px 1px 1px DarkSeaGreen;
  }
  .menu > p>span:last-of-type{
    float: right;
    color: red;
    font-size: 16px;
    padding-right: 10px;
    font-weight: 700;
  }
  .msg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: slateblue;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  .edi {
    font-size: 16px;
    padding: 50px 20px 0 0;
  }
  .edi>p {
    margin:6px 0 8px 0;
    height: 50px;
    color: slateblue;
  }
  .edi a {
    text-decoration: none;
  }
  .edi a:hover,.edi>p:hover {
    color: red;
  }
  .input {
    width:160px;
    height:25px;
    outline-color:slateblue;
  }
  .input:focus{
    outline-color: red;
  }
</style>
