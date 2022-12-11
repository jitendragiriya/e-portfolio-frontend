import axios from "axios";
import {
  SAVE_PORTFOLIO_A_FAIL,
  SAVE_PORTFOLIO_A_REQUEST,
  SAVE_PORTFOLIO_A_SUCCESS,
  UPDATE_PORTFOLIO_A_FAIL,
  UPDATE_PORTFOLIO_A_REQUEST,
  UPDATE_PORTFOLIO_A_SUCCESS,
  MY_PORTFOLIO_A_FAIL,
  MY_PORTFOLIO_A_REQUEST,
  MY_PORTFOLIO_A_SUCCESS,
  CLEAR_ERRORS,
} from "../../constants/admin/portfoliConstant";

export const saveMyPortfolio = (formData) => async (dispatch) => {
  const url = `/api/admin/portfolio`;
  try {
    dispatch({ type: SAVE_PORTFOLIO_A_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: SAVE_PORTFOLIO_A_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: SAVE_PORTFOLIO_A_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getMyPortfolio = () => async (dispatch) => {
  const url = `/api/admin/m/portfolio`;
  try {
    dispatch({ type: MY_PORTFOLIO_A_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: MY_PORTFOLIO_A_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: MY_PORTFOLIO_A_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateMyPortfolio = (id, formData) => async (dispatch) => {
  const url = `/api/admin/portfolio/update/${id}`;
  try {
    dispatch({ type: UPDATE_PORTFOLIO_A_REQUEST });
    const { data } = await axios.put(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: UPDATE_PORTFOLIO_A_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PORTFOLIO_A_FAIL,
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
