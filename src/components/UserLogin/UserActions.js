import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER } from './ActionTypes';

export const getUser = (userNmae, password) => {
  var registerData = JSON.parse(localStorage.getItem('user'));
  if (registerData.userName === userNmae && registerData.password === password) {
    return {
      type: LOGIN_SUCCESS
    }
  } else {
    return {
      type: LOGIN_FAILURE
    }
  }
};
export const logout = () => {
  return {
    type: LOGOUT
  }
};
export const register = (user) => {
  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    password: user.password
  }
  localStorage.setItem('user', JSON.stringify(userData))
  return {
    type: REGISTER
  }
};