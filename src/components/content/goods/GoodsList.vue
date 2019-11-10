<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.iid" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: ["goods"],
  components: { GoodsListItem }
};
</script>

<style lang='scss' scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>