<template>
  <div>
    <!-- 导航 -->
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="@/assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,i) in titles"
          :key="item"
          :class="{actived: i=== index}"
          @click="active(i)"
        >{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import { getDetail } from "@/network/detail";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      index: 0
    };
  },
  methods: {
    active(i) {
      this.index = i;
    },
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang='scss' scoped>
.back {
  img {
    margin-top: 13px;
    width: 20px;
  }
}
.title {
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  .actived {
    color: var(--color-tint);
  }
}
</style>