import {
  ALL_CONTACT_U_REQUEST,
  ALL_CONTACT_U_SUCCESS,
  ALL_CONTACT_U_FAIL,
  CLEAR_ERRORS,
} from "../../constants/user/userContactConstant";

export const userAllContactReducer = (state = { allcontact: [] }, action) => {
  switch (action.type) {
    case ALL_CONTACT_U_REQUEST:
      return {
        loading: true,
        progress: 20,
      };
    case ALL_CONTACT_U_SUCCESS:
      return {
        loading: false,
        allcontact: action.payload,
        progress: 100,
      };
    case ALL_CONTACT_U_FAIL:
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
