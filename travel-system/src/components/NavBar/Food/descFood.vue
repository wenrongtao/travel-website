<template>
  <div>
    <div class="cate">
        <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入商品名"
          prefix-icon="el-icon-search"
          :trigger-on-focus="false"
          @select="handleSelect"
        >
        </el-autocomplete>
        <el-button type="primary" icon="el-icon-search" @click="querySearch">搜索</el-button>
        <div class="list">
          <div class="list1" v-for="(item, index) in list" :key="index" @click="clickfood()">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
          </div>
        </div>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: '',
  data () {
    return {
      restaurants: [],
      state2: '',
      list: [
        {
          img: require('../../../assets/images/FoodImg/cate.png'),
          title: "蛋糕"
        },
        {
          img: require('../../../assets/images/FoodImg/delicious.png'),
          title: "美食"
        },
        {
          img: require('../../../assets/images/FoodImg/drink.png'),
          title: "饮品"
        },
        {
          img: require('../../../assets/images/FoodImg/flower.png'),
          title: "鲜花"
        },
        {
          img: require('../../../assets/images/FoodImg/grill.png'),
          title: "烧烤"
        },
        {
          img: require('../../../assets/images/FoodImg/snacks.png'),
          title: "零食"
        },
        {
          img: require('../../../assets/images/FoodImg/tea.png'),
          title: "午茶"
        },
        {
          img: require('../../../assets/images/FoodImg/vegetables.png'),
          title: "蔬菜"
        }
      ],
      showMain: true
    }
  },
  methods: {
     querySearch() {
       if (this.state2 !== '') {
         this.$router.push('/foodSearch')
       }
      },
      clickfood() {
        this.$router.push('/food')
      }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}
</script>
<style  scoped>
    .cate {
      background-color: #fff;
    }
    .inline-input {
      width: 30%;
      margin: 5px 2px 0 5px;
    }
    .list {
      margin: 20px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .list img {
      width: 50px;
      border-radius: 50%;
      border: 1px solid #E6E6FA;
      padding: 5px;
    }
    .list p {
      text-align: center;
    }
    .list1:hover img {
      transform: scale(1.1);
    }
    .list1:hover img, .list1:hover p {
      cursor: pointer;
      color: darkorange;
      font-weight: 700;
    }
    
</style>
