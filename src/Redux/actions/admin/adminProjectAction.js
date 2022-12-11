import {
  CLEAR_ERRORS,
  DELETE_PROJECT_A_FAIL,
  DELETE_PROJECT_A_REQUEST,
  DELETE_PROJECT_A_SUCCESS,
} from "../../constants/admin/adminProjectConstant";

import axios from "axios";


export const deleteAdminProject = (id) => async (dispatch) => {
  const url = `/api/admin/project/delete/${id}`;
  try {
    dispatch({ type: DELETE_PROJECT_A_REQUEST });
    const { data } = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: DELETE_PROJECT_A_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_A_FAIL,
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
