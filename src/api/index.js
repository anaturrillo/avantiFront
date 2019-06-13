import {createExercise, editExercise, getExercise, getExercises, removeExercise} from "./exercises";
import {createUser, editUser, getUser, logUserIn, removeUser} from "./users";
import {addExercise, createRoutine, editRoutine, findRoutine, getRoutines, removeRoutine} from "./routines";

export const userClient = {
  login: logUserIn,
  create: createUser,
  find: getUser,
  edit: editUser,
  remove: removeUser
};

export const exerciseClient = {
  create: createExercise,
  get: getExercises,
  find: getExercise,
  edit: editExercise,
  remove: removeExercise
};

export const routineClient = {
  create: createRoutine,
  get: getRoutines,
  find: findRoutine,
  edit: editRoutine,
  remove: removeRoutine,
  addExercise: addExercise
};
