import {
  wxRequest
} from '@/utils/wxRequest'

const apiUser = 'https://bs.startai.cn'
const apiCharger = 'https://share.startai.cn/shared-power-bank-h5'
// const apiCharger = 'http://39.107.104.221:8081/shared-power-bank-h5'
// const apiUser = 'http://192.168.11.148:9001'
// const apiCharger = 'http://192.168.11.115:8081'

/**
 * LOGIN
 * 登录
 */

// 获取用户验证信息
const GetUserSpecicalInfo = (params) => wxRequest(params, apiUser + `/user/v1.0/wechat_mini_program/appid/${params.query.appId}/login/code/${params.query.code}`)

// 微信支付
const WechatPay = (params) => wxRequest(params, apiUser + '/pay/v1.0/wechat_mini_program')

/**
 * BATTERY
 * 充电宝租借
 */

// 借出充电宝
const LendPortableBattery = (params) => wxRequest(params, apiCharger + '/doLend')

// 查询押金金额、余额
const GetBalanceAndDeposit = (params) => wxRequest(params, apiCharger + '/getBalanceAndDeposit')

// 查询订单列表
const QueryOrdersList = (params) => wxRequest(params, apiCharger + '/queryOrders')

// 用余额支付订单
const BalancePaymentOrder = (params) => wxRequest(params, apiCharger + '/payByBalance')

// 其他支付
const OtherPayOrder = (params) => wxRequest(params, apiCharger + '/payOrder')

export default {
  GetUserSpecicalInfo,
  LendPortableBattery,
  GetBalanceAndDeposit,
  QueryOrdersList,
  BalancePaymentOrder,
  OtherPayOrder,
  WechatPay
}
