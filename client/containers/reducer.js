import {combineReducers} from 'redux'
import {default as jobsReducer} from './Jobs/reducer'
import {default as confirmationReducer} from './Confirmation/reducer'

export default combineReducers({
  jobs: jobsReducer,
  confirmation: confirmationReducer
})
