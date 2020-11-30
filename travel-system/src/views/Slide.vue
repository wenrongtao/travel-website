<template>
  <div>
    <el-container>
        <el-header>
          <el-menu :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            text-color="#FFB90F"
            active-text-color="#1E90FF">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title" id="gl">攻略</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-menu-item index="2-4">选项4</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">全球购</el-menu-item>
            <el-menu-item index="4">礼品卡</el-menu-item>
            <el-menu-item index="5">评论</el-menu-item>
            <el-menu-item index="6">联系我们</el-menu-item>
            <el-menu-item class="search">
              <el-input
                placeholder="请输入要查找的城市"
                prefix-icon="el-icon-search"
                v-model="input2">
              </el-input>
              <el-button type="primary" icon="el-icon-search" size="medium">搜索</el-button>
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
      
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .el-menu-item, #gl {
    font-size: 16px;
    font-weight: 700;
  }
  .search {
    margin-left: 260px;
  }
  .el-menu-item:last-child .el-button {
    margin-left: 5px;
  }
 
</style>
