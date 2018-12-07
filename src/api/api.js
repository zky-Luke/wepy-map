import {
  wxRequest
} from '@/utils/wxRequest'

// const apiUser = 'https://share.startai.cn'
const apiUser = 'http://192.168.11.148:9001'
const apiCharger = 'http://192.168.16.21:8081'

/**
 * LOGIN
 * 登录
 */

// 获取用户验证信息
const GetUserSpecicalInfo = (params) => wxRequest(params, apiUser + `/user/v1.0/wechat_mini_program/appid/${params.query.appId}/login/code/${params.query.code}`)

/**
 * BATTERY
 * 充电宝租借
 */

// 借出充电宝
const LendPortableBattery = (params) => wxRequest(params, apiCharger + '/doLend')

// 查询订单列表
const QueryOrdersList = (params) => wxRequest(params, apiCharger + '/queryOrders')

// 用余额支付订单
const BalancePaymentOrder = (params) => wxRequest(params, apiCharger + '/payByBalance')

export default {
  GetUserSpecicalInfo,
  LendPortableBattery,
  QueryOrdersList,
  BalancePaymentOrder
}
