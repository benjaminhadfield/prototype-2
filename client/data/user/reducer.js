import * as actionTypes from './actions';

const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  role: '',
  loading: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        role: 'annon'
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        id: action.response.data.id,
        loading: false,
        role: action.response.data.role
      };
    case actionTypes.GET_USER_FAILURE:
      return {
        ...state,
        id: null,
        loading: false,
        error: action.error
      };
    case actionTypes.SET_HARDCODED_USER:
      return {
        ...state,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        role: action.user.role
      };
    default:
      return state;
  }
}
