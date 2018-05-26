<template>
  <div id="home">
    <header class="header">
      <div class="top" v-if="user.userNm">
        <p class="phone">{{user.userNm}}</p>
      </div>

      <div class="top" v-if="!user.userNm">
        <p class="name">未登录</p>
      </div>
      
      <div class="avatar">
        <img src="../assets/photo.png" alt="用户头像">
      </div>
    </header>

    <van-cell-group class="item">
      <van-cell title="个人信息" icon="location" to="/user" is-link>
        <template slot="icon">
          <img src="../assets/icon-name.png" alt="">
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="item">
      <van-cell title="历史订单" icon="location" to="/history" is-link>
        <template slot="icon">
          <img src="../assets/my02.png" alt="">
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="item">
      <van-cell title="花券传送门" icon="location" is-link>
        <template slot="icon">
          <img src="../assets/my03.png" alt="">
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="item">
      <van-cell title="消息记录" icon="location" to="/message" is-link>
        <template slot="icon">
          <img src="../assets/my04.png" alt="">
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
import axios from '@/plugin/axios'
import {mapState, mapActions} from 'vuex'

export default {
  data(){
    return {}
  },
  created(){
    this.getUser()
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['getUser'])
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
}
</script>
<style lang="scss" scoped>

.header{
  background: #ef4f51;
  height: 3.733333rem;
  position: relative;
  padding-bottom: .533333rem;
  background-clip: content-box;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 1.333333rem;
  color: #fff;
  font-size: .373333rem;
  line-height: .613333rem;
  
  .top{
    padding-top: .4rem;
  }

  .name{
    font-size: .4rem;
    font-weight: 700;
  }

  &::after{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    content: "";
    height: .533333rem;
    display: block;
    background: transparent url('../assets/my-bg.png') center no-repeat;
    background-size: 100%;
  }
}

.avatar{
  display: inline-block;
  height: 2.133333rem;
  width: 2.133333rem;
  border-radius: 100%;
  background: #ccc;
  border: .133333rem solid #fff;
  margin-top: .933333rem;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  position: relative;
  z-index: 3;

  img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
.item{
  margin-bottom: .16rem;

  img{
    width: .48rem;
    height: .48rem;
    margin-right: .266667rem;
  }
}
</style>

