<template>
  <div class="about">
    <figure class="logo">
      <img src="../assets/logo2.png" alt="">
      <figcaption class="desc">旺购 V 4.5.1 <br/>金华晨皓信息技术有限公司</figcaption>
    </figure>

    <div class="contact">
      <a href="" class="phone">电话客服</a>
      <a href="" class="online">在线客服</a>
    </div>

    <p class="company">金华晨皓信息技术有限公司</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    created () {

    },
    mounted () {
    },

    methods: {},
  }
</script>

<style lang="scss" scoped>
  .about{
    background-color: #f5f5f5;
    text-align: center;
    color: #c8c8cb;
    min-height: 100vh;
    padding-top: 1.55rem;
    font-size: .373333rem;
    box-sizing: border-box;
    .company{
      position: absolute;
      left: 0;
      bottom: 1rem;
      width: 100%;
      text-align: center;
    }
  }
  .logo {
    img{
      width: 2.32rem;
      height:2.32rem;
      padding-bottom: .2rem;
    }
    .desc{
      line-height: .61rem;
    }
  }
  .contact{
    padding-top: 1.87rem;
    a{
      width: 6.27rem;
      padding: .24rem 0;
      margin-bottom: .24rem;
      display: inline-block;
      border: 1px solid #c1c1c1;
      border-radius: .13rem;
      color: #1a181a;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
      background-color: #fbf9fb;

      &::before{
        content: "";
        display: inline-block;
        width: .6rem;
        height: .6rem;
        /* background-color: red; */
        vertical-align: middle;
        margin-right: .266667rem;
      }
    }

    .phone:before{
      background: url('../assets/icon-mobile.png') no-repeat;
      background-size: contain;
    }
    .online:before{
      background: url('../assets/icon-headSet.png') no-repeat;
      background-size: contain;
    }
  }
</style>
