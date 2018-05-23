<template>
  <van-tabbar class="tabbar" v-model="active">
    <van-tabbar-item icon="shop">首页</van-tabbar-item>
    <van-tabbar-item icon="chat" dot>我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style lang="scss" scoped>
  .tabbar{
    border-top: 1px solid #040000;
  }
</style>


