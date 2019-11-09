<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.tabBar {
  display: flex;
  justify-content: space-around;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba($color: #666, $alpha: 0.2);
}
</style>