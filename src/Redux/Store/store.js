import allReducers from "./reducers/allReducers"
// import reducer from "./reducers/reducer"
import { createStore } from 'redux';



const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
// store.subscribe(() => console.log(store))
// return createStore(allReducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());