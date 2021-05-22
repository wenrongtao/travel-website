<template>
  <div class="tour">
    <div class="tou">
      <div class="tl" v-for="(item, index) in mess" :key="index">
        <el-image 
          style="width: 100%; height: 300px"
          :src="item.img" 
          :preview-src-list="srcList">
        </el-image>
        <p>{{item.title}}</p>
        <span>{{item.msg}}</span>
        <a href="javascript:void()">>>了解我们</a>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      mess: [
        {
          img: require('../../../assets/images/TourImg/tour1.jpg'),
          title: "天天乐团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour2.jpg'),
          title: "富国团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour3.jpg'),
          title: "尚高团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour4.jpg'),
          title: "幸福小家团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour5.jpg'),
          title: "无忧快乐团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour6.jpg'),
          title: "天天向上团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour7.png'),
          title: "诚信友善团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour1.jpg'),
          title: "天天乐团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour2.jpg'),
          title: "富国团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour3.jpg'),
          title: "尚高团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        },
        {
          img: require('../../../assets/images/TourImg/tour4.jpg'),
          title: "幸福小家团队",
          msg: "我们团队不忘初心，站在各自岗位，做好每件事情，让大家放心！！"
        }
      ],
      srcList: [
        require('../../../assets/images/TourImg/tour8.png'),
        require('../../../assets/images/TourImg/tour9.jpg'),
        require('../../../assets/images/TourImg/tour10.jpg'),
        require('../../../assets/images/TourImg/tour11.jpg')
      ]
    }
  },
  methods: {}
}
</script>
<style  scoped>
  .tour {
    background-color: white;
    margin: 5px;
    height: 9999px;
  }
  .tou {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .tour .tl {
    width: 300px;
    height: 400px;
    border: 1px solid #cccccc;
    padding: 2px;
    margin: 20px;
    border-radius: 5px;
  }
  .tour .tl:hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px #cccccc;
  }
  .tour .tl p:hover, span:hover , a:hover {
    color: red;
  }
  .tl p {
    color: darkorange;
    font-weight: 700;
    font-size: 18px;
  }
  .tl span {
    display: block;
    margin: 10px 0;
  }
  .tl a {
    float: right;
    padding-right: 5px;
    color: blue;
  }
</style>
