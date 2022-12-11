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
  CLEAR_ERRORS,
} from "../../constants/user/userAuthContant";

import axios from "axios";


export const userLogin = (formData) => async (dispatch) => {
  const url = `/api/login`;
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// REGISTER USER
export const userSignup = (formData) => async (dispatch) => {
  const url = `/api/signup`;
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    let err;
    if (error.response === undefined) {
      err = undefined;
    } else {
      err = error.response.data.message;
    }
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: err,
    });
  }
};

// LOGGEDD_IN USER
export const loggedInUser = () => async (dispatch) => {
  const url = `/api/user/me`;
  try {
    dispatch({ type: LOGGED_IN_USER_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: LOGGED_IN_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGGED_IN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOGOUT USER
export const userLogout = () => async (dispatch) => {
  const url = `/api/logout`;
  try {
    await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
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
