import {
  ADMIN_ABOUT_FAIL,
  ADMIN_ABOUT_REQUEST,
  ADMIN_ABOUT_SUCCESS,
  CLEAR_ERRORS,
} from "../../constants/userConstants";

import axios from "axios";
import { BASE_URL } from "../../../constants";

export const getMyPortfolio = () => async (dispatch) => {
  const url = `${BASE_URL}/api/portfolio/me`;
  try {
    dispatch({ type: ADMIN_ABOUT_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ADMIN_ABOUT_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ABOUT_FAIL,
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
