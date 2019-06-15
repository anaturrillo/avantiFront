export const mockExercise = {
  name: 'Ejercicio',
  author: 'anaturrillo',
  description: 'esta es la descripcion del ejercicio',
  image: {
    animation: '',
    static: 'https://source.unsplash.com/1600x900/?yoga'
  }
};

const mockExercises = [mockExercise, {
  name: 'Ejercicio Dos',
  author: 'anaturrillo',
  description: 'esta es la descripcion del ejercicio dos',
  image: {
    animation: '',
    static: 'https://source.unsplash.com/1600x900/?fitness'
  }
},{
  name: 'Ejercicio Tres',
  author: 'anaturrillo',
  description: 'esta es la descripcion del ejercicio tres',
  image: {
    animation: '',
    static: 'https://source.unsplash.com/1600x900/?workout'
  }
}];

export const getExercises = () => {
  return Promise.resolve(mockExercises)
};

export const getExercise = (exerciseId) => {
  return Promise.resolve(mockExercise)
};

export const createExercise = (exercise) => {
  return Promise.resolve(mockExercise)
};

export const editExercise = (exercise) => {
  return Promise.resolve(mockExercise)
};

export const removeExercise = (exerciseId) => {
  return Promise.resolve('ok')
};
