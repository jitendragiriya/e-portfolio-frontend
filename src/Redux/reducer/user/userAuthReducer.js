import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  LOGGED_IN_USER_REQUEST,
  LOGGED_IN_USER_SUCCESS,
  LOGGED_IN_USER_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,
  CLEAR_ERRORS,
} from "../../constants/user/userAuthContant";

export const userAuthReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_SIGNUP_REQUEST:
    case LOGGED_IN_USER_REQUEST:
      return {
        loading: true,
        progress: 20,
        isAuthenticated: false,
        islogout: false,
      };
    case USER_LOGIN_SUCCESS:
    case USER_SIGNUP_SUCCESS:
    case LOGGED_IN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        isAuthenticated: true,
        islogout: false,
        user: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        progress: 100,
        user: null,
        isAuthenticated: false,
        islogout: true,
      };
    case USER_LOGIN_FAIL:
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        isAuthenticated: false,
        user: null,
        islogout: false,
        error: action.payload,
      };
    case LOGGED_IN_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        progress: 100,
        user: null,
        islogout: false,
        error: action.payload,
      };
    case USER_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        islogout: false,
        error: action.payload,
      };
    case USER_LOGOUT_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        islogout: false,
        isAuthenticated: false,
        error: null,
        user: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
