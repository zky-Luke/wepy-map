/**
 * 验证是否是手机号码
 * @method vailPhone
 * @param  {string}   number   手机号
 */

// function vailPhone(number) {
//   let flag = true
//   let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
//   if (number.length !== 11 || !myreg.test(number)) {
//     flag = false
//   }
//   return flag
// }

/**
 * 获取当前时间
 * @method getCurrentTime
 */

function getCurrentTime() {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

/**
 * 毫秒值转指定日期格式
 * @method millisecondToDate
 */

function millisecondToDate(time, format) {
  let total = Math.ceil(time / 1000)
  let day = Math.floor(total / (24 * 60 * 60))
  let hour = Math.floor((total % (24 * 60 * 60)) / (60 * 60))
  let minute = Math.floor(((total % (24 * 60 * 60)) % (60 * 60)) / 60)
  let second = Math.floor(((total % (24 * 60 * 60)) % (60 * 60)) % 60)
  return format.replace(/dd|hh|mm|ss/g, function(a) {
    switch (a) {
      case 'dd':
        return day
      case 'hh':
        return hour
      case 'mm':
        return minute
      case 'ss':
        return second
    }
  })
}

export {
  getCurrentTime,
  millisecondToDate
}
