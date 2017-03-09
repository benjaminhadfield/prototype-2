import * as actionTypes from './actions'

const initialState = {
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.NEW_JOB_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.NEW_JOB_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case actionTypes.NEW_JOB_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}
