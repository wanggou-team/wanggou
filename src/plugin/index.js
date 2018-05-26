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
      return {
          weixin: !!u.match(/MicroMessenger/i == 'micromessenger'),
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
function startApp() {
  let a,
      versionType = browser.versions
  if(versionType.weixin) { //微信默认打开应用宝
    a = "http://a.app.qq.com/o/simple.jsp?pkgname=[name]";
    return a    
  }
  if (versionType.ios) { //IOS系统，直接去itunes中，既可以下载也可以打开
    a = "https://itunes.apple.com/cn/app/[name]/id[id]";
  } else { //android系统，通过定时器的方式，判断是否安装有APP
    var hasApp = true , 
        t = 1000;
        setTimeout(function () {  //没有安装APP则跳转至应用宝下载，延时时间设置为2秒
          if(!hasApp) a = "http://a.app.qq.com/o/simple.jsp?pkgname=[name]";
          return a
        } , 2000);
        var t1 = Date.now();
        a = "wushang://android";
        setTimeout(function () {    //t的时间就是出发APP启动的时间，若APP启动了，再次返回页面时t2这行代码执行，hasApp即为true。反之若APP没有启动即为false
          var t2 = Date.now();
          hasApp = !(!t1 || t2 - t1 < t + 150);
        } , t);
  }
  return a
}


export default {
	card: /^(\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	phone: /^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$/,
	setCookie,
	getCookie,
  delCookie,
  startApp
}