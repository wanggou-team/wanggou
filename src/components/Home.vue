<template>
  <div>
    <header class="header">
      <div v-if="user.userNm">
        <p class="name">{{user.userNick}}</p>
        <p class="phone">{{user.userNm}}</p>
      </div>

      <div v-if="!user.userNm">
        <p class="name">未登录</p>
      </div>
      

      <div class="avatar">
        <img src="http://cdn.zhangxinxu.com/image/blog/zxx_90_0824.jpg" alt="">
      </div>
    </header>

    <van-cell-group class="item">
      <van-cell title="个人信息" icon="location" to="/user" is-link />
    </van-cell-group>

    <van-cell-group class="item">
      <van-cell title="历史订单" icon="location" to="/history" is-link />
    </van-cell-group>

    <van-cell-group class="item">
      <van-cell title="花券传送门" icon="location" is-link />
    </van-cell-group>

    <van-cell-group class="item">
      <van-cell title="消息记录" icon="location" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant';
import axios from '@/plugin/axios'
import {mapState} from 'vuex'

export default {
  data(){
    return {}
  },
  computed: {
    ...mapState(['user'])
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
  height: 3.826667rem;
  padding-top: .4rem;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 1.333333rem;
  color: #fff;
  font-size: .373333rem;
  line-height: .613333rem;
  // clip-path: ellipse(90% 70% at 0% 50%);
  // shape-outside: ellipse();
  // shape-margin: 2em;

  .name{
    font-size: .4rem;
    font-weight: 700;
  }
}

.avatar{
  display: inline-block;
  height: 2.133333rem;
  width: 2.133333rem;
  border-radius: 100%;
  background: #fff;
  border: .133333rem solid #fff;
  margin-top: .333333rem;
  box-shadow: 0 0 10px rgba(0,0,0,.1);

  img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
.item{
  margin-bottom: .16rem;
}
</style>

