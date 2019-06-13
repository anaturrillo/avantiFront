import {LOAD_USER, REMOVE_USER} from "../utils/constants.actionTypes";
import {STORAGED_USER} from "../utils/constants.general";
import {userClient} from "../api";
import {dispatchAction} from "./utils";

const setUserInLocalStorage = user => {
  localStorage.setItem(STORAGED_USER, user._id);
  return user
};

export const loadUser = (user) => {
  return ({type: LOAD_USER, user});
};
export const logUserOut = () => ({type: REMOVE_USER});

export const login = credentials => dispatch => {
  const dispatchLoadUser = dispatchAction(dispatch, loadUser);

  return userClient.login(credentials)
    .then(setUserInLocalStorage)
    .then(dispatchLoadUser)
};

export const signUp = user => dispatch => {
  const dispatchLoadUser = dispatchAction(dispatch, loadUser);
  return userClient.create(user)
    .then(setUserInLocalStorage)
    .then(dispatchLoadUser)
};

export const logout = () => dispatch => {
  localStorage.removeItem(STORAGED_USER);
  dispatch(logUserOut())
};

export const checkUser = () => dispatch => {
  const dispatchLoadUser = dispatchAction(dispatch, loadUser);
  const storagedUserId = localStorage.getItem(STORAGED_USER);

  if (storagedUserId) {
    return userClient.find(storagedUserId)
      .then(dispatchLoadUser)
  }
};
