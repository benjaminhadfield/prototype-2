/**
 * Jobs Reducer
 */

import * as actionTypes from './actions'

const initialState = {
  jobs: [],
  loading: false,
  error: false,
  deleting: false
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
        error: action.error.message,
        loading: false
      }
    case actionTypes.DELETE_JOB_REQUEST:
      return {
        ...state,
        deleting: true
      }
    case actionTypes.DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter(item => item.job_id !== action.id),
        deleting: false
      }
    case actionTypes.DELETE_JOB_FAILURE:
      return {
        ...state,
        deleting: false
      }
    default:
      return state
  }
}
