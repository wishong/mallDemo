<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="item in images" :key="item">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  name: "detailSwiper",
  props: ["images"],
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style lang='scss' scoped>
.detailSwiper {
  height: 300px;
  overflow: hidden;
}
</style>