import {
  ADD_PROJECT_U_FAIL,
  ADD_PROJECT_U_REQUEST,
  ADD_PROJECT_U_SUCCESS,
  ALL_PROJECT_U_FAIL,
  ALL_PROJECT_U_REQUEST,
  ALL_PROJECT_U_SUCCESS,
  PROJECT_UPDATE_U_FAIL,
  PROJECT_UPDATE_U_REQUEST,
  PROJECT_UPDATE_U_SUCCESS,
  DELETE_PROJECT_U_FAIL,
  DELETE_PROJECT_U_REQUEST,
  DELETE_PROJECT_U_SUCCESS,
  CLEAR_ERRORS,
  PROJECT_DETAIL_U_SUCCESS,
  PROJECT_DETAIL_U_REQUEST,
  PROJECT_DETAIL_U_FAIL,
} from "../../constants/user/userProjectConstant";

import axios from "axios";

export const addUserProjectAction = (formData) => async (dispatch) => {
  const url = `/api/user/addproject`;
  try {
    dispatch({ type: ADD_PROJECT_U_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ADD_PROJECT_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROJECT_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserAllProjectAction = () => async (dispatch) => {
  const url = `/api/user/allproject`;
  try {
    dispatch({ type: ALL_PROJECT_U_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ALL_PROJECT_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: ALL_PROJECT_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserProjectAction = (id) => async (dispatch) => {
  const url = `/api/user/project/${id}`;
  try {
    dispatch({ type: PROJECT_DETAIL_U_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: PROJECT_DETAIL_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAIL_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const userProjectUpdateAction = (id, formData) => async (dispatch) => {
  const url = `/api/user/project/update/${id}`;
  try {
    dispatch({ type: PROJECT_UPDATE_U_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: PROJECT_UPDATE_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_U_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteUserProjectAction = (id) => async (dispatch) => {
  const url = `/api/user/project/delete/${id}`;
  try {
    dispatch({ type: DELETE_PROJECT_U_REQUEST });
    const { data } = await axios.delete(
      url,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: DELETE_PROJECT_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_U_FAIL,
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
