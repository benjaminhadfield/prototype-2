import {combineReducers} from 'redux'
import {default as jobsReducer} from './Jobs/reducer'

export default combineReducers({
  jobs: jobsReducer
})
