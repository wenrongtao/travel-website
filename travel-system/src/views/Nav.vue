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
                <span @click="cityClick">城市</span>
              </template>
              <div class="block">
                <el-cascader
                  v-model="value"
                  :options="options"
                  @change="handleChange"></el-cascader>
              </div>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-view"></i>
              <span slot="title" @click="scenicClick">景点</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-truck"></i>
              <span slot="title" @click="trafficClick">交通工具</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-office-building"></i>
              <span slot="title" @click="hotelClick">酒店</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-position"></i>
              <span slot="title" @click="foodClick">美食</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-ship"></i>
              <span slot="title" @click="tourClick">跟团旅行</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-sunny"></i>
              <span slot="title" @click="weatherClick">天气</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-chat-dot-round"></i>
              <span slot="title" @click="commentClick">评论</span>
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
      value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    }
  },
  methods: {
    cityClick() {
      this.$router.push('/city')
    },
    scenicClick() {
      this.$router.push('/scenic')
    },
    trafficClick() {
      this.$router.push('/traffic')
    },
    hotelClick() {
      this.$router.push('/hotel')
    },
    foodClick() {
      this.$router.push('/food')
    },
    tourClick() {
      this.$router.push('/tour')
    },
    weatherClick() {
      this.$router.push('/weather')
    },
    commentClick() {
      this.$router.push('/comment')
    }
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
