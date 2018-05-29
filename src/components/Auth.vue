<template>
  <div id="auth">
    <div>
      <van-cell-group>
        <van-field label="姓名" v-model="name" placeholder="请输入用户名" required />
      </van-cell-group>
      <van-cell-group>
        <van-field label="身份证号" v-model="card" placeholder="请输入身份证号" required/>
      </van-cell-group>

      <van-cell-group>
        <van-field label="手机号" v-model="phone" placeholder="请输入手机号" required/>
      </van-cell-group>

      <!-- <div class="item">
        <i class="icon"></i>
        <van-field v-model="user" placeholder="请输入用户名" />
      </div>
      <div class="item">
        <i class="icon"></i>
        <van-field v-model="code" placeholder="请输入验证码">
          <span class="sendCode" slot="button">(50)秒后再获取</span>
        </van-field>
      </div> -->
      <div class="item agreement-box">
         <van-checkbox class="checkbox" v-model="checked" shape="square">请确保您的礼品卡所属信息为本人，我已阅读并接受<a id="agreement" @click.stop.prevent="showProtocol">《活动协议》</a></van-checkbox> 
      </div>

      <div class="item">
        <van-button class="back" @click="$router.back()" type="primary" bottom-action>上一步</van-button>
        <van-button class="submit" @click="apply" type="primary" bottom-action>立即申请</van-button>
      </div>
      
    </div>

    <DialogAgreement :is-show="show" />
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Field, Checkbox, Toast  } from 'vant';
import util from '@/plugin'
import axios from '@/plugin/axios'
import DialogAgreement from '@/components/DialogAgreement'

export default {
	data () {
		return {
      name: '',
      card: '',
      phone: '',
      show: false,
      checked: false
		}
  },
  validators: {
    name (value) {
      return Validator.value(value).required('请输入用户名');
    },
    card (value) {
      return Validator.value(value).required('请输入身份证号').regex(util.card, '请输入正确的身份证');
    },
    phone (value) {
      return Validator.value(value).required('请输入手机号').regex(util.phone, '请输入正确的手机号');
    }
  },
	methods: {
    // 显示协议
    showProtocol(){
      this.show = true
    },
		// 登录
		apply () {
			this.$validate().then(async (success) => {
        let authMessage = {
          banks: [],
          serial: ''
        }
        if(success){
          try {
            authMessage = JSON.parse(localStorage.getItem('authMessage'))
          } catch (error) {
            console.log(error)
          }
          const data = await axios.post('/front/loanOrder/repurchase.htm', {
            serial: authMessage.serial,
            bankId: authMessage.banks[0].id,
            name: this.name,
            idNo: this.card,
            phone: this.phone
          })

          if(data.bizCode === 0){
            Toast(data.msg)
          }else{
            this.$router.push('/wait')
          }
        }else{
          Toast(this.validation.errors[0].message)
        }
      })
		}
	},
  components: {
    DialogAgreement,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox
  }
};
</script>

<style lang="scss" scoped>
  .agreement-box{
    font-size: .266667rem;
  }
  .item{
    padding-left: .6rem;
    padding-right: .6rem;
  }
	#auth{
    padding-top:  .333333rem;
  }

  .back{
    background-color: #999;
    border-radius: 6px;
  }
  .submit{
    margin-top: .2rem;
  }
  .checkbox{
    display: inline-block;
  }
</style>

