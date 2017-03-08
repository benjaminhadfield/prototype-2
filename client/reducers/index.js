import {combineReducers} from 'redux'
import {default as containersReducer} from '../containers/reducer'

export default combineReducers({
  containers: containersReducer
})
