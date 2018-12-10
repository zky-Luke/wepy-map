import { combineReducers } from 'redux'
import counter from './counter'
import map from './map'

export default combineReducers({
  counter,
  map
})
