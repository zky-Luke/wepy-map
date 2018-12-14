/**
 * 微信支付
 * @method WePay
 */
import wepy from 'wepy'
import { USER_SPECICAL_INFO, QIXING_APPID } from '@/utils/constant.js'
import api from '@/api/api'

const WePay = async(options) => {
  console.log(options)
  // 获取订单号
  let user = wepy.getStorageSync(USER_SPECICAL_INFO)
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
    // 微信支付
    let result = await api.WechatPay({
      method: 'POST',
      query: {
        userid: user.userid,
        appid: QIXING_APPID,
        goods_description: res.data.data.orderInfo.body,
        fee_type: res.data.data.orderInfo.fee_type,
        total_fee: res.data.data.orderInfo.total_fee,
        order_num: res.data.data.orderInfo.out_trade_no
      }
    })
    console.log(result)
    if (result.data.status === 200) {
      wx.requestPayment({
        timeStamp: result.data.timestamp,
        nonceStr: result.data.noncestr,
        package: result.data.package,
        signType: result.data.signType,
        paySign: result.data.sign,
        success: function (res) {
          wx.showModal({
            title: '提示',
            content: '支付成功',
            showCancel: false
          })
        },
        fail: function (res) {
          wx.showModal({
            title: '提示',
            content: '支付失败',
            showCancel: false
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: result.data.message,
        showCancel: false
      })
    }
  } else {
    wx.showModal({
      title: '提示',
      content: res.data.data.errmsg,
      showCancel: false
    })
  }
}

export { WePay }
