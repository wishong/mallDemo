<template>
  <div class="backTop">
    <img src="@/assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style lang='scss' scoped>
.backTop {
  position: fixed;
  right: 8px;
  bottom: 50px;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>