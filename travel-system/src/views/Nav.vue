<template>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b" router>
            <el-menu-item index="/scenic">
              <i class="el-icon-view"></i>
              <span slot="title" >景点</span>
            </el-menu-item>
            <el-menu-item index="/traffic">
              <i class="el-icon-truck"></i>
              <span slot="title">交通工具</span>
            </el-menu-item>
            <el-menu-item index="/hotel">
              <i class="el-icon-office-building"></i>
              <span slot="title">酒店</span>
            </el-menu-item>
            <el-menu-item index="/descfood">
              <i class="el-icon-position"></i>
              <span slot="title">美食</span>
            </el-menu-item>
            <el-menu-item index="/tour">
              <i class="el-icon-ship"></i>
              <span slot="title">跟团旅行</span>
            </el-menu-item>
            <el-menu-item index="/weather">
              <i class="el-icon-sunny"></i>
              <span slot="title">天气</span>
            </el-menu-item>
            <el-menu-item index="/comment">
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
  methods: {
    
  }
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
  .block .el-cascader {
    width: 150px;
    margin-left: 13px;
  }
</style>
