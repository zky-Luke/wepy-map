import {
  wxRequest
} from '@/utils/wxRequest'

const apiUser = 'https://bs.startai.cn'
const apiCharger = 'https://share.startai.cn/shared-power-bank-h5'
// const apiUser = 'http://192.168.11.148:9001'
// const apiCharger = 'http://39.107.104.221:8081/shared-power-bank-h5'
// const apiCharger = 'http://192.168.11.115:8081'

/**
 * USER
 * 用户业务
 */

// 获取用户验证信息
const GetUserSpecicalInfo = (params) => wxRequest(params, apiUser + `/user/v1.0/wechat_mini_program/appid/${params.query.appId}/login/code/${params.query.code}`)

// 微信支付
const WechatPay = (params) => wxRequest(params, apiUser + '/pay/v1.0/wechat_mini_program')

/**
 * BATTERY
 * 充电宝业务
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

// 附近店铺
const NearbyStore = (params) => wxRequest(params, apiCharger + '/getLocation')

// 查询店铺详情
const MerchatDetails = (params) => wxRequest(params, apiCharger + '/getMerchatDetails')

// 店铺分类
const MechantClassification = (params) => wxRequest(params, apiCharger + '/getMechantClassification')

// 查看明细
const TransactionDetails = (params) => wxRequest(params, apiCharger + '/getTransactionDetails')

// 查询是否有借出单
const UserHasLend = (params) => wxRequest(params, apiCharger + '/getUserHasLend')

// 查询充电线计费详情
const chargingCableBill = (params) => wxRequest(params, apiCharger + '/queryChargingCableBill')

// 充电线下单
const lineOrder = (params) => wxRequest(params, apiCharger + '/doLineOrder')

// 查询设备类型
const queryDeviceType = (params) => wxRequest(params, apiCharger + '/queryDeviceType')

// 获取充电线密码
const getPwd = (params) => wxRequest(params, apiCharger + '/getPwd')

export default {
  GetUserSpecicalInfo,
  WechatPay,
  LendPortableBattery,
  GetBalanceAndDeposit,
  QueryOrdersList,
  BalancePaymentOrder,
  OtherPayOrder,
  NearbyStore,
  MerchatDetails,
  MechantClassification,
  TransactionDetails,
  UserHasLend,
  chargingCableBill,
  lineOrder,
  queryDeviceType,
  getPwd
}
