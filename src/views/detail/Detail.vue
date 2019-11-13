<template>
  <div class="detail">
    <detail-nav-bar class="navBar" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scrollPosition="contentScroll" :probeType="3">
      <detail-swiper :images="swiperImgs"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childCmps/DetailNavBar";
import DetailSwiper from "./childCmps/DetailSwiper";
import DetailBaseInfo from "./childCmps/DetailBaseInfo";
import DetailShopInfo from "./childCmps/DetailShopInfo";
import DetailGoodsInfo from "./childCmps/DetailGoodsInfo";
import DetailParamInfo from "./childCmps/DetailParamInfo";
import DetailCommentInfo from "./childCmps/DetailCommentInfo";
import GoodsList from "../../components/content/goods/GoodsList";
import DetailBottomBar from "./childCmps/DetailBottomBar";

import Scroll from "../../components/common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodsParam
} from "@/network/detail";

export default {
  name: "Detail",
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.goods = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      this.shop = new Shop(res.result.shopInfo);

      this.swiperImgs = res.result.itemInfo.topImages;

      this.detailInfo = res.result.detailInfo;

      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
  },
  updated() {
    this.titleClick(0);
  },
  data() {
    return {
      iid: "",
      swiperImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0
    };
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    titleClick(i) {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[i], 300);
    },
    contentScroll(position) {
      let positionY = Math.abs(position.y);
    },
    addToCart() {
      const product = {};
      product.image = this.swiperImgs[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.commit("addCart", product);
    }
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  }
};
</script>

<style lang='scss' scoped>
.detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  padding-bottom: 49px;
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
}
</style>