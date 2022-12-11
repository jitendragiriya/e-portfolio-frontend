import {
  ALL_CONTACT_A_REQUEST,
  ALL_CONTACT_A_SUCCESS,
  ALL_CONTACT_A_FAIL,
  CLEAR_ERRORS,
} from "../../constants/admin/adminContactConstant";

export const adminAllContactReducer = (state = { allcontact: [] }, action) => {
  switch (action.type) {
    case ALL_CONTACT_A_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case ALL_CONTACT_A_SUCCESS:
      return {
        loading: false,
        allcontact: action.payload,
        progress: 100,
      };
    case ALL_CONTACT_A_FAIL:
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
