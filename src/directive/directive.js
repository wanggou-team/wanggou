import util from '@/plugin'

export default {
  inserted(el, binding) {


    function fn() {
      const value = el.getAttribute('phone')
      if (el.getAttribute('dsiabled') || !util.phone.test(value)) {
        return
      }
      el.setAttribute('disabled', 'disabled')
      let timer = null
      let time = 60

      function countdown() {
        el.innerText = `(${time--})秒后再获取`
        if (time !== 0) {
          setTimeout(countdown, 1000)
        } else {
          time = 60
          el.removeAttribute('disabled')
          el.innerText = '获取验证码'
        }
      }

      countdown()
    }



    el.addEventListener('click', fn, false)
  }
}