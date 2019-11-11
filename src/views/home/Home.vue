<template>
  <div class="home">
    <!-- 导航 -->
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="['流行','新款','精选']"
      @getIndex="getIndex"
      ref="tabControl1"
      class="tabControl"
      v-show="isTabShow"
    />
    <!-- better-scroll -->
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollPosition="scrollPosition"
      :pullUpLoad="true"
      @pullingUp="loadMoer"
    >
      <!-- 轮播图 -->
      <home-swiper :swiperBanners="banners" />
      <!-- 推荐 -->
      <home-recommend :SwiperRecommend="recomends" />
      <!-- 本周流行 -->
      <home-popular />
      <!-- 三栏导航 -->
      <tab-control :title="['流行','新款','精选']" @getIndex="getIndex" ref="tabControl2" />
      <!-- 列表 -->
      <div class="goodsList">
        <goods-list :goods="showType" class="goodsList" />
      </div>
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="flag" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import HomeSwiper from "./childCmps/HomeSwiper";
import HomeRecommend from "./childCmps/HomeRecommend";
import HomePopular from "./childCmps/HomePopular";

import { debounce } from "../../common/utils";

import { getHomeData, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  created() {
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  updated() {
    // 获取 tabControl2的 offsetTop
    this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  data() {
    return {
      banners: [],
      recomends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsType: "pop",
      flag: false,
      tabOffsetTop: 0,
      isTabShow: false
    };
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recomends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      });
    },
    getIndex(i) {
      switch (i) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
        default:
          break;
      }
      this.$refs.tabControl1.flag = i;
      this.$refs.tabControl2.flag = i;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 800);
    },
    scrollPosition(position) {
      this.flag = Math.abs(position.y) > 1200 ? true : false;
      this.isTabShow = this.tabOffsetTop < Math.abs(position.y) ? true : false;
    },
    loadMoer() {
      this.getHomeGoods(this.goodsType);
      this.$refs.scroll.finishPullUp();
    }
  },
  computed: {
    showType() {
      return this.goods[this.goodsType].list;
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
};
</script>

<style lang='scss' scoped>
.home {
  height: 100vh;
  position: relative;
  .homeNav {
    background-color: var(--color-tint);
    color: #eee;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .tabControl {
    position: relative;
    z-index: 999;
  }
}
</style>
