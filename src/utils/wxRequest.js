import wepy from 'wepy'
// import util from './util'
import tip from './tip'
// import md5 from './md5'

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
  if (!params.disableLoad) {
    tip.loading(params.loadText)
  }
  let data = params.query || {}
    // data.sign = SIGN
    // data.time = TIMESTAMP
  console.log(url)
  console.log(data)
  try {
    let res = await wepy.request({
      url: url,
      method: params.method || 'GET',
      data: data,
      header: { 'Content-Type': 'application/json' }
    })
    tip.loaded()
    return res
  } catch (err) {
    tip.loaded()
    wx.showModal({
      title: '提示',
      content: err.errMsg,
      showCancel: false
    })
    return Promise.reject(err.errMsg)
  }
}

module.exports = {
  wxRequest
}
