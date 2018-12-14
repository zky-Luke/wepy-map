import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT, WECHART_PAY } from '../types/counter'

const stateData = {
  num: 0,
  asyncNum: 0
}

export default handleActions({
  [ASYNC_INCREMENT] (state, action) {
    console.log(action)
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  [WECHART_PAY] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, stateData)
