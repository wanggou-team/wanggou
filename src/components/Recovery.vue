<template>
  <div>
    <div id="recovery">
      <header class="header">
        <h2 class="title">花券回收</h2>
      </header>

      <div class="form">
        <van-cell-group class="item" @click.native="showCards">
          <van-field class="field"  v-model="form.cardType" label="选择卡种" placeholder="请选择卡种" disabled required>
            <van-icon name="arrow" slot="icon" />
          </van-field>
        </van-cell-group>

        <van-cell-group class="item">
          <van-field class="field"  @click.native="showPrices" v-model="form.price" label="选择面额" placeholder="请选择面额" disabled required>
            <van-icon name="arrow" slot="icon" />
          </van-field>
        </van-cell-group>

        <van-cell-group class="item">
          <van-field class="field" v-model="form.cardCode" label="卡序列号" placeholder="请输入卡序列号" required/>
        </van-cell-group>

        <van-cell-group class="item">
          <Card />
        </van-cell-group>

        <van-button class="submit" type="primary" bottom-action>提交</van-button>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" class="picker">
      <van-picker :columns="columns" :show-toolbar="true" @cancel="cancel" @confirm="confirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Field, Icon, Picker, Popup } from 'vant';
import Card from '@/components/Card'

export default {
  data(){
    return {
      show: false,
      form: {},
      columns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ]
    }
  },
  methods: {
    // 显示卡种
    showCards(){
      this.show = true;
    },

    // 显示面额
    showPrices(){
      this.show = true;
    },

    // 取消
    cancel(){
      this.show = false;
    },

    // 确认
    confirm(){
      this.show = false
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
