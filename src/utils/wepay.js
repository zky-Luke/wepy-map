/**
 * 微信支付
 * @method WePay
 */
import wepy from 'wepy'
import { USER_SPECICAL_INFO, HAIBO_APPID, QIXING_APPID, VERSION } from '@/utils/constant.js'
import api from '@/api/api'

const WePay = async(options) => {
  console.log(options)
  // 获取订单号
  let user = wepy.getStorageSync(USER_SPECICAL_INFO)
  let response
  console.log('options.order')
  if (!options.order) {
    console.log('options.order111')
    let res = await api.OtherPayOrder({
      query: {
        userId: user.userid,
        fee: options.fee,
        platform: 1,
        type: options.type
      }
    })
    console.log(res)
    if (res.data.status === 200) {
      response = res.data.data.orderInfo
    } else {
      wx.showModal({
        title: '提示',
        content: res.data.data.errmsg,
        showCancel: false
      })
    }
  } else {
    response = options.order
  }

  // 微信支付
  let result = await api.WechatPay({
    method: 'POST',
    query: {
      userid: user.userid,
      appid: VERSION === 1 ? QIXING_APPID : HAIBO_APPID,
      goods_description: response.body,
      fee_type: response.fee_type,
      total_fee: response.total_fee,
      order_num: response.out_trade_no,
      openid: user.openid
    }
  })
  console.log(result)
  if (result.data.status === 200) {
    wx.requestPayment({
      timeStamp: result.data.data.timeStamp,
      nonceStr: result.data.data.nonceStr,
      package: result.data.data.package,
      signType: result.data.data.signType,
      paySign: result.data.data.sign,
      success: function (res) {
        options.success(res)
      },
      fail: function (res) {
        console.log(res)
        wx.showModal({
          title: '提示',
          // content: res.errMsg,
          content: '支付失败',
          showCancel: false
        })
      }
    })
  } else {
    wx.showModal({
      title: '提示',
      // content: result.data.message,
      content: '支付失败',
      showCancel: false
    })
  }
}

export { WePay }
