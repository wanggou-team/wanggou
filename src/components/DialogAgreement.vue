<!--  -->
<template>
  <div class="dialog" v-show="isShow">
    <div class="wrap">
      <div class="title">
        旺购礼品卡转让协议
        <i class="close" @click="close"></i>
      </div>
      <article class="ft">旺购礼品卡转让协议（以下称“本协议”）是旺购平台（以下
        称“旺购”）与旺购用户（以下称“用户”或“您”）就礼品卡转
        让服务（或称”本服务”）所订立的有效合约。<span class="clo3">用户通过网络
        页面点击确认或以其他方式选择接受本协议，即表示用户与
        本平台已达成协议并同意接受本协议的全部约定内容。</span>
        在接受本协议之前，请用户仔细阅读本协议的全部内容（特
        别是以粗体下划线标注的内容）。<span class="clo3">如果您不同意本协议的任
        意内容，或者无法准确理解本平台对条款的解释，请不要进
        行后续操作。</span>
      </article>
      <article class="ft">
          <h3 class="sm-title">第一条：相关定义</h3>
          <p>
            <span class="clo3">1.	礼品卡：</span>
            <span>本协议所称礼品卡，是指电子商务卡、商城超市
              卡、游戏充值卡、话费充值卡、旅游预付卡、石油预付充值
              卡等业务运营商发行的具有一定面值、可用于购买商品或服
              务的卡片；</span>
          </p>
          <p>
            <span class="clo3">2.	礼品卡转让：</span>
            <span>本协议所称礼品卡转让，是指本平台提供的
              礼品卡转让服务。用户可将其持有的礼品卡，转让给本平台
              或本平台合作商户，转让所得的金额将直接转入用户的账户
              余额中。具体支持的礼品卡卡种以用户使用本服务时的页面
              提示为准。</span>
          </p>
      </article>
      <article class="ft">
        <h3 class="sm-title">第二条：费用</h3>
        <p>
          1.	用户使用本服务需要支付一定的手续费，手续费已包含在
          礼品卡的回收价中；
        </p>
        <p>
          2.	如果用户选项加急服务，另需支付加急的费用，具体费用
          由旺购提交礼品卡的页面提示为准，加急服务费将直接从到
          账金额中扣除。
        </p>
      </article> 
      <article class="ft">
        <h3 class="sm-title">第三条：权利义务</h3>
        <p>1.	使用本服务的用户，需符旺购用户实名制度（验证本人手
          机号码，并上传身份证正反面与手持身份证正面自拍照）；</p>
        <p>
          2.	用户需按照页面提示选择正确的礼品卡面值。如选择的面
          值小于实际面值，本平台将按照选择的面值进行结算,当选择
          的面值大于实际面值，本平台将不结算。由此产生的损失由
          用户自行承担，本平台对此不承担责任；
        </p>
        <p>
          3.	如因礼品卡卡号、卡密不正确或转让前已经使用等原因，
          导致礼品卡不能转让的，用户需自行解决或联系发卡业务运
          营商解决，本平台不介入处理；
        </p>
        <p>4.	本平台应按照本协议的约定及页面提示，向用户提供礼品
        卡转让服务，并保证用户成功转让的资金及时转入其旺购账
        户；</p>
        <p>5.	鉴于互联网及网络交易的特殊性，本平台无法鉴别和判断
        虚拟交易或正在交易或已交易的礼品卡来源、权属、真伪、
        等权力属性、自然属性及其他各状况。因此，用户在交易前
        应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风
        险。基于此，用户承诺，用户在本平台所从事的礼品卡交易
        活动属于合法的，用户所提供的礼品卡均具有合法正当的来
        源；</p>
        <p>6.	经国家生效法律文书或行政处罚决定确认用户存在违法行
        为，或者本平台有足够事实依据可以认定用户存在违法或违
        反服务协议行为的，本平台有权选择下列一种或多种处理措
        施进行处理：
          <ul class="padLeft">
            <li>中止或终止用户网上交易权限；</li>
            <li>注销或删除用户帐户；</li>
            <li>在本平台公告上公布用户的违法行为；</li>
            <li>保留相应的交易记录提交公安机关处理。</li>
          </ul>
        </p>
      </article>
      <article class="ft">
        <h3 class="sm-title">第四条：其他</h3>
        <p>1.	本协议适用中华人民共和国大陆地区法律。因本平台与用
        户就本协议的签订、履行或解释发生争议，双方应努力友好
        协商解决。如协商不成，本平台和用户同意由我公司所在地
        法院管辖审理双方的纠纷或争议；</p>
        <p>2.	本协议内容包括协议正文及所有本平台已经发布的或将来
        可能发布的服务协议、隐私政策、交易规则等条款与本协议
        具有同等效力，您均应遵照执行；</p>
        <p>3. 本协议未尽事宜，以旺购网站上公布的《旺购礼品卡转让
          服务协议》等相关规则为准。</p>
      </article>
      <div class="title">礼品卡回收说明</div>
      <article class="ft">
        <p>1. 礼品卡回收成功后，金额将打入您的账户余额中，您需要
          通过实名认证之后才可提现；</p>
        <p>
          2. 当选择的面值与实际面值不一致时，您将损失差额，而且
          会造成延迟到账，请正确选择；</p>
        <p>3. 转让成功前请不要丢弃实体卡；</p>
        <p>4. 您的账号因自身原因礼品卡被盗取或封存导致不能审核的
          责任由您自己承担，我们将直接撤单；</p>
        <p>5. 若您重复提交同一卡号或故意提交错误信息的，我们会取
          消交易，并冻结您的账户信息</p>
        <p>6. 如果您私下将礼品卡信息交易给其他买家，并再次出售给
          本网站，造成的损失由您承担，我们将对您的账户信息进行
          冻结处理；</p>
        <p>7. 礼品卡交易在未给您打款期间出现问题的话，您应积极配
          合解决问题，根据要求我们将延迟打款，如果问题没有解决
          我们将按责任轻重来加以处理；</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isShow:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
  methods: {
    close() {
      this.$emit('update:isShow', false)
    }
  },
  components: {
  }
}

</script>
<style lang="scss" scoped>
.dialog{
  position: absolute;
  top:0;
  left:0;
  right:0;
  padding-bottom: .27rem;
  background: rgba(0,0,0,.3);
}
$color3:#333;
$color6:#666;
.clo3{
  color:$color3;
}
.clo6{
  color:$color6;
}
li{
  list-style: disc;
}
.wrap{
  box-sizing: border-box;
  width:90%;
  margin: 0 auto;
  padding:0 .4rem;
  margin-top:.27rem;
  background:#fff;
  .title{
    width:100%;
    height:1.09rem;
    line-height:1.09rem;
    color:$color3;
    text-align: center;
    font-weight: bold;
    position: relative;
    .close{
      position: absolute;
      width:.27rem;
      height:.27rem;
      right:0px;
      top:.4rem;
      background: url("../assets/close.png") no-repeat;
      background-size: cover
    }
  }
  .sm-title{
    font-size:.35rem;
    color:$color3;
  }
  .ft{
    @extend .clo6;
    padding:.19rem 0;
    font-size: .35rem;
  }
  .padLeft{
    padding-left: .35rem;
  }
}
</style>