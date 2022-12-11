import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// import { composeWithDevTools } from "redux-devtools-extension";

import { userAuthReducer } from "./reducer/user/userAuthReducer";
import { adminPortfolioReducer } from "./reducer/public/publicReducer";
import { userAllContactReducer } from "./reducer/user/userContactReducer";
import {
  getUserPortfolioReducer,
  saveUserContacturlReducer,
  saveUserPersonalInfoReducer,
  saveUserProfilePicReducer,
  saveUserSkillsReducer, 
} from "./reducer/user/userPortfolioReducer";
import {
  addUserProjectReducer,
  deleteUserProjectReducer,
  getUserProjectReducer,
  userAllProjectReducer,
  userProjectUpdateReducer,
} from "./reducer/user/userProjectReducer";
import {
  publicAllProjectReducer,
  publicProjectDetailReducer,
} from "./reducer/public/publicProjectReducer";
import { publicContactSaveReducer } from "./reducer/public/publicContactReducer";
import { publicUserPortfolioReducer } from "./reducer/public/publicPortfolioReducer";
import { userHamburgerReducer } from "./reducer/user/hamburgerReducer";

const reducer = combineReducers({
  //public reducers
  homePage: adminPortfolioReducer,
  publicUserPortfolio: publicUserPortfolioReducer,
  publicUserAllProject: publicAllProjectReducer,
  publicProjectDetail: publicProjectDetailReducer,
  savePublicContact: publicContactSaveReducer,

  // user reducers
  userHamburger: userHamburgerReducer,
  user: userAuthReducer,
  userContacts: userAllContactReducer,
  userPortfolio: getUserPortfolioReducer,
  saveUserPersonalInfo: saveUserPersonalInfoReducer,
  saveUserProfilePic: saveUserProfilePicReducer,
  saveUserSkills: saveUserSkillsReducer,
  saveUserContacturl: saveUserContacturlReducer,
  addUserProject: addUserProjectReducer,
  userAllProject: userAllProjectReducer,
  userProject: getUserProjectReducer,
  userProjectUpdate: userProjectUpdateReducer,
  deleteUserProject: deleteUserProjectReducer,
});

let initialstate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  applyMiddleware(...middleware)
);

export default store;
