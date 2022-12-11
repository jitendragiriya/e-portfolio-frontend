import { OPEN_HAMBURGER_SUCCESS } from "../../constants/user/hamburgerConstant";

export const userHamburgerReducer = (state = { hamburger: {} }, action) => {
  switch (action.type) {
    case OPEN_HAMBURGER_SUCCESS:
      return {
        hamburger: action.payload,
      };
    default:
      return state;
  }
};
