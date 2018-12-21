import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT, STORE_LOCATION } from '../types/counter'

const stateData = {
  num: 0,
  asyncNum: 0,
  location: {}
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
  }
}, stateData)
