import {usersReducer as users} from './user'
import {routineReducer as routines} from './routines'
import {exerciseReducer as exercises} from './exercises'
import {combineReducers} from "redux/es/redux";

const reducers = combineReducers({users, routines, exercises});

export default reducers
