<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="tabBar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style lang='scss' scoped>
@import "./assets/css/base.css";
.tabBar{
  z-index: 999;
}
</style>