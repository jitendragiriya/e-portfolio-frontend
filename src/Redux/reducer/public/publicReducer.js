import {
  CLEAR_ERRORS,
  ADMIN_PORTFOLIO_PB_FAIL,
  ADMIN_PORTFOLIO_PB_REQUEST,
  ADMIN_PORTFOLIO_PB_SUCCESS,
} from "../../constants/public/publicConstant";

export const adminPortfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case ADMIN_PORTFOLIO_PB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_PORTFOLIO_PB_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolio: action.payload,
      };
    case ADMIN_PORTFOLIO_PB_FAIL:
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
