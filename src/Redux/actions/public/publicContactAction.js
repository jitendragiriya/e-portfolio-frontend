import {
  CONTACT_SAVE_PB_REQUEST,
  CONTACT_SAVE_PB_SUCCESS,
  CONTACT_SAVE_PB_FAIL,
  CLEAR_ERRORS
} from "../../constants/public/publicContactConstant";
import axios from "axios";

export const publicContactSaveAction = (user, formData) => async (dispatch) => {
  const url = `/api/public/contact/${user}`;
  try {
    dispatch({ type: CONTACT_SAVE_PB_REQUEST });
    const { data } = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({
      type: CONTACT_SAVE_PB_SUCCESS,
      payload: data.response,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_SAVE_PB_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
