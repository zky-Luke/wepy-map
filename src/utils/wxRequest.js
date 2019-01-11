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
    console.log('res', res)
    if (res.statusCode === 404) {
      tip.showModal('提示', '服务器错误')
    }
    tip.loaded()
    return res
  } catch (err) {
    console.log('err:', err)
    tip.loaded()
    wx.getNetworkType({
      success(res) {
        // console.log(res.networkType === 'none')
        if (res.networkType === 'none') {
          tip.showModal('提示', '网络错误')
        } else {
          tip.showModal('提示', '服务器错误')
        }
      }
    })
    return Promise.reject(err.errMsg)
  }
}

module.exports = {
  wxRequest
}
