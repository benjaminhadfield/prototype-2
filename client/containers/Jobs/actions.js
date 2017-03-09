/**
 * Jobs Actions
 */

import axios from 'axios'

export const JOBS_LIST_REQUEST = 'JOBS_LIST_REQUEST'
export const JOBS_LIST_SUCCESS = 'JOBS_LIST_SUCCESS'
export const JOBS_LIST_FAILURE = 'JOBS_LIST_FAILURE'
export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST'
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS'
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE'

const jobsListRequest = () => ({type: JOBS_LIST_REQUEST})
const jobsListSuccess = (response) => ({type: JOBS_LIST_SUCCESS, response})
const jobsListFailure = (error) => ({type: JOBS_LIST_FAILURE, error})
const deleteJobRequest = () => ({type: DELETE_JOB_REQUEST})
const deleteJobSuccess = (id) => ({type: DELETE_JOB_SUCCESS, id})
const deleteJobFailure = (error) => ({type: DELETE_JOB_FAILURE})

export const getJobsList = () => {
  return dispatch => {
    dispatch(jobsListRequest());
    axios.get('/api/jobs')
      .then(res => dispatch(jobsListSuccess(res)))
      .catch(err => dispatch(jobsListFailure(err)));
  }
}

export const deleteJob = (id) => {
  return dispatch => {
    dispatch(deleteJobRequest());
    axios.delete(`/api/jobs/${id}`)
      .then(_ => dispatch(deleteJobSuccess(id)))
      .catch(err => dispatch(deleteJobFailure(err)))
  }
}
