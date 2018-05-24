<template>
  <div id="bindCard">
    <div>
      <van-cell-group>
        <van-field label="持卡人姓名" v-model="name" placeholder="请输入持卡人姓名" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="身份证号" v-model="card" placeholder="请输入身份证号" />
      </van-cell-group>

      <van-cell-group>
        <van-field type="number" label="预留手机号" v-model="phone" placeholder="请输入银行预留手机号" />
      </van-cell-group>

      <van-cell-group>
        <van-field label="手机验证码" v-model="code" placeholder="请输入手机验证码">
          <span class="sendCode" slot="button">(50)秒后再获取</span>
        </van-field>
      </van-cell-group>

      <van-cell-group class="bank">  
        <van-field label="所属银行" v-model="bank" placeholder="请选择所属银行" />
      </van-cell-group>

      <van-cell-group class="bankCard">
        <van-field label="银行卡号" v-model="bankCode" placeholder="请输入银行卡号" />
      </van-cell-group>

      <div class="item agreement-box">
         <van-checkbox v-model="checked" shape="square">我同意 <a id="agreement">《交易协议》</a></van-checkbox>
      </div>

      <div class="item">
        <van-button class="submit" @click="sure" type="primary" bottom-action>确认并提交</van-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Field, Checkbox, Toast } from 'vant';
import {card, phone} from '@/plugin'

export default {
	data () {
		return {
      name: '',
      card: '',
      phone: '',
      code: '',
      bank: '',
      bankCode: '',
      checked: false
		}
  },
  validators: {
    name (value) {
      return Validator.value(value).required('请输入持卡人姓名');
    },
    card (value) {
      return Validator.value(value).required('请输入身份证号').regex(card, '请输入正确的身份证');
    },
    phone (value) {
      return Validator.value(value).required('请输入银行预留手机号').regex(phone, '请输入正确的手机号');
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
	methods: {
		// 登录
		sure () {
      this.$validate().then((success) => {
        if(success){
          this.$router.push('/')
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
    [Checkbox.name]: Checkbox
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
	.sendCode{
		color: #ffb53c;
		border-left: 1px solid #c1c1c1;
		padding-left: .333333rem;
	}

  .bank{
    margin-top: .32rem;
  }

  .bankCard{
    margin-bottom: .32rem;
  }
</style>

