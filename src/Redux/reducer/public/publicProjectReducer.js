import {
  ALL_PROJECT_PB_REQUEST,
  ALL_PROJECT_PB_SUCCESS,
  ALL_PROJECT_PB_FAIL,
  PROJECT_DETAIL_PB_REQUEST,
  PROJECT_DETAIL_PB_SUCCESS,
  PROJECT_DETAIL_PB_FAIL,
  CLEAR_ERRORS,
} from "../../constants/public/publicProjectConstant";

export const publicAllProjectReducer = (state = { allproject: {} }, action) => {
  switch (action.type) {
    case ALL_PROJECT_PB_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case ALL_PROJECT_PB_SUCCESS:
      return {
        loading: false,
        allproject: action.payload,
        progress: 100,
      };
    case ALL_PROJECT_PB_FAIL:
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

export const publicProjectDetailReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAIL_PB_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case PROJECT_DETAIL_PB_SUCCESS:
      return {
        loading: false,
        project: action.payload,
        progress: 100,
      };
    case PROJECT_DETAIL_PB_FAIL:
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
