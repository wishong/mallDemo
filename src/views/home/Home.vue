<template>
  <div class="home">
    <!-- 导航 -->
    <nav-bar class="homeNav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :swiperBanners="banners" />
    <!-- 推荐 -->
    <home-recommend :SwiperRecommend="recomends" />
    <!-- 本周流行 -->
    <home-popular />
    <!-- 三栏导航 -->
    <tab-control :title="['流行','新款','精选']" @getIndex="getIndex" />
    <!-- 列表 -->
    <div class="goodsList">
      <goods-list :goods="showType" class="goodsList" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import HomeSwiper from "./childCmps/HomeSwiper";
import HomeRecommend from "./childCmps/HomeRecommend";
import HomePopular from "./childCmps/HomePopular";

import { getHomeData, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  created() {
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
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
      goodsType: "pop"
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
    GoodsList
  }
};
</script>

<style lang='scss' scoped>
.home {
  padding-top: 44px;
  .homeNav {
    background-color: var(--color-tint);
    color: #eee;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .goodsList {
    padding-bottom: 26px;
  }
}
</style>
