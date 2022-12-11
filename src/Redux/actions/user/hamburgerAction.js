import {
  OPEN_HAMBURGER_REQUEST,
  OPEN_HAMBURGER_SUCCESS,
} from "../../constants/user/hamburgerConstant";

export const userHamburgerAction = () => async (dispatch) => {
  dispatch({ type: OPEN_HAMBURGER_REQUEST });
  let hamburger = JSON.parse(localStorage.getItem("hamburger"));
  if (hamburger === null) {
    hamburger = true;
    localStorage.setItem("hamburger", JSON.stringify(hamburger));
  } else {
    hamburger = !hamburger;
    localStorage.setItem("hamburger", JSON.stringify(hamburger));
  }
  dispatch({
    type: OPEN_HAMBURGER_SUCCESS,
    payload: hamburger,
  });
};
