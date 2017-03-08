/**
 * Jobs Actions
 */

import axios from 'axios'

export const JOBS_LIST_REQUEST = 'JOBS_LIST_REQUEST'
export const JOBS_LIST_SUCCESS = 'JOBS_LIST_SUCCESS'
export const JOBS_LIST_FAILURE = 'JOBS_LIST_FAILURE'

const jobsListRequest = () => ({type: JOBS_LIST_REQUEST})
const jobsListSuccess = (response) => ({type: JOBS_LIST_SUCCESS, response})
const jobsListFailure = (error) => ({type: JOBS_LIST_FAILURE, error})

export const getJobsList = () => {
  return dispatch => {
    dispatch(jobsListRequest())
    axios.get('/api/jobs')
      .then(res => dispatch(jobsListSuccess(res)))
      .catch(err => dispatch(jobsListFailure(err)))
  }
}
