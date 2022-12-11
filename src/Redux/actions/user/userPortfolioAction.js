import axios from "axios";
import { BASE_URL } from "../../../constants";
import {
  SAVE_P_INFO_U_FAIL,
  SAVE_P_INFO_U_REQUEST,
  SAVE_P_INFO_U_SUCCESS,
  MY_PORTFOLIO_U_FAIL,
  MY_PORTFOLIO_U_REQUEST,
  MY_PORTFOLIO_U_SUCCESS,
  CLEAR_ERRORS,
  SAVE_SKILLS_U_REQUEST,
  SAVE_SKILLS_U_SUCCESS,
  SAVE_SKILLS_U_FAIL,
  SAVE_CONTACT_URL_U_REQUEST,
  SAVE_CONTACT_URL_U_SUCCESS,
  SAVE_CONTACT_URL_U_FAIL,
  SAVE_PROFILE_PIC_SUCCESS,
  SAVE_PROFILE_PIC_FAIL,
  SAVE_PROFILE_PIC_U_REQUEST,
} from "../../constants/user/userPortfolioConstant";

export const saveUserPersonalInfoAction = (formData) => async (dispatch) => {
  const url = `${BASE_URL}/api/user/save/personalinfo`;
  try {
    dispatch({ type: SAVE_P_INFO_U_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: SAVE_P_INFO_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: SAVE_P_INFO_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const saveUserProfilePicAction = (formData) => async (dispatch) => {
  const url = `${BASE_URL}/api/user/save/profilepic`;
  try {
    dispatch({ type: SAVE_PROFILE_PIC_U_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: SAVE_PROFILE_PIC_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: SAVE_PROFILE_PIC_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const saveUserSkillsAction = (formData) => async (dispatch) => {
  const url = `${BASE_URL}/api/user/save/skills`;
  try {
    dispatch({ type: SAVE_SKILLS_U_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: SAVE_SKILLS_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: SAVE_SKILLS_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const saveUserContactUrlAction = (formData) => async (dispatch) => {
  const url = `${BASE_URL}/api/user/save/contacturl`;
  try {
    dispatch({ type: SAVE_CONTACT_URL_U_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: SAVE_CONTACT_URL_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: SAVE_CONTACT_URL_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserPortfolioAction = () => async (dispatch) => {
  const url = `${BASE_URL}/api/user/m/portfolio`;
  try {
    dispatch({ type: MY_PORTFOLIO_U_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: MY_PORTFOLIO_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: MY_PORTFOLIO_U_FAIL,
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
