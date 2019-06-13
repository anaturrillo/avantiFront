import {mockExercise} from "./exercises";

const mockRoutine = {
  exercises: [{
    _id: 'lalala',
    exercise: mockExercise,
    duration: 10,
    durationType: 'reps'
  },{
    _id: 'pepepe',
    exercise: {
      name: 'Ejercicio Dos',
      author: 'anaturrillo',
      description: 'esta es la descripcion del ejercicio dos',
      image: {
        animation: '',
        static: 'https://i.pinimg.com/736x/55/a3/b7/55a3b7b72107feabd33bd834cf853474.jpg'
      }
    },
    duration: 10,
    durationType: 'reps'
  }],
  rest: 30,
  repetitions: 0,
  restBetweenReps: 0,
  state: 'published'
};

const mockRoutines = [mockRoutine, {
  exercises: [{
    _id: 'pepepe',
    exercise: {
      name: 'Ejercicio Tres',
      author: 'anaturrillo',
      description: 'esta es la descripcion del ejercicio tres',
      image: {
        animation: '',
        static: 'http://www.yogaenmadrid.net/wp-content/uploads/2011/07/asana_bhujangasana.gif'
      }
    },
    duration: 10,
    durationType: 'reps'
  }],
  rest: 30,
  repetitions: 0,
  restBetweenReps: 0,
  state: 'published'
}];

export const getRoutines = () => {
  return Promise.resolve(mockRoutines)
};

export const findRoutine = (routineId) => {
  return Promise.resolve(mockRoutine)
};

export const createRoutine = (routine) => {
  return Promise.resolve(mockRoutine)
};

export const editRoutine = (routine) => {
  return Promise.resolve(mockRoutine)
};

export const removeRoutine = (routineId) => {
  return Promise.resolve('ok')
};

export const addExercise = (exercise, routineId) => {
  return Promise.resolve('ok')
};
