import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../reducers/index"
import { pageMiddleware } from "../middleware"

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(pageMiddleware))
)

export default store