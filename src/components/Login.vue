<template>
    <div id="login">
      <h1 id="logo">
        <img src="../assets/logo.png" alt="旺购" />
      </h1>
      <div>
        <div class="item">
          <i class="icon"></i>
          <van-field v-model="user" placeholder="请输入用户名" />
        </div>
        <div class="item">
          <i class="icon"></i>
          <van-field v-model="code" placeholder="请输入验证码">
            <span class="sendCode" slot="button">(50)秒后再获取</span>
          </van-field>
        </div>
        <van-button class="submit" @click="login" type="primary" bottom-action>按钮</van-button>
      </div>
    </div>
</template>

<script>
import { Cell, CellGroup, Button, Field } from 'vant';

export default {
	data () {
		return {
			user: '',
			code: ''
		}
	},
	methods: {
		// 登录
		login () {
			this.$router.push('/')
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
		.icon{
			display: inline-block;
			width: .6rem;
			background: pink;
			height: .6rem;
			margin-right: .533333rem;
		}

		.submit{
			margin-top: .986667rem;
			height: 1.173333rem;
			line-height: 1.173333rem;
			background-color: #ef4f51;
			border-radius: 6px;
		}

		.item{
			border-bottom: 1px solid #adadad;
			display: flex;
			align-items: center;
		}
		.van-cell{
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
