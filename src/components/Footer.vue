<template>
  <van-tabbar class="tabbar" v-model="active">
    <van-tabbar-item @click="$router.push('/')" icon="shop">
      <span>首页</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? index.active : index.normal" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item @click="$router.push('/home')" icon="chat">
      <span>我的</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? home.active : home.normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
import HomeActive from '@/assets/home-active.png'
import HomeDefault from '@/assets/home-default.png'
import UserActive from '@/assets/user-active.png'
import UserDefault from '@/assets/user-default.png'
export default {
  data () {
    return {
      active: 0,
      index: {
        active: HomeActive,
        normal: HomeDefault
      },
      home: {
        active: UserActive,
        normal: UserDefault
      }
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
    border-top: .013333rem solid #adadad;
  }
</style>


