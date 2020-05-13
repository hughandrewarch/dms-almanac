import { combineReducers } from 'redux';
import { REQUEST } from "../constants"
import SettlementReducer from "./SettlementReducer"
import PersonReducer from "./PersonReducer"
import RelationTypeReducer from "./RelationTypeReducer"
import RelationReducer from "./RelationReducer"

//TODO consider remove reducer or save for loading icon
const initialState = {
  settlements: { byId: {}, allIds: []},
  people: { byId: {}, allIds: []},
  relations: [],
  relationTypes: { byId: {}, allIds: []},
  settlementsList: [],
}

export default combineReducers({
    settlements: new SettlementReducer().reducer,
    people: new PersonReducer().reducer,
    relationTypes: new RelationTypeReducer().reducer,
    relations: new RelationReducer().reducer,
    root: rootReducer,
})

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isRequesting: true
      })
    default:
        return state
  }
}
