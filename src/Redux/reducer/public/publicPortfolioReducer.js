import {
  CLEAR_ERRORS,
  USER_PORTFOLIO_PB_FAIL,
  USER_PORTFOLIO_PB_REQUEST,
  USER_PORTFOLIO_PB_SUCCESS,
} from "../../constants/public/publicPortfolioConstant";

export const publicUserPortfolioReducer = (
  state = { portfolio: {} },
  action
) => {
  switch (action.type) {
    case USER_PORTFOLIO_PB_REQUEST:
      return {
        ...state,
        loading: true,
        progress: 20,
      };
    case USER_PORTFOLIO_PB_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        portfolio: action.payload,
      };
    case USER_PORTFOLIO_PB_FAIL:
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
