import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../reducers/index"
import { townMiddleware } from "../middleware"

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(townMiddleware))
)

export default store