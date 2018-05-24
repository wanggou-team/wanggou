<template>
  <van-tabbar class="tabbar" v-model="active">
    <van-tabbar-item @click="$router.push('/')" icon="shop">首页</van-tabbar-item>
    <van-tabbar-item @click="$router.push('/home')" icon="chat" dot>我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  data () {
    return {
      active: 0
    }
  },
  created(){
    this.selectTabBar()
  },
  'watch': {
    '$route'(){
      console.log(this.$route)
      this.selectTabBar()
    }
  },

  methods: {
    selectTabBar(){
      switch(this.$route.name) {
        case 'Home':
          this.active = 1;
        break;

        case 'Index': 
          this.active = 0;
        break;
      }
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style lang="scss" scoped>
  .tabbar{
    border-top: 1px solid #adadad;
  }
</style>


