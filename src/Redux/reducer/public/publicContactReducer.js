import {
  CLEAR_ERRORS,
  CONTACT_SAVE_PB_REQUEST,
  CONTACT_SAVE_PB_SUCCESS,
  CONTACT_SAVE_PB_FAIL,
} from "../../constants/public/publicContactConstant";

export const publicContactSaveReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case CONTACT_SAVE_PB_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case CONTACT_SAVE_PB_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        message: action.payload,
      };
    case CONTACT_SAVE_PB_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
