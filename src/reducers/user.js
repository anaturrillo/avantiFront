import {LOAD_USER, REMOVE_USER} from "../utils/constants.actionTypes";

const actions = {
  [LOAD_USER]: action => action.user,
  [REMOVE_USER]: () => null
};

export const userReducer = (
  state = null,
  action,
  type=action.type
) => actions[type]? actions[type](action, state) : state;
