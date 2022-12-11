import {
  ALL_PROJECT_PB_REQUEST,
  ALL_PROJECT_PB_SUCCESS,
  ALL_PROJECT_PB_FAIL,
  PROJECT_DETAIL_PB_FAIL,
  PROJECT_DETAIL_PB_REQUEST,
  PROJECT_DETAIL_PB_SUCCESS,
  CLEAR_ERRORS,
} from "../../constants/public/publicProjectConstant";
import axios from "axios";


export const getPublicAllProjectAction = (user) => async (dispatch) => {
  const url = `/api/public/project/${user}`;
  try {
    dispatch({ type: ALL_PROJECT_PB_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ALL_PROJECT_PB_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: ALL_PROJECT_PB_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getPublicProjectDetailAction = (id) => async (dispatch) => {
  const url = `/api/public/project/${id}`;
  try {
    dispatch({ type: PROJECT_DETAIL_PB_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: PROJECT_DETAIL_PB_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAIL_PB_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
