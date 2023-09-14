import { combineReducers } from 'redux'

import LoginReducer from './LoginReducer'
import reducer from './reducer'


const allReducers = combineReducers({
    LoginReducer,
    reducer
})


export default allReducers;
