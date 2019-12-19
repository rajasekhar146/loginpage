import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER } from './ActionTypes'


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, register: true, user } : {};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: user
              };
        case LOGIN_FAILURE:
            return {
                loggedIn: false,
                register:true,
                error: "Username or password not matched"
              };
        case LOGOUT:
            return {
                loggedIn: false
              };
        case REGISTER:
            return {
                loggedIn: true,
                register:true,
                user: action.payload
              };
        default:
            return state;
    }
}