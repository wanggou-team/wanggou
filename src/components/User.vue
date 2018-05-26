<template>
  <div id="user">
    <div class="userBox">
      <van-cell-group class="item">
        <van-cell title="手机号码" :value="user.mobile" />
      </van-cell-group>

      <div class="item cardBox">
        <header class="bindCardHeader">
          <h3 class="title">绑定银行卡</h3>
        </header>
        <div class="card">
          <Card :banks="user.banks"/>
        </div>
      </div>

      <van-cell-group class="item">
        <van-cell title="关于我们" is-link to="/about"/>
      </van-cell-group>
    </div>
    
    <div id="logout">
      <van-button class="submit" @click="logout" type="primary" bottom-action>退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Button } from 'vant';
import Card from '@/components/Card';
import axios from '@/plugin/axios';
import Util from '@/plugin'

export default {
  data(){
    return {
      user: {}
    }
  },
  created(){
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    async getUserInfo(){
      const {data = {}} = await axios.get('/apis/front/loanOrder/info.htm')
      this.user = data
    },
    // 退出登录
    async logout(){
      const data = await axios.post('/apis/front/logout.htm');
      debugger
      if(data.bizCode === 1){
        Util.delCookie('loginToken')
        window.location = '/login'
      }
      console.log(data)
    }
  },
  components: {
    Card,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
}
</script>
<style lang="scss" scoped>
#user{
  padding-top: .266667rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.cardBox{
  background-color: #fff;
}
.card{
  padding: 0 .266667rem;
}
.bindCardHeader{
  padding: .266667rem;
  .title{
    font-weight: normal;
    font-size: .4rem;
    color: #1a181a;
    border-left: .133333rem solid #ff818a;
    padding-left: .24rem;
  }
}

#logout{
  padding: 1.706667rem .56rem 0;
  flex: 1;
  background-color: #fff;
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
  // border-bottom: .013333rem solid #adadad;
}
</style>

