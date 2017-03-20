import axios from 'axios';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const SET_HARDCODED_USER = 'SET_HARDCODED_USER';

const getUserRequest = () => ({type: GET_USER_REQUEST});
const getUserSuccess = (response) => ({type: GET_USER_SUCCESS, response});
const getUserFailure = (error) => ({type: GET_USER_FAILURE, error});

export const setHardcodedUser = (user) => ({type: SET_HARDCODED_USER, user});
export const getUser = (authToken) => {
  return dispatch => {
    dispatch(getUserRequest());
    axios.post('/api/user', {authToken})
      .then(res => dispatch(getUserSuccess(res)))
      .catch(err => dispatch(getUserFailure(err)))
  }
}
