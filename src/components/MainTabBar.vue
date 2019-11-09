<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <div class="iconfont icon-1"></div>
        <div class="describe">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <div class="iconfont icon-leimupinleifenleileibie2"></div>
        <div class="describe">类别</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <div class="iconfont icon-ai-cart"></div>
        <div class="describe">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div class="iconfont icon-wode"></div>
        <div class="describe">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang='scss' scoped>
</style>