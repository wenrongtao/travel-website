<template>
  <div id="slid">
    <el-container>
        <el-header>
          <el-menu 
            default-active="./nav" 
            class="el-menu-demo" 
            mode="horizontal" 
            text-color="#FFB90F"
            active-text-color="#1E90FF"
            router>
            <el-menu-item index="./nav">首页</el-menu-item>
            <el-menu-item index="/strategynotes">攻略游记</el-menu-item>
            <el-menu-item index="/shopping">全球购</el-menu-item>
            <el-menu-item index="/card">礼品卡</el-menu-item>
            <el-menu-item index="/remark">意见反馈</el-menu-item>
            <el-menu-item index="/contact">热线服务</el-menu-item>
            <el-menu-item class="search" index="/informations">
              <el-select v-model="value" filterable placeholder="请输入要查找的城市" @change="change">
                <el-option-group
                  v-for="group in options"
                  :key="group.label"
                  :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-option-group>
              </el-select>
              <el-button type="primary" icon="el-icon-search" size="medium" @click="change">搜索</el-button>
            </el-menu-item>
          </el-menu>
        </el-header>
        <router-view></router-view>
      </el-container>
  </div>
</template>
<script>

export default {
  name: '',
  data () {
    return {
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [
          {
          value: 'Chengdu',
          label: '成都'
        }, 
        {
          value: 'Shenzhen',
          label: '深圳'
        }, 
        {
          value: 'Guangzhou',
          label: '广州'
        }, 
        {
          value: 'Dalian',
          label: '大连'
        },
        {
          value: 'Guizhou',
          label: '贵州'
        },
        {
          value: 'Sanxi',
          label: '山西'
        },
        {
          value: 'Hangzhou',
          label: '杭州'
        },
        {
          value: 'Hebei',
          label: '河北'
        },
        {
          value: 'Liaoning',
          label: '辽宁'
        },
        {
          value: 'Jilin',
          label: '吉林'
        },
        {
          value: 'Heilongjiang',
          label: '黑龙江'
        },
        {
          value: 'Jiangsu',
          label: '江苏'
        },
        {
          value: 'Hainan',
          label: '海南'
        },
        {
          value: 'Yunnan',
          label: '云南'
        },
        {
          value: 'Qinghai',
          label: '青海'
        },
        {
          value: 'Taiwan',
          label: '台湾'
        },
        {
          value: 'Gansu',
          label: '甘肃'
        },
        {
          value: 'Heibei',
          label: '河北'
        },
        {
          value: 'Heinan',
          label: '河南'
        }
        ]
      }],
      value: ''
    }
  },
  methods: {
    change() {
      this.$router.push('/informations')
    }
  }
}
</script>
<style  scoped>
  #slid {
    width: 100%;
  }
  .el-menu-item {
    font-size: 16px;
    font-weight: 700;
  }
  .search {
    margin-left: 260px;
  }
  .el-menu-item:last-child .el-button {
    margin-left: 5px;
  }
  .el-submenu .gl {
    font-size: 18px;
  }
  .el-submenu .el-menu-item {
    font-size: 10px;
  }
  .el-select {
    width: 300px;
  }
</style>
