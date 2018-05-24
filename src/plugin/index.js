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

export default {
	card: /^(\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	phone: /^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$/,
	setCookie,
	getCookie,
	delCookie
}