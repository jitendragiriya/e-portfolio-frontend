import {
  CLEAR_ERRORS,
  DELETE_PROJECT_A_FAIL,
  DELETE_PROJECT_A_REQUEST,
  DELETE_PROJECT_A_SUCCESS,
  DELETE_PROJECT_A_RESET,
} from "../../constants/admin/adminProjectConstant";

export const deleteAdminProjectR = (
  state = { deleteAdminProject: {} },
  action
) => {
  switch (action.type) {
    case DELETE_PROJECT_A_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PROJECT_A_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        isDeleted: true,
      };
    case DELETE_PROJECT_A_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PROJECT_A_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false,
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
