<template>
    <div id="login">
      <h1 id="logo">
        <img src="../assets/logo.png" alt="旺购" />
      </h1>
      <div>
        <div class="item phone">
          <!-- <i class="icon"></i> -->
          <van-field v-model="user" placeholder="请输入手机号" />
        </div>
        <div class="item code">
          <!-- <i class="icon"></i> -->
          <van-field v-model="code" placeholder="请输入验证码">
            <button :phone="user" class="sendCode" @click="getCode" slot="button" v-countdown>获取验证码</button>
          </van-field>
        </div>
        <van-button class="submit" @click="login" type="primary" bottom-action>按钮</van-button>
      </div>
    </div>
</template>

<script>
import { Cell, CellGroup, Button, Field, Toast } from 'vant';
import axios from '@/plugin/axios'
import util from '@/plugin'

export default {
	data () {
		return {
			user: '',
			code: ''
		}
	},
	validators: {
    user (value) {
      return Validator.value(value).required('请输入手机号');
    },
    code (value) {
      return Validator.value(value).required('请输入验证码');
    }
  },
	methods: {
		// 登录
		login () {
			this.$validate().then(async (success) => {
        if(success){
					const data =  await axios.post('/apis/front/login.htm', {userNm: this.user, code: this.code})
					if(data.bizCode === 0){
						Toast(data.msg)
					}else{
						const user = data.data || {}
						this.$store.commit('SET_USER', user)
						util.setCookie('loginToken', user.loginToken)
						this.$router.go('/home')
					}
        }else{
          Toast(this.validation.errors[0].message)
        }
      })
		},

		// 获取验证码
		async getCode(){
			if(!this.user.trim()){
				Toast('请输入手机号')
				return;
			}

			if (!util.phone.test(this.user)){
				Toast('请输入正确的手机号')
				return ;
			}
			const data = await axios.get('/apis/front/code.htm', {params: {userNm: this.user}})
			if(data.bizCode === 0){
				Toast(data.msg)
			}
		}
	},
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field
  }
};
</script>

<style lang="scss" scoped>
	#login{
		box-sizing: border-box;
		height: 100vh;
		background-color: #fff;
		padding: 2.37rem 1.12rem 0;
		.item{
			border-bottom: 1px solid #adadad;
			display: flex;
			align-items: center;

			&::before{
				content: "";
				width: .6rem;
				height: .6rem;
				margin-right: .533333rem;
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
			}

			&.phone::before{
				background-image: url('../assets/icon-phone.png');
			}
			&.code::before{
				background-image: url('../assets/icon-password.png');
			}
		}
		.van-cell{
			color: #ef4f51;
			flex: 1;
			padding-left: 0;
			padding-right: .106667rem;
			background-color: transparent;
		}
	}
	#logo{
		text-align: center;
		font-size: 0;
		padding-bottom: 1.866667rem;

		img{
			width: 2.053333rem;
			height: 3.2rem;
		}
	}
	.sendCode{
		color: #ffb53c;
		border-left: 1px solid #c1c1c1;
		padding-left: .333333rem;
	}
</style>
