import axios from "axios";
import {
  CLEAR_ERRORS,
  ADMIN_PORTFOLIO_PB_FAIL,
  ADMIN_PORTFOLIO_PB_REQUEST,
  ADMIN_PORTFOLIO_PB_SUCCESS,
} from "../../constants/public/publicConstant";


export const getAdminPortfolioPublicAction = () => async (dispatch) => {
  const url = `/api/portfolio/admin`;
  try {
    dispatch({ type: ADMIN_PORTFOLIO_PB_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ADMIN_PORTFOLIO_PB_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PORTFOLIO_PB_FAIL,
      payload: error.response.data.message,
    });
  }
};

// ERRORS
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
