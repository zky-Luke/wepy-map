import { handleActions } from 'redux-actions'
import { ASSIGNMENT_MAP_CTX } from '../types/counter'

const stateData = {
  mapCtx: ''
}

export default handleActions({
  [ASSIGNMENT_MAP_CTX] (state, action) {
    return {
      ...state,
      mapCtx: action.payload
    }
  }
}, stateData)