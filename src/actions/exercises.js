import {EDIT_EXERCISE, LOAD_EXERCISE, LOAD_EXERCISES, REMOVE_EXERCISE} from "../utils/constants.actionTypes";
import {exerciseClient} from "../api";
import {dispatchAction} from "./utils";

const loadExercises = (exercises) => ({type: LOAD_EXERCISES, exercises});
const loadExercise = (exercise) => ({type: LOAD_EXERCISE, exercise});
const edit = (exercise) => ({type: EDIT_EXERCISE, exercise});
const remove = (exerciseId) => ({type: REMOVE_EXERCISE, exerciseId});

export const getExercises = () => dispatch => {
  const dispatchLoad = dispatchAction(dispatch, loadExercises);

  return exerciseClient.get()
    .then(dispatchLoad)
};

export const getExercise = (exerciseId) => dispatch => {
  const dispatchLoad = dispatchAction(dispatch, loadExercise);

  return exerciseClient.find(exerciseId)
    .then(dispatchLoad)
};

export const createExercise = (exercise) => dispatch => {
  const dispatchLoad = dispatchAction(dispatch, loadExercise);

  return exerciseClient.create(exercise)
    .then(dispatchLoad)
};

export const editExercise = (exercise) => dispatch => {
  const dispatchEdit = dispatchAction(dispatch, edit);

  return exerciseClient.edit(exercise)
    .then(dispatchEdit)
};

export const removeExercise = (exerciseId) => dispatch => {
  const dispatchRemove = dispatchAction(dispatch, remove);

  return exerciseClient.remove(exerciseId)
    .then(dispatchRemove)
};
