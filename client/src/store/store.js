import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducers/reduce"
import reduxThunk from "redux-thunk"
const initState={}
const enhancer=Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(reducer,initState,enhancer(applyMiddleware(reduxThunk)))
export default store
