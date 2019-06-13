import {ADD_EXERCISE, EDIT_ROUTINE, LOAD_ROUTINE, LOAD_ROUTINES, REMOVE_ROUTINE} from "../utils/constants.actionTypes";

const actions = {
  [LOAD_ROUTINES]: action => action.routines,
  [LOAD_ROUTINE]: (action, state) => [...state, action.routine],
  [EDIT_ROUTINE]: (action, state, routine=action.routine) =>
    [...state.filter(e => e._id ===routine._id), routine],
  [REMOVE_ROUTINE]: (action, state) => state.filter(e => e._id !== action.routineId),
  [ADD_EXERCISE]: (action, state) => {
    const routineId = action.data.routineId;
    const routine = state.find(e => e._id === routineId);
    const newRoutineExercises = routine.exercises.concat(action.exercise);
    const routineWithExercise = {... routine, exercises: newRoutineExercises};
    const newState = state.filter(e => e._id !== routineId);

    return newState.concat(routineWithExercise);
  }
};

export const routineReducer = (
  state=[],
  action,
  type=action.type
) => actions[type]? action[type](action, state) : state;
