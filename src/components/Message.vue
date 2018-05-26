<template>
  <div id="message">
    <div class="messageBox"> 
      <img class="message" width="100%" src="../assets/noMessage.png" alt="">
      <p>暂无消息</p>
    </div> 
  </div>
</template>

<script>

export default {
  data(){
    return {}
  }
}
</script>
<style lang="scss" scoped>
  #message{
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .messageBox{
    width: 3.893333rem;
    font-size: .4rem;
    color: #666;
    text-align: center;
  }
  </style>

