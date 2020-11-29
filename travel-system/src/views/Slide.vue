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
        <el-container>
          <el-aside width="200px">
            <el-col>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#B0E0E6"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
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
  .el-aside {
    height: 99999px;
  }
  .el-col .el-menu{
    height: 500px
  }
  .el-col {
    margin-left: 20px;
  }
</style>
