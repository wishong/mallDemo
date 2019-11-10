<template>
  <div>
    <swiper>
      <swiper-item v-for="item in swiperBanners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: ["swiperBanners"]
};
</script>

<style lang='scss' scoped>
</style>