<template>
  <div id="history">
    <van-list 
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      @load="onLoad">
      <ul class="orders">
        <li v-for="i in list" :key="i.id" class="order">
          <time class="time">{{i.orderDt}}</time>

          <div class="card">
            <header class="header">
              <h3 class="title">订单编号</h3>
              <span class="code">{{i.orderNo}}</span>
            </header>

            <div class="main">
              <div class="price">
                <span class="price-text">{{i.cardAmount}}</span>元
              </div>

              <div class="desc">到账金额</div>
            </div>
          </div>
        </li>
      </ul>
    </van-list>

    <p class="noOrder">暂无历史订单</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import { List } from 'vant';
  import axios from '@/plugin/axios'
  export default {
    data () {
      return {
        page: 1,
        totalPage: 0,
        pageSize: 10,
        list: [],
        loading: false,
        finished: false
      };
    },
    created () {
      this.getOrder()
    },

    methods: {
      // 分页获取订单
      onLoad () {
        // 等于总页数 停止请求
        if(this.page === this.totalPage){
          this.finished = true
          return 
        }
        this.page++
        this.getOrder()
      },

      // 请求获取订单
      async getOrder () {
        const {bizCode, data: {dataList, totalPage}} = await axios.post('/apis/front/loanOrder/page.htm', {
          page: this.page,
          pageSize: this.pageSize
        })
        if(bizCode === 1){
          this.list = dataList
          this.totalPage = totalPage
        }
      }
    },
    components: {
      [List.name]: List
    }
  }
</script>

<style lang="scss" scoped>
  #history{
    padding-left: 1.09rem;
  }
  .orders{
    border-left: 1px solid #ef4f51;
    list-style: none;
  }
  .noOrder{
    margin-left: -1.09rem;
    padding-top: 3.2rem;
    text-align: center;
    color: #666;
    font-size: .346667rem;
  }
  .order{
    width: 7.87rem;
    position: relative;
    padding: .67rem .53rem .61rem .48rem;

    // 时间
    .time{
      color: #aaa;
      font-size: .373333rem;
      display: block;
      text-align: left;
    }

    &::before{
      content: '';
      position: absolute;
      width: .56rem;
      height:.56rem;
      background:#fff url('../assets/time.png') center no-repeat;
      background-size: 100%;
      z-index: 3;
      top: .67rem;
      left: 0;
      border-radius: 100%;
      transform: translateX(-50%);
    }
  }

  .card{
    border-radius:.13rem;
    margin-top: .21rem;
    box-shadow: 1px 5px 5px rgba(50,50,50, .1), -1px 5px 5px rgba(50,50,50, .1);

    .header{
      display: flex;
      font-size: .35rem;
      color: #fff;
      border-radius: .13rem .13rem 0 0;
      background-color: #ff8f90;
      padding: .19rem .4rem;
    }
    .title{
      width: 2.426667rem;
      font-weight: normal;
    }

    .code{
      text-align: right;
      flex: 1;
    }

    .main{
      background-color: #fff;
      border-radius: .13rem;
      padding: .47rem .53rem;
      align-items: center;
      display: flex;
    }

    .price{
      color: #aaa;
      flex: 1;
    }

    .price-text{
      color: #ff771d;
      font-size: .64rem;
      // font-weight: bold;
      vertical-align: sub;
      padding-right: .2rem;
    }
    .desc{
      color: #666;
      font-size: .4rem;
      text-align: center;
      width: 2.88rem;
    }
  }

  
  
</style>
