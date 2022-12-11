import {
  ADD_PROJECT_U_REQUEST,
  ADD_PROJECT_U_SUCCESS,
  ADD_PROJECT_U_FAIL,
  ADD_PROJECT_U_RESET,
  ALL_PROJECT_U_REQUEST,
  ALL_PROJECT_U_SUCCESS,
  ALL_PROJECT_U_FAIL,
  PROJECT_UPDATE_U_REQUEST,
  PROJECT_UPDATE_U_SUCCESS,
  PROJECT_UPDATE_U_FAIL,
  CLEAR_ERRORS,
  DELETE_PROJECT_U_FAIL,
  DELETE_PROJECT_U_REQUEST,
  DELETE_PROJECT_U_SUCCESS,
  DELETE_PROJECT_U_RESET,
  PROJECT_DETAIL_U_REQUEST,
  PROJECT_DETAIL_U_SUCCESS,
  PROJECT_DETAIL_U_FAIL,
  PROJECT_UPDATE_U_RESET,
} from "../../constants/user/userProjectConstant";

export const addUserProjectReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case ADD_PROJECT_U_REQUEST:
      return {
        loading: true,
        progress: 20,
        added: false,
      };
    case ADD_PROJECT_U_SUCCESS:
      return {
        loading: false,
        message: action.payload,
        added: true,
        progress: 100,
      };
    case ADD_PROJECT_U_FAIL:
      return {
        ...state,
        loading: false,
        added: false,
        progress: 100,
        error: action.payload,
      };
    case ADD_PROJECT_U_RESET:
      return {
        loading: false,
        progress: 100,
        message: null,
        added: false,
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

export const userAllProjectReducer = (state = { allproject: [] }, action) => {
  switch (action.type) {
    case ALL_PROJECT_U_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case ALL_PROJECT_U_SUCCESS:
      return {
        loading: false,
        allproject: action.payload,
        progress: 100,
      };
    case ALL_PROJECT_U_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        error: action.payload,
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

export const getUserProjectReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAIL_U_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case PROJECT_DETAIL_U_SUCCESS:
      return {
        loading: false,
        project: action.payload,
        progress: 100,
      };
    case PROJECT_DETAIL_U_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        error: action.payload,
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

export const userProjectUpdateReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_U_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case PROJECT_UPDATE_U_SUCCESS:
      return {
        loading: false,
        message: action.payload,
        progress: 100,
      };
    case PROJECT_UPDATE_U_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        error: action.payload,
      };
    case PROJECT_UPDATE_U_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        message: null,
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

export const deleteUserProjectReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case DELETE_PROJECT_U_REQUEST:
      return {
        ...state,
        loading: true,
        isdeleted: false,
        progress: 20,
      };
    case DELETE_PROJECT_U_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        message: action.payload,
        isdeleted: true,
      };
    case DELETE_PROJECT_U_FAIL:
      return {
        ...state,
        loading: false,
        isdeleted: false,
        progress: 100,
        error: action.payload,
      };
    case DELETE_PROJECT_U_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        isDeleted: false,
        isdeleted: false,
        message: null,
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
