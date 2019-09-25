import { applyMiddleware, compose, createStore } from "redux"
import rootReducer from "../reducers/index"
import thunkMiddleware from 'redux-thunk'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store