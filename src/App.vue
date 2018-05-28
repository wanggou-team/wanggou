<template>
  <div id="app" :class="{'showTabBar': $route.name === 'Index'}">
    <router-view/>
    <Footer v-if="$route.name === 'Home' || $route.name === 'Index'"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import axios from '@/plugin/axios'
import util from '@/plugin'

export default {
  name: 'App',
  created(){
    // this.getBankList()
  },

  methods: {
    async getBankList(){
      const data = await axios.get('/front/loanOrder/bankList.htm')
      this.$store.commit('SET_USER', data.user)
      this.$store.commit('SET_BANKLIST', data.data)
    }
  },
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  &.showTabBar{
    padding-bottom: 51px;
  }
}
body {
  max-width: 750px;
  background-color: #f5f5f5;
  overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6,figure,figcaption,p {
  margin: 0;
  padding: 0;
}

li{
  list-style: none;
}

input{
  color: inherit;
}
.van-tabbar-item--active{
  color: #ef4f51;
}
.submit{
  margin-top: .986667rem;
  height: 1.173333rem;
  line-height: 1.173333rem;
  background-color: #ef4f51;
  border-radius: 6px;

  &[disabled]{
    background-color: #eee;
  }
}

.sendCode{
  color: #ef4f51;
  padding-left: .333333rem;
  background: transparent;
  border: none;
  border-left: 1px solid #c1c1c1;
  &[disabled]{
    color: #ffb53c;
  }
}

/* 各种协议 */
#agreement{
  color: #7180e5;
}

.agreement-box{
  padding-top: .32rem;
  padding-bottom: 1.333333rem;
  // .van-checkbox__icon{
  //   width: .4rem;
  //   height: .4rem;
  // }

  .van-checkbox--checked{
    border-color: #ef4f51;
    background-color: #ef4f51;
  }
}
</style>
