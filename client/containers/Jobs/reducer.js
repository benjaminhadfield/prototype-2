/**
 * Jobs Reducer
 */

import * as actionTypes from './actions'

const initialState = {
  jobs: [],
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOBS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.JOBS_LIST_SUCCESS:
      return {
        ...state,
        jobs: action.response.data,
        loading: false
      }
    case actionTypes.JOBS_LIST_FAILURE:
      return {
        ...state,
        error: error,
        loading: false
      }
    default:
      return state
  }
}
