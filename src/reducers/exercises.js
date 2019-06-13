import {EDIT_EXERCISE, LOAD_EXERCISE, LOAD_EXERCISES, REMOVE_EXERCISE} from "../utils/constants.actionTypes";

const actions = {
  [LOAD_EXERCISE]: (action, state) => [...state, action.exercise],
  [LOAD_EXERCISES]: action => action.exercises,
  [REMOVE_EXERCISE]: (action, state) => state.filter(e => e._id !== action.exerciseId),
  [EDIT_EXERCISE]: (action, state) => [...state.filter(e => e._id !== action.exercise._id), action.exercise]
};

export const exerciseReducer = (
  state=[],
  action,
  type=action.type
) => actions[type]? action[type](action, state) : state;

