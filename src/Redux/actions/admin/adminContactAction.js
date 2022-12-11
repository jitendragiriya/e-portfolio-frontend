import {
  ALL_CONTACT_A_FAIL,
  ALL_CONTACT_A_REQUEST,
  ALL_CONTACT_A_SUCCESS,
  CLEAR_ERRORS,
} from "../../constants/admin/adminContactConstant";

import axios from "axios";
import { BASE_URL } from "../../../constants";

export const getAllContactAdmin = () => async (dispatch) => {
  const url = `${BASE_URL}/api/admin/allcontact`;
  try {
    dispatch({ type: ALL_CONTACT_A_REQUEST });
    const { data } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: ALL_CONTACT_A_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: ALL_CONTACT_A_FAIL,
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
