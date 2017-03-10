import axios from 'axios'

// action types
export const NEW_JOB_REQUEST = 'NEW_JOB_REQUEST';
export const NEW_JOB_SUCCESS = 'NEW_JOB_SUCCESS';
export const NEW_JOB_FAILURE = 'NEW_JOB_FAILURE';

// action creators
const newJobRequest  = () => ({type: NEW_JOB_REQUEST});
const newJobSuccess  = (response) => ({type: NEW_JOB_SUCCESS, response});
const newJobFailure  = (err) => ({type: NEW_JOB_REQUEST, err});

// action dispatchers
export const createNewJob = (data, successCallback, failureCallback) => {
  return dispatch => {
    dispatch(newJobRequest());
    axios.post('/api/jobs', data)
      .then(res => {
        dispatch(newJobSuccess(res))
        successCallback()
      })
      .catch(err => {
        failureCallback()
        dispatch(newJobFailure(err))
      });
  }
}
