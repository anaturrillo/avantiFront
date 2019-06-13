import {ADD_EXERCISE, EDIT_ROUTINE, LOAD_ROUTINE, LOAD_ROUTINES, REMOVE_ROUTINE} from "../utils/constants.actionTypes";
import {dispatchAction} from "./utils";
import {routineClient} from "../api";

const loadRoutines = (routines) => ({type: LOAD_ROUTINES, routines});
const loadRoutine = (routine) => ({type: LOAD_ROUTINE, routine});
const edit = (routine) => ({type: EDIT_ROUTINE, routine});
const remove = (routineId) => ({type: REMOVE_ROUTINE, routineId});
const addExercise = (exercise, routineId) => ({type: ADD_EXERCISE, data:{exercise, routineId}});

export const getRoutines = () => dispatch => {
  const dispatchLoad = dispatchAction(dispatch, loadRoutines);
  return routineClient.get()
    .then(dispatchLoad)
};

export const findRoutine = (routineId) => dispatch => {
  const dispatchLoad = dispatchAction(dispatch, loadRoutine);
  return routineClient.find(routineId)
    .then(dispatchLoad)
};

export const editRoutine = (routine) => dispatch => {
  const dispatchEdit = dispatchAction(dispatch, edit);
  return routineClient.edit(routine)
    .then(dispatchEdit)
};

export const removeRoutine = (routineId) => dispatch => {
  const dispatchRemove = dispatchAction(dispatch, remove);
  return routineClient.remove(routineId)
    .then(dispatchRemove)
};

export const addExerciseToRoutine = (exercise, routineId) => dispatch => {
  return routineClient.addExercise(exercise, routineId)
    .then(() => dispatch(addExercise(exercise, routineId)))
};
