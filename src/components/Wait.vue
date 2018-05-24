<template>
 <div class="defaultBg">
   <img class="defaultImg" src="../assets/wait.png" alt="">
   <div class="info">等待放款中，请稍后</div>
   <div class="smallInfo">此过程可能需要20分钟</div>

   <div class="footInfo">
       如有疑问，请联系客服
       <a class="phone" href="tel:400-0000-000">400-0000-000</a>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   created() {},
   mounted() {},
   components: {

   }
 }
</script>

<style scoped>
.defaultBg{
  width:100%;
  height:100vh;
  background: #f5f5f5;
  text-align: center;
}
 .defaultImg{
   width:3.91rem;
   height:3.65rem;
   padding-top:4rem;
 }
 .info{
   color:#666;
   font-size: .4rem;
   padding-top:.43rem;
 }
 .smallInfo{
     padding-top:.43rem;
     font-size: .32rem;
     color:#999;
 }
 .footInfo{
     position: absolute;
     bottom:.8rem;
     left:0;
     right:0;
     margin:auto;
     font-size: .29rem;
     color:#ccc;
 }
 .phone{
     color:#ef4f51;
 }
</style>
