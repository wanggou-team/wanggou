<template>
  <div class="bindCard">
    <div class="cardBox">
      <div class="card" v-if="banks.length > 0">
        <header class="header">
          <figure class="bankLogo">
            <img :src="`http://test.mall.51veryrich.com${banks[0].logo}`" alt="">
            <figcaption>{{banks[0].bankName}}</figcaption>
          </figure>
          <p>手机尾号（{{banks[0].bankMobile}}）</p>
        </header>
        <p class="cardCode">****  ****  ****  {{banks[0].bankAcc}}</p>
      </div>

      <p class="noBind" v-if="banks.length < 1">未绑定银行卡</p>
    </div>
    <router-link v-if="banks.length < 1" class="bind" to="bindCard">去绑定</router-link>
    <p v-else>已绑定</p>
  </div>
</template>

<script>
export default {
  props: {
    banks: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bindCard{
  padding: .4rem .333333rem;
  text-align: center;
  
  .cardBox{
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    height: 2.666667rem;
    margin-bottom: .266667rem;
    display: flex;
    align-items: center;
    background-color: #eee;
    align-content: center;
  }

  .card{
    flex: 1;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    
    height: 100%;
    padding: 20px;
    color: #666;
    box-sizing: border-box;
    font-size: .32rem;

    .header{
      display: flex;
      align-items: center;
    }
    .bankLogo{
      display: flex;
      flex: 1;
      align-items: center;
      color: #333;
      img{
        margin-right: .266667rem;
        width: .8rem;
        height: .8rem;
        border-radius: 100%;
      }
    }

    .cardCode{
      padding-top: .2rem;
      font-size: .4rem;
    }
  }

  .bind{
    color: #ef4f51;
    font-size: .32rem;
  }

  &::after{
    display: none;
  }

  .noBind{
    flex: 1;
    font-size: .32rem;
    color: #aaa;
  }
}
</style>

