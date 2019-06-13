
const mockUser = {
  _id: 'knaksjl',
  name: 'Ana',
  lastname: 'Turrillo',
  age:37,
  email: 'anaturrillo@gmail.com'
};

export const logUserIn = (credentials) => {
  return Promise.resolve(mockUser)
};

export const createUser = (user) => {
  return Promise.resolve({...user, _id:'kakaa'})
};

export const getUser = (token) => {
  return Promise.resolve(mockUser)
};

export const editUser = (user) => {
  return Promise.resolve(mockUser)
};

export const removeUser = () => {
  return Promise.resolve('ok')
};
