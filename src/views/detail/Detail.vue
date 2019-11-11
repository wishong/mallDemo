<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :images="swiperImgs"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childCmps/DetailNavBar";
import DetailSwiper from "./childCmps/DetailSwiper";

import { getDetail } from "@/network/detail";

export default {
  name: "Detail",
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.swiperImgs = res.result.itemInfo.topImages;
    });
  },
  data() {
    return {
      iid: "",
      swiperImgs: []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
  }
};
</script>

<style lang='scss' scoped>
</style>