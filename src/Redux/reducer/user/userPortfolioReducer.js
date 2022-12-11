import {
  CLEAR_ERRORS,
  SAVE_P_INFO_U_FAIL,
  SAVE_P_INFO_U_REQUEST,
  SAVE_P_INFO_U_SUCCESS,
  SAVE_P_INFO_U_RESET,
  MY_PORTFOLIO_U_FAIL,
  MY_PORTFOLIO_U_REQUEST,
  MY_PORTFOLIO_U_SUCCESS,
  SAVE_CONTACT_URL_U_REQUEST,
  SAVE_CONTACT_URL_U_SUCCESS,
  SAVE_CONTACT_URL_U_FAIL,
  SAVE_SKILLS_U_REQUEST,
  SAVE_SKILLS_U_SUCCESS,
  SAVE_SKILLS_U_FAIL,
  SAVE_SKILLS_U_RESET,
  SAVE_CONTACT_URL_U_RESET,
  SAVE_PROFILE_PIC_RESET,
  SAVE_PROFILE_PIC_U_REQUEST,
  SAVE_PROFILE_PIC_FAIL,
  SAVE_PROFILE_PIC_SUCCESS,
} from "../../constants/user/userPortfolioConstant";

export const saveUserPersonalInfoReducer = (
  state = { message: {} },
  action
) => {
  switch (action.type) {
    case SAVE_P_INFO_U_REQUEST:
      return {
        ...state,
        loading: true,
        progress: 20,
        isupdated: false,
      };
    case SAVE_P_INFO_U_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: true,
        message: action.payload,
      };
    case SAVE_P_INFO_U_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
      };
    case SAVE_P_INFO_U_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
        message: null,
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

export const saveUserProfilePicReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case SAVE_PROFILE_PIC_U_REQUEST:
      return {
        ...state,
        loading: true,
        progress: 20,
        isupdated: false,
      };
    case SAVE_PROFILE_PIC_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: true,
        message: action.payload,
      };
    case SAVE_PROFILE_PIC_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
      };
    case SAVE_PROFILE_PIC_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
        message: null,
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

export const saveUserSkillsReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case SAVE_SKILLS_U_REQUEST:
      return {
        ...state,
        loading: true,
        progress: 20,
        isupdated: false,
      };
    case SAVE_SKILLS_U_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: true,
        message: action.payload,
      };
    case SAVE_SKILLS_U_FAIL:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
      };
    case SAVE_SKILLS_U_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
        message: null,
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

export const saveUserContacturlReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case SAVE_CONTACT_URL_U_REQUEST:
      return {
        ...state,
        loading: true,
        progress: 20,
        isupdated: false,
      };
    case SAVE_CONTACT_URL_U_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: true,
        message: action.payload,
      };
    case SAVE_CONTACT_URL_U_FAIL:
      return {
        ...state,
        loading: false,
        isupdated: false,
        error: action.payload,
      };
    case SAVE_CONTACT_URL_U_RESET:
      return {
        ...state,
        loading: false,
        progress: 100,
        isupdated: false,
        error: action.payload,
        message: null,
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

export const getUserPortfolioReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case MY_PORTFOLIO_U_REQUEST:
      return {
        ...state,
        loading: true,
        progress: 20,
      };

    case MY_PORTFOLIO_U_SUCCESS:
      return {
        ...state,
        loading: false,
        progress: 100,
        portfolio: action.payload,
      };
    case MY_PORTFOLIO_U_FAIL:
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
