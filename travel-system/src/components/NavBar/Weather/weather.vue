<template>
  <div>
    <div class="wr">天气</div>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      value: new Date()
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .wr {
    margin: 5px;
    background-color: white;
    height: 200px;
  }
  .el-calendar {
    border-radius: 5px;
  }
</style>
