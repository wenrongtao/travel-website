<template>
  <div id="snote">
    <!-- 背景图 -->
    <div class="bigImg"><img :src="mainImg" alt=""></div>
    <!-- 标签页 -->
    <el-tabs type="border-card">
      <el-tab-pane label="游记列表">
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><el-badge :value="16" class="item">
                  <i class="el-icon-star-off" :style="{color: love}"></i>点赞数
                </el-badge></span>
              <span class="spanchan" @click="dialogVisible = true"><i class="el-icon-chat-dot-round"></i>评论</span>
              <el-dialog
                title="回复Ta的评论"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="reply()">回复</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </div>
        <div class="left">
          <img src="../../../assets/images/TourImg/strImg2.jpg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img src="../../../assets/images/TourImg/strImg1.png" class="avimg">
          <div class="right">
            <h2>上海-迪士尼</h2>
            <p class="pnotes">上海迪士尼乐园，是中国内地首座迪士尼主题乐园，位于上海市浦东新区川沙新镇，于2016年6月16日正式开园。它是中国大陆第一个、亚洲第三个，世界第六个迪士尼主题公园。
乐园拥有七大主题园区：米奇大街、奇想花园、探险岛、宝藏湾、明日世界、梦幻世界、玩具总动园；两座主题酒店：上海迪士尼乐园酒店、玩具总动员酒店；一座地铁站：迪士尼站；并有许多全球首发游乐项目。。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>杭州西湖</h2>
            <p class="pnotes">杭州西湖风景名胜区，位于浙江省杭州市中心，分为湖滨区、
              湖心区、北山区、南山区和钱塘区；秀丽的湖光山色和众多的名胜古迹闻名中外，
              是中国著名的旅游胜地，也被誉为人间天堂。景区内群山高度都不超过400米，
              环布在西湖的南、西、北三面，其中的吴山和宝石山象两只手臂，一南一北，
              伸向市区，构成优美的杭城空间轮廓线。景区总面积达49平方公里，其中湖面
              6.5平方公里，以湖为主体，旧称武林水、钱塘湖、西子湖，宋代始称西湖。
              由大量乔灌木组成疏落有致、大小不同的空间；以植物造景为主，
              辅以亭、台、楼、阁、廊、榭、桥、汀。西湖傍杭州而盛，杭州因西湖而名。
              “天下西湖三十六，就中最美是杭州”。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="推荐游记">
        <img :src="mainImg">
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="热门游记">
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>四川成都</h2>
            <p class="pnotes">成都市中心城区，是指成都市城市建成区（“11+2”），
              包含11个市辖区（行政区）和2个经济功能区。即锦江区、青羊区、
              金牛区、武侯区、成华区、新都区、郫都区、温江区、双流区、龙泉驿区、
              青白江区、11个行政区和成都高新区、天府新区成都直管区2个功能区。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="最新游记">
        <img :src="mainImg" alt="" srcset="">
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>多彩贵州</h2>
            <p class="pnotes">我刚从贵州旅游回来，那边景色天气都很好，非常舒适。
              现在是看百里杜鹃和樱花的最佳时间，现在国家对于旅游行业的鼓励和扶持力度空前，
              贵州许多景点门票、酒店等都有优惠政策，贵州整体的旅游消费水平相对于其他热门旅游
              省份要低一些，性价比更高！下面是我总结的一些去贵州游玩核心要点，涵盖了交通、
              景点、路线、时间、费用5大方面，大概2分钟左右能看完，供你们参考。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>西安-大唐不夜城</h2>
            <p class="pnotes">大唐不夜城位于陕西省西安市雁塔区的大雁塔脚下，
              北起大雁塔南广场，南至唐城墙遗址，东起慈恩东路，西至慈恩西路，
              街区南北长2100米，东西宽500米，总建筑面积65万平方米 大唐不夜城以
              盛唐文化为背景，以唐风元素为主线，建有大雁塔北广场、玄奘广场、
              贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、
              曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、
              武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
        <div class="left">
          <img :src="avimg" class="avimg">
          <div class="right">
            <h2>美丽丽江</h2>
            <p class="pnotes">丽江是一个多民族聚居的地方，除汉族外，共有12个世居少数民族，
              22种少数民族；丽江是著名的旅游城市，拥有世界文化遗产丽江古城、
              世界自然遗产三江并流、世界记忆遗产纳西族东巴古籍文献三大世界遗产。
              旅游资源丰富，有旅游风景点104处，有丽江古城、玉龙雪山、虎跳峡、老君山、
              束河古镇、阿纳果等知名旅游景点。先后被评为中国旅游竞争力百强城市
              、中国十大休闲城市、中国优秀旅游城市、中国十大魅力城市、云南省人才特区、
              长江经济带上的绿色明珠等荣誉称号。
            </p>
            <div class="footer">
              <span class="spanchan"><img :src="avatarimg" class="avatarimg">Jack</span>
              <span><i class="el-icon-view"></i>浏览量</span>
              <span><i class="el-icon-star-off"></i>点赞数</span>
              <span class="spanchan"><i class="el-icon-chat-dot-round"></i>评论</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 旅游专栏 -->
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>乌古孙仲端</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="徐霞客-地理学家、旅行家和探险家" :visible.sync="dialogTableVisible">
          <p>公元1220年，金兵抵挡不住蒙古军的进攻，因此，乌古孙仲端奉金宣宗之命出使成吉思汗的驻地（今阿富汗）。一年半以后返回。1221年10月，他再次出使成吉思汗的驻地。第二年秋天，在中亚与成吉思汗相见，乞和仍未成。西行归来后，他让当时一个叫刘祁的人将其西行历程整理成《北使记》，并收入他后来著述的文集《归潜记》中。
          </p>
          <ul>
            <li>国籍：美国（美籍华人）</li>
            <li>民族：汉族</li>
            <li>职业：截拳道宗师，武学家，演员，导演，编剧</li>
            <li>身高：173cm</li>
            <li>星座：射手座</li>
            <li>血型：O</li>
            <li>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</li>
            <li>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <!-- 专栏二 -->
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>徐霞客</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="徐霞客--明代地理学家、旅行家、文学家" :visible.sync="dialogTableVisible">
          <p class="desciption">徐霞客（1587年1月5日－1641年3月8日），名弘祖，字振之，号霞客，南直隶江阴县 [1]  （今江苏省江阴市）人，明代地理学家、旅行家和文学家，他经30年考察撰成了60万字地理名著《徐霞客游记》，被称为“千古奇人”。 [2-3] 
徐霞客一生志在四方，足迹遍及今21个省、市、自治区 [4]  ，“达人所之未达，探人所之未知”，所到之处，探幽寻秘，并记有游记，记录观察到的各种现象、人文、地理、动植物等状况。
《徐霞客游记》开篇之日（5月19日）被定为中国旅游日
          </p>
          <ul>
            <li>本名：徐弘祖</li>
            <li>出生地：南直隶江阴县（今江苏省江阴市）</li>
            <li>民族：汉族</li>
            <li>出生日期：1587年1月5日-1641年3月8日</li>
            <li>所处时代：明朝</li>
            <li>主要作品：《徐霞客游记》</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>马欢</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙--武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p class="desciption">马欢，字宗道，号会稽山樵，回族，浙江会稽（今绍兴）人，信奉回教。明代通事（翻译官）。
马欢精通波斯语、阿拉伯语，在郑和使团中，作为通事、教谕，一身兼两职，既为外事翻译，又负责传播中华文化。由于他“善通番语”被选入郑和船队，曾随郑和于1413年、1421年、1431年三次下西洋，亲身访问占城、爪哇、旧港、暹罗、古里、忽鲁谟斯、满剌加、亚鲁国、苏门答剌、锡兰、小葛兰、柯枝、古里、祖法儿等国， 并到麦加朝圣。
          </p>
          <ul>
            <li>国籍：美国（美籍华人）</li>
            <li>民族：汉族</li>
            <li>职业：截拳道宗师，武学家，演员，导演，编剧</li>
            <li>身高：173cm</li>
            <li>星座：射手座</li>
            <li>血型：O</li>
            <li>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</li>
            <li>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>郑和</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙--武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p class="desciption">郑和（1371年？ - 1433年？），回族，本姓马，为明成祖朱棣赐姓郑，世称“三保太监”（又作“三宝太监”），云南昆阳州（今云南省昆明市晋宁区昆阳街道）人。明朝太监，航海家、外交家。
郑和年轻时从侍燕王朱棣，有智略，知兵习战。后在靖难之役中有功，升任为内官监太监。1405年（永乐三年）至1424年（永乐二十二年），郑和六次作为正使太监下西洋。1425年（洪熙元年）后，郑和任南京守备太监，1430年（宣德五年）受命第七次下西洋，一说在途中于1433年（宣德八年）卒于古里国，今南京牛首山南麓郑和墓或为其衣冠冢。
          </p>
          <ul>
            <li>国籍：美国（美籍华人）</li>
            <li>民族：汉族</li>
            <li>职业：截拳道宗师，武学家，演员，导演，编剧</li>
            <li>身高：173cm</li>
            <li>星座：射手座</li>
            <li>血型：O</li>
            <li>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</li>
            <li>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>徐霞客</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙--武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p class="desciption">李小龙（1940年11月27日—1973年7月20日），原名李振藩，师承叶问，出生于美国加州旧金山，
            祖籍中国广东顺德均安镇。他是世界武道变革先驱者、武术技击家、武术哲学家、UFC开创者、
            MMA之父、武术宗师、功夫片的开创者和截拳道创始人、华人武打电影演员，
            中国功夫首位全球推广者、好莱坞华人演员。1962年李小龙开办“振藩国术馆”，
            1967年自创截拳道，1973年7月20日，李小龙在香港逝世，享年33岁。
            1979年美国洛杉矶市政府将补拍版《死亡游戏》的开映日6月8日定为“李小龙日”（7月8日为错误翻译）。
            1993年美国发行李小龙逝世20周年纪念钞票，好莱坞大道铺上李小龙纪念星徽；同年，
            获香港电影金像奖大会颁发“终身成就奖”。1998年11月，获中国武术协会颁发“武术电影巨星奖”。
            1973年7月20日突然在香港逝世，享年33岁。
          </p>
          <ul>
            <li>国籍：美国（美籍华人）</li>
            <li>民族：汉族</li>
            <li>职业：截拳道宗师，武学家，演员，导演，编剧</li>
            <li>身高：173cm</li>
            <li>星座：射手座</li>
            <li>血型：O</li>
            <li>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</li>
            <li>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>马可·波罗</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙--武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p class="desciption">马可·波罗（Marco Polo，1254年9月15日—1324年1月8日），
            出生于克罗地亚考尔楚拉岛，意大利旅行家、商人，著有《马可·波罗游记》。
            据称17岁时，马可·波罗跟随父亲和叔叔前往中国，历时约四年，于1275年到达元朝
            的首都，与元世祖忽必烈建立了友谊。他在中国游历了17年，曾访问当时中国的许多
            古城，到过西南部的云南和东南地区。回到威尼斯之后，马可·波罗在一次威尼斯和热
            那亚之间的海战中被俘，在监狱里口述旅行经历，由鲁斯蒂谦（Rustichello da Pisa）
            写出《马可·波罗游记》（Il Milione）。但其到底有没有来过中国却引发了争议。
          </p>
          <ul>
            <li>国籍：美国（美籍华人）</li>
            <li>民族：汉族</li>
            <li>职业：截拳道宗师，武学家，演员，导演，编剧</li>
            <li>身高：173cm</li>
            <li>星座：射手座</li>
            <li>血型：O</li>
            <li>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</li>
            <li>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <div class="specialCliumn">
      <p class="p1">著名旅行家----<span>玄奘</span></p>
      <div class="block">
        <el-carousel height="200px">
          <el-carousel-item v-for="(item,index) in swiImg" :key="index">
            <img :src="item" class="author">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <p class="p2">没有什么可以阻挡想去看望世界的心！！</p>
        <el-button type="text" @click="dialogTableVisible = true">查看TA的旅行故事></el-button>
        <el-dialog title="李小龙--武术宗师、演员、导演" :visible.sync="dialogTableVisible">
          <p class="desciption">玄奘（602年~664年），本名陈祎（yī），洛州缑氏（今河南洛阳偃师市）人￼，其先颍川人￼。唐代著名高僧，法相宗创始人，被尊称为“三藏法师”，后世俗称“唐僧”，与鸠摩罗什、真谛并称为中国佛教三大翻译家。
为探究佛教各派学说分歧，玄奘于贞观元年一人西行五万里，历经艰辛到达印度佛教中心那烂陀寺取真经，前后十七年，遍学了当时大小乘各种学说。公元645年玄奘归来一共带回佛舍利150粒、佛像7尊、经论657部，并长期从事翻译佛经的工作。
玄奘及其弟子翻译出典75部（1335卷），译典著作有《大般若经》《心经》《解深密经》《瑜伽师地论》《成唯识论》等。《大唐西域记》十二卷，记述他西游亲身经历的110个国家及传闻的28个国家的山川、地邑、物产、习俗等。《西游记》即以玄奘取经事迹为原型。
          </p>
          <ul>
            <li>国籍：美国（美籍华人）</li>
            <li>民族：汉族</li>
            <li>职业：截拳道宗师，武学家，演员，导演，编剧</li>
            <li>身高：173cm</li>
            <li>星座：射手座</li>
            <li>血型：O</li>
            <li>影视作品：《猛龙过江》、《龙争虎斗》、《精武门》</li>
            <li>影视成就：“台湾金马奖最佳技艺”、“香港电影金像奖终身成就奖”、“英国传媒协会传奇大奖”</li>
          </ul>
        </el-dialog>
      </div>
    </div>
    <!-- 分页 -->
    
  </div>
</template>
<script>


export default {
  name: '',
  data () {
    return {
      dialogVisible: false,
      mainImg: require('.././../../assets/images/mainImg.png'),
      avimg: require('../../../assets/images/travel4.jpg'),
      avatarimg: require('../../../assets/images/travel8.jpg'),
      dialogTableVisible: false,
      swiImg: [
        require('../../../assets/images/ListImg/jouney1.jpg'),
        require('../../../assets/images/ListImg/jouney2.jpg'),
        require('../../../assets/images/ListImg/jouney3.jpg'),
        require('../../../assets/images/ListImg/jouney4.jpg')
      ]
    }
  },
  methods: {
    reply() {
      this.dialogVisible = false;
      if (this.textarea.lenght != 0) {
        this.replyContent = this.textarea;
      }
    }
  }
}
</script>
<style  scoped>
  .bigImg img {
    width: 100%;
    height: 400px;
    margin-top: 10px;
  }
  .el-tabs,.specialCliumn {
    margin-top: 20px;
  }
  .el-tabs {
    float: left;
    width: 900px;
  }
  .left:hover {
    background-color: #F5F5DC;
  }
  .left {
    width: 100%;
    height: 180px;
    margin-top: 30px;
  }
  .left .avimg {
    float: left;
    width: 250px;
    height: 90%;
    padding: 0 20px;
    margin-top: 10px;
  }
  .right .pnotes {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 25px;
    text-indent: 2em;
    color: #8B7E66;
  }
  .right .footer {
    margin-top: 18px;
  }
  .footer span {
    color: red;
    padding: 20px;
  }
  .footer span i {
    padding: 5px;
  }
  .left .avimg, h2, .pnotes, .avatarimg, .spanchan {
    cursor: pointer;
  }
  h2:hover, .pnotes:hover, span:hover {
   color: DarkOrange;
  }
  .pnotes {
    height: 80px;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .footer .avatarimg {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .specialCliumn {
    float: right;
    width: 400px;
    border-bottom: 1px double #ccc;
    margin: 20px 0;
  }
  .specialCliumn .author {
    width: 100%;
    height: 100%;
  }
  .el-button {
    float: right;
  }
  .specialCliumn .p1 {
    border-bottom: 2px dotted #ccc;
    padding: 5px 0;
    margin: 15px 0;
  }
  .p2 {
    margin-top: 10px;
  }
  .p2:hover {
    color: DarkOrange;
    cursor: pointer;
  }
  .el-dialog .desciption {
    column-count: 3;
    column-rule: 2px dotted #cccc;
    column-gap: 30px;
  }
  .el-dialog ul {
    margin: 30px 0;
  } 
  .el-dialog ul li:hover {
    color:darkorange
  }
  .dialog-footer {
    margin-top: -25px;
  }
</style>




