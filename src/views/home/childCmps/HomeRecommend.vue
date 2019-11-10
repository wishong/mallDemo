<template>
  <div class="recommends">
    <div v-for="item in SwiperRecommend" :key="item.acm" class="recItem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: ["SwiperRecommend"]
};
</script>

<style lang='scss' scoped>
.recommends {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 7px solid #eee;
  .recItem {
    flex: 1;
    font-size: 14px;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 5px;
    }
  }
}
</style>