import axios from "axios";
import { BASE_URL } from "../../../constants";
import {
  USER_PORTFOLIO_PB_REQUEST,
  CLEAR_ERRORS,
  USER_PORTFOLIO_PB_SUCCESS,
  USER_PORTFOLIO_PB_FAIL,
} from "../../constants/public/publicPortfolioConstant";


export const getUserPortfolioPublicAction = (user) => async (dispatch) => {
  const url = `${BASE_URL}/api/portfolio/user/${user}`;
  try {
    dispatch({ type: USER_PORTFOLIO_PB_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_PORTFOLIO_PB_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: USER_PORTFOLIO_PB_FAIL,
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
