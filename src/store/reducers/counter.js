import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT, STORE_LOCATION, SCAN_CODE_PARAMS } from '../types/counter'

const stateData = {
  num: 0,
  asyncNum: 0,
  location: {},
  params: {} // 微信扫码传入参数
}

export default handleActions({
  [ASYNC_INCREMENT] (state, action) {
    console.log(action)
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  [STORE_LOCATION] (state, action) {
    return {
      ...state,
      location: action.payload
    }
  },
  [SCAN_CODE_PARAMS] (state, action) {
    return {
      ...state,
      params: action.payload
    }
  }
}, stateData)
