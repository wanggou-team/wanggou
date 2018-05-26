<template>
  <div id="home">
    <header class="header">
      <h2>回购首页</h2>

      <figure class="card">
        <router-link to='recovery'>
          <img src="../assets/home03.png" alt="花券礼品卡">
        </router-link>  
        <figcaption class="title">花券礼品卡</figcaption>  
      </figure>

      <div class="marqueeWrap">
        <img class="marImg" src="../assets/home04.png" alt="通知">
        <van-notice-bar
          class="notice"
          text="暂无消息" />
      </div>
    </header>

    <!-- 回购教程 -->

    <div class="buy-back-Wrap">
      <h2 class="backTitle">回购教程</h2>
      <ul>
        <li class="buy_list" data-foo="1">登录花木范商城进行花券获取，<router-link class='goBuy' to='/login'>点击申请</router-link></li>
        <li class="buy_list" data-foo="2">认证审核通过后，获取花券序列号，点击激活</li>
        <li class="buy_list" data-foo="3">激活后回到该界面点击上方窗口，输入序列号</li>
        <li class="buy_list" data-foo="4">资金到账，等待十天后商城付款</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { NoticeBar } from 'vant';
import axios from '@/plugin/axios'
import util from '@/plugin/'

export default {
  data () {
      return {
        link:''
      }
  },
  created () {
    this.link = util.startApp()
    console.log(this.link)
  },
  mounted () {
  },
  methods: {
  },
  components: {
    [NoticeBar.name]: NoticeBar
  }
}
</script>

<style lang="scss" scoped>
  .home{
    background: #eee;
    padding-bottom: 51px;
  }

  .header{
    padding: .466667rem 0 0;
    background: #fff url('../assets/home02.png') no-repeat;
    background-size: contain;
    h2{
      margin-left: .48rem;
      padding-left: 1.013333rem;
      font-size: .48rem;
      color: #fff;
      position: relative;

      &::before{
        background: url('../assets/home01.png') no-repeat;
        background-size: 100%;
        content: "";
        width: .64rem;
        height: .64rem;
        position: absolute;
        top: 0;
        left: .186667rem;
      }
    }

    .card{
      position: relative;
      text-align: center;
      height: 5.76rem;
      img{
        width: 9.76rem;
        height: 100%;
      }

      .title{
        text-align: left;
        left: .906667rem;
        top: .733333rem;
        color: #fff;
        position: absolute;
        font-size: .373333rem;
      }
    }
  }

  .marqueeWrap{
    display: flex;
    align-items: center;
    padding: .56rem .453333rem;
    .notice{
      background-color: transparent;
      flex: 1;
      text-align: center;
      font-size: .346667rem;
      color: #666;
      padding: 0 .2rem;
    }

    .marImg{
      width:2rem;
      height:.77rem;
    }
  }



.buy-back-Wrap{
  margin-top: .266667rem;
  padding-left:.63rem;
  background-color: #fff;

}
.backTitle{
  font-size: .4rem;
  font-weight: bold;
  color:#ff5a57;
  padding:.53rem 0 .213333rem;
}
.buy_list{
  display: flex;
  position:relative;
  // border-bottom:1px solid #ef4f51;
  height: 1.44rem;
  align-items: center;
  font-size: .346667rem;
  color: #666;

  &::before{
    content: attr(data-foo) " ";
    color: #fff;
    background: url('../assets/home05.png') no-repeat center;
    width:.773333rem;
    height: .666667rem;
    background-size: 100%;
    display: inline-block;
    text-align:center;
    line-height:.67rem;
    margin-right: .266667rem;
  }
  &:not(:last-child):after{
    content: "";
    width: calc(100% - 1.026667rem);
    height: 1px;
    background-color: #ef4f51;
    position: absolute;
    bottom: 0;
    left: 1.026667rem;
  }
}

.goBuy{
  color:#ff5a57;
  text-decoration: underline;
}
</style>