import * as actionTypes from './actions';

/**
 * ROLE: 'normal' | 'admin' | 'executive'
 */
const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  role: '',
  openEHRSessionId: '',
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
    case actionTypes.GET_OPEN_EHR_SESSION_ID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_OPEN_EHR_SESSION_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        openEHRSessionId: action.response.data.sessionId
      }
    case actionTypes.GET_OPEN_EHR_SESSION_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case actionTypes.SET_HARDCODED_USER:
      return {
        ...state,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        role: action.user.role,
        openEHRSessionId: action.user.openEHRSessionId
      };
    default:
      return state;
  }
}
