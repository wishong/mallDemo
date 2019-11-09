<template>
  <div class="tabBarItem">
    <div :class="{red:actived}" @click="link">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: String // 接收传过来的路径
  },
  methods: {
    link() {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path); // replace方式进行网页跳转
      }
    }
  },
  computed: {
    actived() {
      return this.$route.path === this.path;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/css/iconfont/iconfont.css";
.tabBarItem {
  box-sizing: border-box;
  height: 49px;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .iconfont {
    font-size: 22px;
    line-height: 22px;
    margin: 3px 0;
  }
  .describe {
    font-size: 15px;
    line-height: 15px;
    text-align: center;
  }
  .red {
    color: #218bb4;
  }
}
</style>