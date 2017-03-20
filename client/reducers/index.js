import {combineReducers} from 'redux'
import {default as containers} from '../containers/reducer'
import {default as data} from '../data/reducer'

export default combineReducers({
  containers,
  data
})
