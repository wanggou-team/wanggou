<template>
  <div id="bindCard">
    <div>
      <van-cell-group>
        <van-field label="持卡人姓名" v-model="name" placeholder="请输入持卡人姓名" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="身份证号" v-model="idNo" placeholder="请输入身份证号" />
      </van-cell-group>

      <van-cell-group>
        <van-field type="number" label="预留手机号" v-model="phone" placeholder="请输入银行预留手机号" />
      </van-cell-group>

      <van-cell-group>
        <van-field label="手机验证码" v-model="code" placeholder="请输入手机验证码">
          <button class="sendCode" slot="button" @click="getPhoneCode" v-countdown :phone="phone">获取验证码</button>
        </van-field>
      </van-cell-group>

      <van-cell-group class="bank" @click.native="showBanks">
        <van-field label="所属银行" v-model="bank.name" placeholder="请选择所属银行" disabled>
          <van-icon name="arrow" slot="icon" />
        </van-field>
      </van-cell-group>

      <van-cell-group class="bankCard">
        <van-field label="银行卡号" v-model="bankCode" placeholder="请输入银行卡号" />
      </van-cell-group>

      <div class="item agreement-box">
         <van-checkbox v-model="checked" shape="square">我同意 <a id="agreement">《交易协议》</a></van-checkbox>
      </div>

      <div class="item">
        <van-button class="submit" @click="sure" :disabled="!checked" type="primary" bottom-action>确认并提交</van-button>
      </div>
      
    </div>
    <van-popup v-model="show" position="bottom" class="picker">
      <van-picker :columns="bankList" value-key="name" :show-toolbar="true" @cancel="cancel" @confirm="confirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Field, Checkbox, Toast, Popup, Picker, Icon } from 'vant';
import util from '@/plugin/'
import {mapState, mapActions} from 'vuex'
import axios from '@/plugin/axios'

export default {
	data () {
		return {
      show: false,
      columns: [],
      name: '',
      idNo: '',
      phone: '',
      code: '',
      bank: {},
      bankCode: '',
      checked: false
		}
  },
  validators: {
    name (value) {
      return Validator.value(value).required('请输入持卡人姓名');
    },
    idNo (value) {
      return Validator.value(value).required('请输入身份证号').regex(util.card, '请输入正确的身份证');
    },
    phone (value) {
      return Validator.value(value).required('请输入银行预留手机号').regex(util.phone, '请输入正确的手机号');
    },
    code (value) {
      return Validator.value(value).required('请输入手机验证码');
    },
    bank (value) {
      return Validator.value(value).required('请选择所属银行');
    },
    bankCode (value) {
      return Validator.value(value).required('请输入银行卡号');
    }
  },
  created(){
    this.getBankList()
  },
  computed: {
    ...mapState(['bankList'])
  },
	methods: {
    async getPhoneCode(event){
      if(util.phone.test(this.phone)){
        const data = await axios.get('/apis/front/loanOrder/bankCode.htm', {params: {phone: this.phone}})
        if(data.bizCode !== 1){
          Toast(data.msg)
        }
      }else{
        Toast('请正确输入手机号')
      }
    },
    showBanks(){
      this.show = true
    },
    ...mapActions(['getBankList']),

    // 确定选择银行卡
    confirm(bank = {}){
      console.log(bank)
      this.bank = bank
      this.show = false
    },

    // 取消选择
    cancel(){
      this.show = false
    },

		// 登录
		sure () {
      this.$validate().then(async (success) => {
        if(success){
          let params = {
            name: this.name,
            idNo: this.idNo,
            phone: this.phone,
            code: this.code,
            bankCode: this.bank.code,
            bankAccount: this.bankCode
          }
          const data = await axios.post('/apis/front/loanOrder/bindBank.htm', params)
          if(data.bizCode === 1){
            this.$router.go(-1)
          }
          
        }else{
          Toast(this.validation.errors[0].message)
        }
      })
		}
	},
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Icon.name]: Icon
  }
};
</script>

<style lang="scss" scoped>
  #bindCard{
    padding-top: .4rem
  }
	.item{
    padding: 0 .6rem;
  }
	

  .bank{
    margin-top: .32rem;
  }

  .bankCard{
    margin-bottom: .32rem;
  }
</style>

