<template>
  <div class="orderFare">
    <p><span @click="startClick()">{{startCity}}</span><i class="el-icon-refresh" @click="exchangeCity()"></i><span @click="endClick()">{{endCity}}</span></p>
    <el-dialog
      title="选择站点"
      :visible.sync="dialogVisible1"
      width="30%"
      :before-close="handleClose">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input1">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="startDetermine">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="选择站点"
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="endDetermine">确 定</el-button>
      </span>
    </el-dialog>
    <p>2021年03月01日</p>
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="学生票"></el-radio>
      <el-radio label="成人票"></el-radio>
    </el-radio-group>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="优惠区">
    </el-switch>
    <br>
    <div class="button">车票查询</div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      value: '',
      startCity: '株洲',
      endCity: '杭州',
      dialogVisible1: false,
      dialogVisible2: false,
      ruleForm:{
        resource: ''
      },
      input1: '',
      input2: ''
    }
  },
  mounted() {
    this.exchangeCity()
  },
  methods: {
    exchangeCity() {
      this.startCity = this.endCity;
      this.endCity = this.startCity;
    },
    startClick() {
      this.dialogVisible1 = true
    },
    endClick() {
      this.dialogVisible2 = true
    },
    startDetermine() {
      this.dialogVisible1 = false;
      this.startCity = this.input1
    },
    endDetermine () {
      this.dialogVisible2 = false;
      this.endCity = this.input2
    }
  }
}
</script>
<style  scoped>
  .orderFare {
    width: 600px;
    height: 300px;
    border: 1px solid #cccccc;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #cccccc, -1px -1px 2px #cccccc;
    user-select: none;
    padding: 10px;
  }
  p {
    margin-left: 200px;
  }
  .el-radio-group {
    margin-left: 200px;
  }
  .el-switch {
    margin-left: 50px;
  }
  p > span {
    font-size: 20px;
    font-weight: 700;
  }
  p > span:first-of-type {
    padding-right: 50px;
  }
  p > span:last-of-type {
    padding-left: 50px;
  }
  p {
    padding: 10px;
  }
  .button {
    width: 200px;
    height: 30px;
    border-radius: 30px;
    color: white;
    background-color: orange;
    margin: 30px 0 0 200px;
    padding: 5px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 700;
  }
  .button:hover, p:hover {
    cursor: pointer;
  }
  p > i {
    width: 50px;
    height: 50px;
    font-size: 25px;
  }
</style>
