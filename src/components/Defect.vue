<template>
 <div class="defaultBg">
   <img class="defaultImg" src="../assets/defect.png" alt="">
   <div class="info">页面走丢了...</div>
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
 }
</style>
