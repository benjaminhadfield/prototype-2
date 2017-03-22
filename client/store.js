import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {default as rootReducer} from "./reducers";

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

const configureStore = (reducer, preloadedState) => {
  return createStore(reducer, preloadedState, middleware)
}

export const store = configureStore(rootReducer)
