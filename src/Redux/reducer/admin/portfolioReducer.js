import {
  CLEAR_ERRORS,
  SAVE_PORTFOLIO_A_FAIL,
  SAVE_PORTFOLIO_A_REQUEST,
  SAVE_PORTFOLIO_A_SUCCESS,
  UPDATE_PORTFOLIO_A_FAIL,
  UPDATE_PORTFOLIO_A_REQUEST,
  UPDATE_PORTFOLIO_A_SUCCESS,
  MY_PORTFOLIO_A_FAIL,
  MY_PORTFOLIO_A_REQUEST,
  MY_PORTFOLIO_A_SUCCESS,
} from "../../constants/admin/portfoliConstant";

export const savePortfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case SAVE_PORTFOLIO_A_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_PORTFOLIO_A_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolio: action.payload,
      };
    case SAVE_PORTFOLIO_A_FAIL:
      return {
        ...state,
        loading: false,
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

export const myPortfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case MY_PORTFOLIO_A_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case MY_PORTFOLIO_A_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolio: action.payload,
      };
    case MY_PORTFOLIO_A_FAIL:
      return {
        ...state,
        loading: false,
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

export const updatePortfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case UPDATE_PORTFOLIO_A_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PORTFOLIO_A_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolio: action.payload,
      };
    case UPDATE_PORTFOLIO_A_FAIL:
      return {
        ...state,
        loading: false,
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
