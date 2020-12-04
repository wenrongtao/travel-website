<template>
  <div class="city">
    <div class="top">
      <span>按省份选择：</span>
      <el-select v-model="value" placeholder="省份">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="城市">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="input">可直接输入：</span>
      <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="hotCity">
      <span>热门城市：</span>
      <span>
        <el-button type="primary" plain>北京</el-button>
        <el-button type="primary" plain>上海</el-button>
        <el-button type="primary" plain>广州</el-button>
        <el-button type="primary" plain>深圳</el-button>
        <el-button type="primary" plain>西安</el-button>
        <el-button type="primary" plain>重庆</el-button>
        <el-button type="primary" plain>成都</el-button>
        <el-button type="primary" plain>西藏</el-button>
        <el-button type="primary" plain>贵阳</el-button>
      </span>
    </div>
    <div class="pinyin">
      <span>按城市首字母选择：</span>
      <br>
      <br>
      <span>
        <el-button circle>A</el-button>
        <el-button circle>B</el-button>
        <el-button circle>C</el-button>
        <el-button circle>D</el-button>
        <el-button circle>E</el-button>
        <el-button circle>F</el-button>
        <el-button circle>G</el-button>
        <el-button circle>H</el-button>
        <el-button circle>I</el-button>
        <el-button circle>J</el-button>
        <el-button circle>K</el-button>
        <el-button circle>L</el-button>
        <el-button circle>M</el-button>
        <el-button circle>N</el-button>
        <el-button circle>P</el-button>
        <el-button circle>Q</el-button>
        <el-button circle>R</el-button>
        <el-button circle>S</el-button>
        <el-button circle>T</el-button>
        <el-button circle>W</el-button>
        <el-button circle>X</el-button>
        <el-button circle>Y</el-button>
        <el-button circle>Z</el-button>
      </span>
    </div>
    <div class=" selCity cityA">
      <div><el-button type="warning" circle>A</el-button></div>
      <span  v-for="(item , index) in cityA" :key="index">{{item}}</span>
    </div>
    <div class="selCity cityB">
      <div><el-button type="warning" circle>B</el-button></div>
      <span  v-for="(item , index) in cityB" :key="index">{{item}}</span>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, 
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      cityA: [
        '安阳','安庆','安顺','安康','安丘','安溪', '安宁', '澳门',
        '安阳','安庆','安顺','安康','安丘','安溪', '安宁', '澳门',
        '安阳','安庆','安顺','安康','安丘','安溪', '安宁', '澳门',
        '安阳','安庆','安顺','安康','安丘','安溪', '安宁', '澳门'
      ],
      cityB: [
        '北京', '保定', '博山', '冰洋', '霸州', '巴彦淖尔', '巴楚县', '博罗县', '宝丰',
        '北京', '保定', '博山', '冰洋', '霸州', '巴彦淖尔', '巴楚县', '博罗县', '宝丰',
        '北京', '保定', '博山', '冰洋', '霸州', '巴彦淖尔', '巴楚县', '博罗县', '宝丰'
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .city {
    height: 9999px;
    border: 1px solid #cccccc;
    box-shadow: 1px 1px 2px #cccccc, -1px -1px 2px #cccccc;
    background-color: #fff;
  }
  .top {
    margin-top: 30px;
  }
  .top, .hotCity, .pinyin, .selCity {
    margin-left: 20px;
  }
  .hotCity, .pinyin {
    margin-top: 60px;
  }
  .el-select:nth-of-type(-n+2) {
    width: 150px;
    padding: 0 10px;
  }
  .input {
    margin-left: 30px;
  }
  .hotCity span:nth-of-type(1) {
    margin-right: 25px;
  }
  .selCity {
    width: 95%;
    height: 200px;
    margin-top: 50px;
  }
  .selCity:hover {
    background-color: #EEE9E9;
  }
  .selCity span {
    display: block;
    float: left;
    padding: 0 20px;
    margin-top: 20px;
    cursor: pointer;
  }
  .selCity span:hover{
    color: darkorange;
  }
</style>
