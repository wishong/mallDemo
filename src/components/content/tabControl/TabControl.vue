<template>
  <div class="tabControl">
    <div
      v-for="(item,index) in title"
      :key="item"
      :class="{tabControlItem:true,actived:flag === index}"
      @click="actived(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      flag: 0
    };
  },
  props: ["title"],
  methods: {
    actived(i) {
      this.flag = i;
        this.$emit("getIndex", i);
    }
  }
};
</script>

<style lang='scss' scoped>
.tabControl {
  display: flex;
  text-align: center;
  .tabControlItem {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .actived {
    color: var(--color-tint);
    span {
      padding: 5px;
      border-bottom: 2px solid var(--color-tint);
    }
  }
}
</style>