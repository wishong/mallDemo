<template>
  <div class="goodsListItem">
    <img :src="goodsItem.show.img" @load="imageLoad" @click="itemClick" />
    <div class="goodsInfo">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: ["goodsItem"],
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style lang='scss' scoped>
.goodsListItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  margin: 2px 0;
  img {
    width: 100%;
    border-radius: 8px;
    min-height: 100%;
  }
  .goodsInfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 45px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>