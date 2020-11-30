<template>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ADD8E6"
            text-color="#000000"
            active-text-color="#EEAD0E">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>城市</span>
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
              <i class="el-icon-view"></i>
              <span slot="title">景点</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-truck"></i>
              <span slot="title">交通工具</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-office-building"></i>
              <span slot="title">酒店</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-position"></i>
              <span slot="title">跟团旅行</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-ship"></i>
              <span slot="title">境内外游</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-sunny"></i>
              <span slot="title">天气</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-chat-dot-round"></i>
              <span slot="title">评论</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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
   .el-aside {
    height: 99999px;
  }
  .el-col .el-menu{
    height: 500px
  }
  .el-col {
    margin-left: 20px;
    margin-top: 5px;
  }
</style>
