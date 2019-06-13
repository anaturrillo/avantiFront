export const mockExercise = {
  name: 'Ejercicio',
  author: 'anaturrillo',
  description: 'esta es la descripcion del ejercicio',
  image: {
    animation: '',
    static: 'http://www.yogaenmadrid.net/wp-content/uploads/2011/07/asana_bhujangasana.gif'
  }
};

const mockExercises = [mockExercise, {
  name: 'Ejercicio Dos',
  author: 'anaturrillo',
  description: 'esta es la descripcion del ejercicio dos',
  image: {
    animation: '',
    static: 'https://i.pinimg.com/736x/55/a3/b7/55a3b7b72107feabd33bd834cf853474.jpg'
  }
},{
  name: 'Ejercicio Tres',
  author: 'anaturrillo',
  description: 'esta es la descripcion del ejercicio tres',
  image: {
    animation: '',
    static: 'http://www.yogaenmadrid.net/wp-content/uploads/2011/07/asana_bhujangasana.gif'
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
