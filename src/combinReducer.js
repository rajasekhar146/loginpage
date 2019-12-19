import { combineReducers } from 'redux'
import todoReducer from './components/TodoList/todoReducers'
import AuthReducer from './components/UserLogin/AuthReducer'


const rootReducer = combineReducers({
    auth: AuthReducer,
    toDoList: todoReducer

})
export default rootReducer;