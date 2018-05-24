<template>
  <div class="bindCard">
    <div class="cardBox">
      <!-- <div class="card">

      </div> -->

      <p class="noBind">未绑定银行卡</p>
    </div>
    <router-link class="bind" to="bindCard">去绑定</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.bindCard{
  padding: .4rem .333333rem;
  text-align: center;
  
  .cardBox{
    border: .066667rem dashed #ddd;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    height: 2.666667rem;
    margin-bottom: .266667rem;
    display: flex;
    align-items: center;
    align-content: center;
  }

  .card{
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    background-color: #ef4f51;
    height: 100%;
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

