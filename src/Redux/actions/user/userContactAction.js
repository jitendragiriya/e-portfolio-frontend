import {
  ALL_CONTACT_U_FAIL,
  ALL_CONTACT_U_REQUEST,
  ALL_CONTACT_U_SUCCESS,
  CLEAR_ERRORS,
} from "../../constants/user/userContactConstant";

import axios from "axios";

export const getAllUserContact = () => async (dispatch) => {
  const url = `/api/user/allcontact`;
  try {
    dispatch({ type: ALL_CONTACT_U_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ALL_CONTACT_U_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: ALL_CONTACT_U_FAIL,
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
