<template>
  <div>
    <div id="recovery">
      <header class="header">
        <h2 class="title">花券回收</h2>
      </header>
      <div class="form">
        <van-cell-group class="item" @click.native="showCards">
          <van-field class="field"  
            v-model="cardType" 
            label="选择卡种" 
            placeholder="请选择卡种" 
            disabled 
            required>
            <van-icon name="arrow" slot="icon" />
          </van-field>
        </van-cell-group>
        <van-cell-group class="item" @click.native="showPrices">
          <van-field class="field"  
            v-model="price" 
            label="选择面额" 
            placeholder="请选择面额" 
            disabled 
            required>
            <van-icon name="arrow" slot="icon" />
          </van-field>
        </van-cell-group>

        <van-cell-group class="item">
          <van-field 
            class="field" 
            v-model="cardCode" 
            label="卡序列号" 
            placeholder="请输入卡序列号" 
            required/>
        </van-cell-group>

        <van-cell-group class="item">
          <Card :banks="userBankCards" />
        </van-cell-group>

        <van-button class="submit" @click="submit" type="primary" bottom-action>提交</van-button>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" class="picker">
      <van-picker :columns="columns" :show-toolbar="true" @cancel="cancel" @confirm="confirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Field, Icon, Picker, Popup, Toast } from 'vant';
import Card from '@/components/Card'
import axios from '@/plugin/axios'
import {mapActions, mapState} from 'vuex'

export default {
  data(){
    return {
      show: false,
      cardType: '花木范花券礼品卡',
      price: '',
      cardCode: '',
      columns: []
    }
  },
  validators: {
    cardType (value) {
      return Validator.value(value).required('请选择卡种')
    },
    price (value) {
      return Validator.value(value).required('请选择面额')
    },
    cardCode(value){
      return Validator.value(value).required('请填写卡序列号')
    }
  },
  created(){
    let authMessage = {}
    // 获取面额
    this.getCardPrice()

    // 获取可用银行卡
    this.getBankCards()

    // 获取之前填写的序列号
    try {
      authMessage = JSON.parse(localStorage.getItem('authMessage'))
      this.cardCode = authMessage.serial
      this.price = authMessage.price
      this.cardType = authMessage.cardType || '花木范花券礼品卡'
    } catch (error) {
      console.log(error)
    }

  },
  computed: {
    ...mapState(['cardPrice', 'user', 'userBankCards'])
  },
  watch:{
    cardPrice(newVal = {}){
      this.price = newVal.loanAmount
    }
  },
  methods: {
    ...mapActions(['getCardPrice', 'getBankCards']),
    // 显示卡种
    showCards(){
      this.show = true;
      this.columns = [{text: '花木范花券礼品卡'}]
    },

    // 显示面额
    showPrices(){
      this.show = true;
      this.columns = [this.cardPrice]
    },

    // 取消
    cancel(){
      this.show = false;
    },

    // 确认
    confirm(current){
      this.show = false
      // 面额
      if(current.loanAmount){
        this.price = current.loanAmount
      // 卡种
      }else{
        this.cardType = current.text
      }
    },

    // 花券回收提交
    submit(){
      // 判断当前用户是否有绑定银行卡
      if(!Array.isArray(this.userBankCards) || this.userBankCards.length < 1){
        Toast("您尚未绑定银行卡,请先绑定银行卡")
        return 
      }
      this.$validate().then(async (success) => {
        if(success){
          localStorage.setItem('authMessage', JSON.stringify({
            banks: this.userBankCards,
            price: this.price,
            cardType: this.cardType,
            serial: this.cardCode
          }))
          this.$router.push('/auth')
        }else{
          Toast(this.validation.errors[0].message)
        }
      })
    }
  },
  components: {
    Card,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  }
}
</script>
<style lang="scss" scoped>
#recovery{
  padding: .4rem;
}
.header{
  background: #f8f8f8 url('../assets/flower01.png') center no-repeat;
  background-size: 100%;
  line-height: 1.2rem;
  border: .013333rem dashed #ef4f51;
  border-radius: 1.2rem;

  .title{
    text-align: center;
    color: #ef4f51;
    font-size: .4rem;
  }
}

.form{
  padding-top: .4rem;
}


.item{
  margin-bottom: .16rem;
  border-radius: .2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  &::after{
    display: none;
  }
}

.field{
  border-radius: .2rem;
}
</style>

<style lang="scss">
  .picker{
    .van-picker__cancel, 
    .van-picker__confirm{
      font-size: .4rem;
    }
  }
</style>
