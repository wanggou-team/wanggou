function setCookie (name, val, path, date) {
  let oDate = new Date()
  oDate.setDate(oDate.getDate() + (date || 30))
  const sDate = ';expires=' + oDate
  const Path = ';path=' + (path || '/')
  document.cookie = name + '=' + val + sDate + Path
}

function getCookie (name) {
  const sCookies = document.cookie
  const arr = sCookies.split('; ')
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split('=')
    if (arr2[0] === name) {
      return arr2[1]
    }
  }
}

function delCookie (name) {
  setCookie(name, '', '', -1)
}

//判断浏览器的版本 判断是否是微信浏览器
var browser={
  versions:function(){
      var u = navigator.userAgent, app = navigator.appVersion;
      console.log(u)
      return {
          weixin: u.indexOf('MicroMessenger') != -1,
          trident: u.indexOf('Trident') > -1, //IE
          presto: u.indexOf('Presto') > -1, //opera
          webKit: u.indexOf('AppleWebKit') > -1, //webkit
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //firefox
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //mobile
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android or uc
          iPhone: u.indexOf('iPhone') > -1 , //iPhone QQHD
          iPad: u.indexOf('iPad') > -1, //iPad
          webApp: u.indexOf('Safari') == -1
      };
  }(),
  language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

function AppUrl(){
  let versionType = browser.versions

  // 微信默认打开应用宝
  if (versionType.weixin) {
    window.location.href  = "http://a.app.qq.com/o/simple.jsp?pkgname=[name]"    
  }

  if (versionType.ios) {
    window.location.href = "https://itunes.apple.com/us/app/花木范/id1390952201?l=zh&ls=1&mt=8"
  } else {
    window.location.href = "wushang://android"

    let t1 = Date.now();
    let hasApp = true;

    setTimeout(function () {    //t的时间就是出发APP启动的时间，若APP启动了，再次返回页面时t2这行代码执行，hasApp即为true。反之若APP没有启动即为false
      let t2 = Date.now();
      hasApp = !(!t1 || t2 - t1 < 1000 + 150);
      
    } , 1000);

    setTimeout(function () {  //没有安装APP则跳转至应用宝下载，延时时间设置为2秒
      if(!hasApp){
        window.location.href = "https://mall.huamushijie.com/res/app/android/hmf.apk"
      }
    } , 2000);
  }
}


export default {
	card: /^(\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	phone: /^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$/,
	setCookie,
	getCookie,
  delCookie,
  AppUrl
}